import React, { useEffect, useState } from "react";
import { Login } from "./Login"; // Import the login component

export const LandingPageWithLogin = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    // Listen for messages from the iframe
    const handleMessage = (event) => {
      if (event.data && event.data.action === 'openLoginPopup') {
        setShowLoginPopup(true); // Show the login popup when the message is received
      }
    };

    window.addEventListener("message", handleMessage);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>
      {/* Embed the HTML page using iframe */}
      <iframe
        src="https://your-html-landing-page.com"
        title="Landing Page"
        style={{ width: '100%', height: '100vh', border: 'none' }}
      ></iframe>

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
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', width: '400px' }}>
            <Login /> {/* Render your login component here */}
            <button onClick={() => setShowLoginPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
