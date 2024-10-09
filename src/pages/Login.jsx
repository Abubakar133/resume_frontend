import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Box, Button, Typography } from "@mui/material";
import { BASE_URL } from "../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HelpIcon from "@mui/icons-material/Help";

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  // Ref for the card element
  const cardRef = useRef(null);

  // State to enable or disable the refresh functionality
  const [isRefreshEnabled, setIsRefreshEnabled] = useState(true);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/login`,
        user,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        toast.success("Login Successful");
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        setUser({ email: "", password: "" });
       
        navigate("/Dashboard2");
      } else {
        toast.error(response.data.message || "Invalid Credentials");
      }
    } catch (error) {
      toast.error("An error occurred during login.");
    }
  };

  // Function to handle clicks outside the card
  const handleClickOutside = (event) => {
    if (isRefreshEnabled && cardRef.current && !cardRef.current.contains(event.target)) {
      // Reload the page only when outside the card and refresh is enabled
      //window.location.reload();
      window.parent.postMessage({ action: 'closelogin' }, "*");
    }
  };

  // Effect to listen for clicks outside the card
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    //window.parent.postMessage({ action: 'closelogin' }, "*");
    const handleMessage = (event) => {
      if (event.data && event.data.action === 'passwordnotmatch') {
        toast.error("Passwords do not match"); // Show the login popup when the message is received
      }
      
    };

    window.addEventListener("message", handleMessage);
   
  }, [isRefreshEnabled]); // Add isRefreshEnabled as a dependency

  // Function to disable the refresh on click outside functionality
  const handleLoginButtonClick = () => {

    setIsRefreshEnabled(false); // Disable the refresh functionality
   
    window.parent.postMessage({ action: 'openLoginPopup1' }, "*");
  };

  return (
    <section 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        zIndex: 1000, 
        margin: '2px',
      }}
    >
      <main 
        ref={cardRef}  // Attach the ref to the card body
        style={{ 
          width: '100%', 
          maxWidth: '300px', 
          backgroundColor: '#f4f4f3', 
          padding: '20px', 
          borderRadius: '10px', 
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' 
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <a>
            <img
              fetchpriority="high"
              width="200"
              height="100"
              src="https://easycv.is/wp-content/uploads/2024/09/logoslogangif.gif"
              alt="Logo"
              className="object-contain"
            />
          </a>
        </div>
        <div>
          <h1 
            style={{ 
              fontSize: '24px', 
              fontWeight: '600', 
              marginBottom: '20px', 
              textAlign: 'center', 
              fontFamily: 'Cooper-bt-bold' 
            }}
          >
            Sign In
          </h1>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                "& > :not(style)": {
                  m: 1,
                  width: "100%",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                label="Email - Netfang"
                name="email"
                type="email"
                value={user.email}
                onChange={handleInput}
                fullWidth
                variant="outlined"
                size="small"
                required
                placeholder="example@veygo.com"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    '&:hover fieldset': {
                      borderColor: '#1976d2',
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: '#1976d2',
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: '#1976d2',
                  },
                }}
              />

              <TextField
                label="Password - Lykilorð"
                name="password"
                type="password"
                value={user.password}
                onChange={handleInput}
                fullWidth
                variant="outlined"
                size="small"
                required
                placeholder="Password"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    '&:hover fieldset': {
                      borderColor: '#1976d2',
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: '#1976d2',
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: '#1976d2',
                  },
                }}
              />

              <Button 
                variant="contained" 
                type="submit" 
                style={{ 
                  width: '100%', 
                  marginTop: '20px', 
                  backgroundColor: '#688bf2', 
                  color: '#fff', 
                  fontFamily: 'Cooper-bt' 
                }}
              >
                Innskráning
              </Button>

              <Button
                variant="contained"
                style={{ 
                  width: '100%', 
                  marginTop: '10px', 
                  backgroundColor: '#688bf2', 
                  color: '#fff' , 
                  fontFamily: 'Cooper-bt' 
                }}
                onClick={handleLoginButtonClick}
              >
                Skráning
              </Button>

              <Box
                sx={{
                  marginTop: '20px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#0b78f7',
                }}
                onClick={() => navigate("/forget")}
              >
                <HelpIcon sx={{ fontSize: '18px', marginRight: '5px' }} />
                <Typography variant="body2" sx={{ color: '#0b78f7', fontFamily: 'Cooper-bt' }}>
                  Forget Password
                </Typography>
              </Box>
            </Box>
          </form>
        </div>
      </main>
      <ToastContainer />
    </section>
  );
};
