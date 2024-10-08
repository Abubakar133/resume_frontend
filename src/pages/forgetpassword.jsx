import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Box, Button, Typography } from "@mui/material";
import { BASE_URL } from "../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Forget = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [emailSent, setEmailSent] = useState(false); // State to track email sent status

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/forget`,
        user,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        toast.success("Email sent to your email");
        setEmailSent(true); // Update state to show success message
        setUser({ email: "", password: "" });
      } else {
        toast.error(response.data.message || "Invalid Credentials");
      }
    } catch (error) {
      toast.error("Password not Reset.");
    }
  };

  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '10px' }}>
      <main style={{ width: '100%', maxWidth: '400px', backgroundColor: '#f4f4f3', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
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
          <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', textAlign: 'center', fontFamily: 'Cooper-bt-bold' }}>Forget Password</h1>
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
              {/* Email TextField */}
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

              {/* Password TextField */}
              <TextField
                label="New Password - Nýtt lykilorð"
                name="password"
                type="password"
                value={user.password}
                onChange={handleInput}
                fullWidth
                variant="outlined"
                size="small"
                required
                placeholder="New Password"
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

              {/* Conditional Typography Message */}
              {emailSent && (
                <Typography 
                  sx={{ 
                    marginBottom: 1, 
                    color: 'red', 
                    fontSize: '0.875rem', 
                  }}
                >
                  Email sent to your email. Please check your email and click the link to reset your password! Thank you.
                </Typography>
              )}

              {/* Login Button */}
              <Button variant="contained" type="submit" style={{ width: '100%', marginTop: '20px', backgroundColor: '#688bf2', color: '#fff', fontFamily: 'Cooper-bt' }}>
                Endurstilla lykilorð
              </Button>

              <Button
                variant="contained"
                style={{ width: '100%', marginTop: '10px', backgroundColor: '#688bf2', color: '#fff', fontFamily: 'Cooper-bt' }}
                onClick={() => navigate("/login")}
              >
                Innskráning
              </Button>
            </Box>
          </form>
        </div>
      </main>
    </section>
  );
};
