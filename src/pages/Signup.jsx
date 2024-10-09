import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "", confirmPassword: "", username: "" });

  // Ref for the card element
  const cardRef = useRef(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleNext = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      window.parent.postMessage({ action: 'passwordnotmatch' }, "*");
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, user);
      if (response.status === 201) {
        window.parent.postMessage({ action: 'sigupsuccessfull' }, "*");
       // toast.success("Signup Successful");
       // navigate("/");
      } else {
        toast.error("Submission Failed: " + response.data.error);
      }
    } catch (error) {
      toast.error("Submission Failed: An unexpected error occurred.");
    }
  };

  // Effect to listen for clicks outside the card
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        // If the click is outside the card, reload the page
       // window.location.reload();

       window.parent.postMessage({ action: 'closesignup' }, "*");
      }
    };

    // Attach event listener to the whole document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        backgroundColor: 'rgba(0, 0, 0, 0)',  // Transparent outer part
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
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0)' ,
          margin: '2px',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <a>
            <img
              width="200"
              height="100"
              src="https://easycv.is/wp-content/uploads/2024/09/logoslogangif.gif"
              alt="Logo"
            />
          </a>
        </div>
        <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', textAlign: 'center', fontFamily: 'Cooper-bt-bold' }}>
          Sign Up
        </h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" }
          }}
          onSubmit={handleNext}
        >
          <TextField
            label="Username - Nafn"
            name="username"
            type="text"
            value={user.username}
            onChange={handleInput}
            fullWidth
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: '8px',
                backgroundColor: 'white',
                '&:hover fieldset': { borderColor: '#1976d2' },
              },
              "& .MuiInputLabel-root": { color: '#1976d2' },
              "& .MuiFormLabel-root.Mui-focused": { color: '#1976d2' },
            }}
          />
          <TextField
            label="Email - Netfang"
            name="email"
            type="email"
            value={user.email}
            onChange={handleInput}
            fullWidth
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: '8px',
                backgroundColor: 'white',
                '&:hover fieldset': { borderColor: '#1976d2' },
              },
              "& .MuiInputLabel-root": { color: '#1976d2' },
              "& .MuiFormLabel-root.Mui-focused": { color: '#1976d2' },
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
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: '8px',
                backgroundColor: 'white',
                '&:hover fieldset': { borderColor: '#1976d2' },
              },
              "& .MuiInputLabel-root": { color: '#1976d2' },
              "& .MuiFormLabel-root.Mui-focused": { color: '#1976d2' },
            }}
          />
          <TextField
            label="Confirm Password - Staðfestu lykilorð"
            name="confirmPassword" 
            type="password"
            value={user.confirmPassword}
            onChange={handleInput}
            fullWidth
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: '8px',
                backgroundColor: 'white',
                '&:hover fieldset': { borderColor: '#1976d2' },
              },
              "& .MuiInputLabel-root": { color: '#1976d2' },
              "& .MuiFormLabel-root.Mui-focused": { color: '#1976d2' },
            }}
          />
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ 
              backgroundColor: "#688bf2", 
              color: "#fff", 
              mt: 2, 
              width: '100%', 
              fontFamily: 'Cooper-bt' 
            }}
          >
            Skráning
          </Button>
        </Box>
      </main>
      <ToastContainer />
    </section>
  );
};
