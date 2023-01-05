import { Button, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../features/userData/userDataSlice";
import background from '../../images/background.jpg'

const formStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -40%)',
    width: '30%',
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
    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handleLogin();
        };
    };

  return (
    <Box style={backgroundStyle} >
        <Box
        component="form"
        sx={formStyle}
        noValidate
        autoComplete="off"
            >
            <Typography id="user-box-title" variant="h5" sx={{ mb: 2, textAlign: "center" }}>
            User Login
            </Typography>
            { errorMessage.length > 0 ?
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2, fontSize: "small", color: "red", textAlign: "center"  }}>
                {errorMessage}
            </Typography>
            :
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2, fontSize: "small", color: "white", textAlign: "center"  }}>
                placeholder
            </Typography>
            }
            <div >
                <TextField
                autoFocus
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
                onKeyDown={handleKeyDown}
                />
                <Button 
                    variant="contained" 
                    onClick={handleLogin}
                    sx={{
                        display: "block",
                        width: "100%",
                        margin: "auto",
                        marginTop: "10px",
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
                        width: "100%",
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
                        width: "100%",
                        margin: "auto",
                        marginTop: "10px",
                    }}
                    >Login with Google
                </Button>
            </div>   
        </Box>
    </Box>
 );
}

export default UserLogin;
