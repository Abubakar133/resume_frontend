import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { BASE_URL } from "../config";
const Success = () => {
  const location = useLocation();
  const [subscriptionUpdated, setSubscriptionUpdated] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const status = params.get('status');
    
    const userId = localStorage.getItem("userId");
    if (userId) {
      // Call your API to update the user's subscription status

      const updateSubscription = async () => {
        try {
          const response = await axios.post(`${BASE_URL}/update-subscription`, {
            userId, // Send the userId in the request body
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.status === 200) {
            setSubscriptionUpdated(true);
          } else {
            throw new Error('Failed to update subscription');
          }
        } catch (error) {
          setError(error.response?.data?.error || error.message);
          console.error('Error updating subscription:', error);
        }
      };

      updateSubscription();
    }
  }, [location.search]);

  return (
    <div>
      <h1>Dashboard</h1>
      {subscriptionUpdated && (
        <div className="success-message">
          <h2>Payment Successful!</h2>
          <p>Your subscription has been successfully activated. You can now enjoy our resume builder for the next 30 days!</p>
        </div>
      )}
      {error && (
        <div className="error-message">
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
      {/* Additional dashboard content */}
    </div>
  );
};

export default Success;
