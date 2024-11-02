import React, { useEffect, useState } from 'react';
import { Login } from "./Login"; // Import the login component
import { Signup } from "./Signup"; 
import { toast } from 'react-toastify';
import { BASE_URL } from "../config";
const BlogIframe = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  // Handle card clicks
  const handleCardClick = (event) => {
    event.preventDefault(); // Prevent the default behavior like page refresh
    setShowLoginPopup(true); // or setShowSignupPopup(true);
  };

  useEffect(() => {
    // Listen for messages from the iframe

    localStorage.setItem('BASE_URL', BASE_URL);
    const handleMessage = (event) => {
      if (event.data && event.data.action === 'openLoginPopup') {
        setShowLoginPopup(true); // Show the login popup when the message is received
      }
      if (event.data && event.data.action === 'openLoginPopup1') {
        setShowSignupPopup(true); // Show the signup popup when the message is received
      }
      if (event.data && event.data.action === 'closelogin') {
        setShowLoginPopup(false); // Show the signup popup when the message is received
      }
      if (event.data && event.data.action === 'closesignup') {
        setShowSignupPopup(false); // Show the signup popup when the message is received
      }
      if (event.data && event.data.action === 'sigupsuccessfull') {
        toast.success("Signup Successfully");
        setShowSignupPopup(false);
        setShowLoginPopup(true);
      }
     
      
    };

    window.addEventListener("message", handleMessage);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/Blog.html"
        title="Blog"
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>

      {/* Card example with click handler */}
      <div onClick={handleCardClick} style={{ cursor: 'pointer', padding: '20px', background: '#ddd' }}>
        Click me to open login popup
      </div>

      {/* Conditionally render the login component as a popup */}
      {showLoginPopup && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Login /> {/* Render your login component here */}
        </div>
      )}

      {showSignupPopup && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Signup /> {/* Render your signup component here */}
        </div>
      )}
    </div>
  );
};

export default BlogIframe;
