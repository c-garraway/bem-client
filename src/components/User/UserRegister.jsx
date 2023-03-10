import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import background from '../../images/background.jpg'
import { selectIsLoggedIn, setCurrentUser } from "../../features/userData/userDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { loginGoogleUser, registerLocalUser } from "../../api/auth";

const formStyle = {
    position: 'absolute',
    top: {xs: "40%", sm: "40%", md: "50%"},
    left: '50%',
    transform: 'translate(-50%, -40%)',
    width: {xs: "70%", sm: "70%", md: "30%"},
    maxHeight: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px',
    opacity: '95%',
    '& .MuiTextField-root': { mt: 2, width: '100%' },
};
const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};
const inputProps = {
    uppercase: 'true'
}

function UserRegister() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedIn = useSelector(selectIsLoggedIn);
  
    useEffect(() => {
      if(loggedIn) {
        navigate('/main')
      }
    })

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = async () => {
        if(email.length < 1 || password.length < 1 || confirmPassword.length < 1 ) {
            setErrorMessage('All fields are required!') 
            return;
        }
        if(password !== confirmPassword) {
            setErrorMessage('Passwords do not match!')
            return;
        }
        const user = await registerLocalUser(email, password, confirmPassword);
        //console.log(user);
        if(user?.errors) {
            setErrorMessage(user?.errors)
            return;
        }
        dispatch(setCurrentUser({
            email: user.email
        }))
        navigate('/profile')          
    };

    const handleGoogleUser = () => {
        loginGoogleUser();          
    };
    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handleRegister();
        };
    };

  return (
    <Box style={backgroundStyle}>
        <Box
        component="form"
        sx={formStyle}
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
                    inputProps={inputProps}

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
                    onKeyDown={handleKeyDown}

                />
                <Button 
                    variant="contained" 
                    onClick={handleRegister}
                    sx={{
                        display: "block",
                        width: "100%",
                        margin: "auto",
                        marginTop: "10px",
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
                        width: "100%",
                        margin: "auto",
                        marginTop: "30px",
                    }}
                    >Register using Google
                </Button>
            </div>   
        </Box>
    </Box>
  );
}

export default UserRegister;
