import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box, Button } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { BASE_URL } from "../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

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

  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '10px' }}>
      <main style={{ width: '100%', maxWidth: '400px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ textAlign: 'center' }}>
          <img 
            src="/resume-logoremovebgpreview-2@2x.png" 
            alt="Login Image" 
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
          <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', textAlign: 'center' }}>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                "& > :not(style)": {
                  m: 1,
                  width: "100%",
                  color: "#14e0f9",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="email">
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
                  name="password"
                  type="password"
                  placeholder="Password"
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

             

              <Button variant="contained" type="submit" style={{ width: '100%', marginTop: '20px', backgroundColor: '#14e0f9', color: '#fff' }}>
                Login
              </Button>

              <Button
                variant="contained"
                style={{ width: '100%', marginTop: '10px', backgroundColor: '#14e0f9', color: '#fff' }}
                onClick={() => navigate("/signup")}
              >
                SignUp
              </Button>

            </Box>
          </form>
        </div>
      </main>
    </section>
  );
};
