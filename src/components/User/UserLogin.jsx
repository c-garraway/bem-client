import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../features/userData/userDataSlice";

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

function UserLogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if(email.length < 1 || password.length < 1 ) {
            setErrorMessage('All fields are required!') 
            return;
        }
        setErrorMessage('User login incomplete, use Guest') 

    };
    const handleGuestUser = () => {
        dispatch(setCurrentUser({
            email: 'guest@email.com',
            firstName: 'Guest',
            lastName: 'User',
            companyName: 'Whole Home Decor Corporation',
            entityDataIndex: 0
        }))
        navigate('/main')   
    };
    const handleGoogleUser = () => {
        setErrorMessage('Google user login incomplete, use Guest') 
    };

  return (
    <Box
      component="form"
      sx={style}
      /* noValidate */
      autoComplete="off"
        >
        <Typography id="user-box-title" variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        User Login
        </Typography>
        { errorMessage.length > 0 ?
        <Typography id="modal-modal-description" sx={{ mb: 2, fontSize: "small", color: "red", textAlign: "center"  }}>
            {errorMessage}
        </Typography>
        :
        <Typography id="modal-modal-description" sx={{ mb: 2, fontSize: "small", color: "white", textAlign: "center"  }}>
            placeholder
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
        <Button 
            variant="contained" 
            onClick={handleLogin}
            sx={{
                display: "block",
                width: "94%",
                margin: "auto",
                marginTop: "5px",
            }}
            >Login
        </Button>
     </div>
    <div>
        <Button 
            variant="outlined" 
            onClick={handleGuestUser}
            sx={{
                display: "block",
                width: "94%",
                margin: "auto",
                marginTop: "30px",
            }}
            >Login as Guest
        </Button>
        <Button 
            variant="outlined" 
            onClick={handleGoogleUser}
            sx={{
                display: "block",
                width: "94%",
                margin: "auto",
                marginTop: "10px",
            }}
            >Login with Google
        </Button>
    </div>   
    </Box>
 );
}

export default UserLogin;
