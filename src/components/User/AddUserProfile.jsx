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
    '& .MuiTextField-root': { m: 1, width: '25ch' },
};

function AddUserProfile() {
    
    const navigate = useNavigate();

    const [email, /* setEmail */] = useState('Registered Email');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSave = () => {
        if(firstName.length < 1 || lastName.length < 1 || company.length < 1 ) {
            setErrorMessage('All fields are required!') 
            return;
        }
        navigate('/login')
    };


  return (<Box
    component="form"
    sx={style}
    noValidate
    autoComplete="off"
    >
    <Typography id="user-box-title" variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        User Profile
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
        id="outlined-required"
        label="First Name"
        type='text'
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => {
            setFirstName(e.currentTarget.value)
            setErrorMessage('')
        }}
      />
      <TextField
        required
        id="outlined-required"
        label="Last Name"
        type="text"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => {
            setLastName(e.currentTarget.value)
            setErrorMessage('')
        }}
      />
      <TextField
        required
        id="outlined-required"
        label="Company"
        type="text"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => {
            setCompany(e.currentTarget.value)
            setErrorMessage('')
        }}
      />
      <Button 
          variant="contained" 
          onClick={handleSave}
          sx={{
              display: "block",
              width: "94%",
              margin: "auto",
              marginTop: "5px",
          }}
          >Save
      </Button>
   </div>  
  </Box>
  );
}

export default AddUserProfile;

