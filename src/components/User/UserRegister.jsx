import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
    maxHeight: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '& .MuiTextField-root': { m: 1, width: '25ch' }
};

function UserRegister() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = () => {
        if(email.length < 1 || password.length < 1 || confirmPassword.length < 1 ) {
            setErrorMessage('All fields are required!') 
            return;
        }
        if(password !== confirmPassword) {
            setErrorMessage('Passwords do not match!')
            return;
        }
        navigate('/profile')          
    };

    const handleGoogleUser = () => {
        setErrorMessage('Google user registration not yet complete!') 
          
    };

  return (<Box
    component="form"
    sx={style}
    noValidate
    autoComplete="off"
    >
    <Typography id="user-box-title" variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        User Registration
    </Typography>
    { errorMessage.length > 0 ?
        <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2, fontSize: "small", color: "red", textAlign: "center"  }}>
                {errorMessage}
        </Typography>
        :
        <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2, fontSize: "small", color: "grey", textAlign: "center"  }}>
                Complete all required* fields
        </Typography>
    }
    <div>
      <TextField
        required
        id="outlined-required"
        label="Email"
        type='email'
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => {
            setEmail(e.currentTarget.value)
            setErrorMessage('')
        }}
      />
      <TextField
        required
        id="outlined-password-input"
        label="Password"
        type="password"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => {
            setPassword(e.currentTarget.value)
            setErrorMessage('')
        }}
      />
      <TextField
        required
        id="outlined-password-input2"
        label="Confirm Password"
        type="password"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => {
            setConfirmPassword(e.currentTarget.value)
            setErrorMessage('')
        }}
      />
      <Button 
          variant="contained" 
          onClick={handleRegister}
          sx={{
              display: "block",
              width: "94%",
              margin: "auto",
              marginTop: "5px",
          }}
          >Register
      </Button>
   </div>
  <div>
      <Button 
          variant="outlined" 
          onClick={handleGoogleUser}
          sx={{
              display: "block",
              width: "94%",
              margin: "auto",
              marginTop: "30px",
          }}
          >Register using Google
      </Button>
  </div>   
  </Box>
  );
}

export default UserRegister;
