import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import axios from "axios";
import {
  Box,
  Button,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { orange } from "@mui/material/colors";

export const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username:"",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleNext1 = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
     toast.error("Passwords do not match");
      return;
    }
     // Pass user data to the next page
  };


  const handleNext = async (e) => {
    e.preventDefault();

    try {
      

      const response = await axios.post(
        `${BASE_URL}/auth/signup`,
        {
          ...user,
         
        }
      );

      if (response.status === 201) {
        toast.success("Signup and Insurance Record Submitted Successfully");
        
        navigate("/login");
      } else {
        console.error("Error response:", response.data);
        toast.error("Submission Failed: " + response.data.error);
      }
    } catch (error) {
      console.error("Request failed:", error);
     toast.error("Submission Failed: An unexpected error occurred.");
    }
  };




  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '10px' }}>
      <main style={{ width: '100%', maxWidth: '400px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ textAlign: 'center' }}>
          <img 
            id="reg-logo" 
            src="/resume-logoremovebgpreview-2@2x.png" 
            alt="Signup Image" 
            style={{ 
              width: '100%', 
              maxWidth: '200px', 
              marginBottom: '20px', 
              height: 'auto', 
              maxHeight: '100px' // Ensures the image doesn't overflow on small screens
            }} 
          />
        </div>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', textAlign: 'center' }}>Sign Up</h1>
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                m: 1,
                width: "100%",
                color: "#14e0f9",
              },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleNext}
          >


<FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input-with-icon-adornment">
                <span style={{ fontWeight: "600" }}>User Name</span>
              </InputLabel>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Name"
                value={user.username}
                onChange={handleInput}
                required
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input-with-icon-adornment">
                <span style={{ fontWeight: "600" }}>Email</span>
              </InputLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@veygo.com"
                value={user.email}
                onChange={handleInput}
                required
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>



            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="password">
                <span style={{ fontWeight: "600" }}>Password</span>
              </InputLabel>
              <Input
                id="password"
                placeholder="Password"
                name="password"
                type="password"
                value={user.password}
                onChange={handleInput}
                required
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="confirmPassword">
                <span style={{ fontWeight: "600" }}>Confirm Password</span>
              </InputLabel>
              <Input
                id="confirmPassword"
                placeholder="Confirm Password"
                name="confirmPassword"
                type="password"
                value={user.confirmPassword}
                onChange={handleInput}
                required
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button variant="contained" type="submit" style={{ width: '100%', marginTop: '20px', backgroundColor: orange, color: '#fff' }}>
              Sign up
            </Button>
          </Box>
        </div>
      </main>
    </section>
  );
};
