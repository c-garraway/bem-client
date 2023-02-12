import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,  } from "react-router-dom";
import { setCurrentUser, resetUserData, selectCurrentUser, selectIsLoggedIn } from "../../features/userData/userDataSlice";
import background from '../../images/background.jpg'
import { addUserProfile } from "../../api/auth";

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

function AddUserProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const currentUser = useSelector(selectCurrentUser);

    const [email, /* setEmail */] = useState(currentUser?.email);
    const [firstName, setFirstName] = useState(currentUser?.firstName);
    const [lastName, setLastName] = useState(currentUser?.lastName);
    const [companyName, setCompanyName] = useState(currentUser?.companyName);
    const [errorMessage, setErrorMessage] = useState();
    
    const autoFocus = isLoggedIn && companyName === null ? true : false;
    const guestDisable = firstName === 'Guest' ? true : false;

    const handleSave = () => {
        //TODO: Move into one save function
        if(firstName?.length < 1 || lastName?.length < 1 || companyName?.length < 1 ) {
            setErrorMessage('All fields are required!') 
            return;
        }
        addUserProfile(
            currentUser?.email,
            firstName,
            lastName,
            companyName,
        );
        dispatch(resetUserData());
        navigate('/main');
    };
    const handleUpdate = () => {
        if(firstName?.length < 1 || lastName?.length < 1 || companyName?.length < 1 ) {
            setErrorMessage('All fields are required!') 
            return;
        }
        dispatch(setCurrentUser({
            id: currentUser?.id,
            email: currentUser?.email,
            firstName: firstName,
            lastName: lastName,
            companyName: companyName,
            entityDataIndex: currentUser?.entityDataIndex
        }));
        addUserProfile(
            currentUser?.email,
            firstName,
            lastName,
            companyName,
        );
        navigate('/main')
    };
    const handleClose = () => {
        navigate('/main')
    };
    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handleSave();
        };
    };

    

  return (
    <Box sx={backgroundStyle}>
        <Box
            component="form"
            sx={formStyle}
            noValidate
            autoComplete="off"
            >
            <Typography id="user-box-title" variant="h5" sx={{ mb: 2, textAlign: "center" }}>
                User Profile
            </Typography>
            { errorMessage?.length > 0 ?
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
                    disabled
                    id="outlined-disabled"
                    label="Email"
                    type='text'
                    size="small"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={email}
                />
                <TextField
                    required
                    disabled={guestDisable}
                    id="outlined-required"
                    label="First Name"
                    type='text'
                    size="small"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(e) => {
                        setFirstName(e.currentTarget.value)
                        setErrorMessage()
                    }}
                    defaultValue={currentUser?.firstName}
                />
                <TextField
                    required
                    disabled={guestDisable}
                    id="outlined-required"
                    label="Last Name"
                    type="text"
                    size="small"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(e) => {
                        setLastName(e.currentTarget.value)
                        setErrorMessage()
                    }}
                    defaultValue={currentUser?.lastName}

                />
                <TextField
                    autoFocus={autoFocus}
                    required
                    id="outlined-required"
                    label="Company Name"
                    type="text"
                    size="small"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(e) => {
                        setCompanyName(e.currentTarget.value)
                        setErrorMessage()
                    }}
                    defaultValue={currentUser?.companyName}
                    onKeyDown={handleKeyDown}
                />
                { isLoggedIn ?
                    <>
                        <Button 
                            variant="contained" 
                            onClick={handleUpdate}
                            sx={{
                                display: "block",
                                width: "100%",
                                margin: "auto",
                                marginTop: "10px",
                            }}
                            >Update
                        </Button>
                        <Button 
                            variant="outlined" 
                            onClick={handleClose}
                            sx={{
                                display: "block",
                                width: "100%",
                                margin: "auto",
                                marginTop: "10px",
                            }}
                            >Close
                        </Button>
                    </>
                    :
                    <Button 
                        variant="contained" 
                        onClick={handleSave}
                        sx={{
                            display: "block",
                            width: "100%",
                            margin: "auto",
                            marginTop: "10px",
                        }}
                        >Save
                    </Button>
                }
            </div>  
        </Box>
    </Box>
  );
}

export default AddUserProfile;

