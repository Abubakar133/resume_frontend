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
    
    const userId = localStorage.getItem("userIdf");
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
            localStorage.setItem("userIdf", "null");
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
      
      {subscriptionUpdated && (
        <div className="success-message m-5" >
          <h2>Payment Successful!</h2>
          <p>Your subscription has been successfully activated! <br/> You can now go To Main Page and download one resume with this payment.<br/> This access is valid for 30 days, meaning you have 30 days to download a single resume.<br/> Once you've downloaded it, any additional downloads will require a new payment.</p>
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
