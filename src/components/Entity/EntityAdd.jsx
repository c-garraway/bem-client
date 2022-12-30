import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { addNewEntity } from '../../features/entityData/entityDataSlice';
import { useDispatch } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  overflow:'scroll',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  maxHeight: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const StyledButton = styled(Button) ({
    margin: 5,
    /* '&:hover':{
        backgroundColor: 'darkblue',
        color: 'white',
      }
 */
});


export default function EntityCreate() {
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState('');
  const [dateCreated, setDateCreated] = React.useState('');
  const [corpID, setCorpID] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setErrorMessage();
  };
  const handleSave = () => {
    // perform input validation
    if(name.length < 1 || address.length < 1 || dateCreated.length < 1 || status.length < 1 || corpID.length < 1) {
      setErrorMessage('All fields are required to create entity!')
      return;
    }
    dispatch(addNewEntity({
      name: name,
      address: address,
      dateCreated: dateCreated,
      status: status,
      corpID: corpID,
      jurisdictions: [],
      corporateFilings: [],
      dO: [],
      businessNames: [],
      businessNameFilings: [],      
    }));
    setOpen(false);
    setErrorMessage();
  };

  return (    
    <div >
      <Button 
        onClick={handleOpen}
        startIcon={<Add/>}
        color="primary"
        sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px' }}
        >Add Entity
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box 
        sx={style}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Entity
          </Typography>
          <Typography id="modal-modal-description"  sx={{ mt: 2, mb: 2, color: "red" }}>
            {errorMessage}
          </Typography>          
          <Box
            flex={1} 
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: "100%", minWidth: '25ch'},}}
            noValidate
            autoComplete="off"
            >
            <div>
                <TextField
                required
                id="outlined-required"
                label="Name"
                onChange={(e) => setName(e.currentTarget.value)}
                />
                <TextField
                required
                id="outlined"
                label="Address"
                onChange={(e) => setAddress(e.currentTarget.value)}
                />                
                <TextField
                required
                id="outlined-required"
                label="Date Created"
                onChange={(e) => setDateCreated(e.currentTarget.value)}
                />
                <TextField
                required
                id="outlined-required"
                label="Status"
                onChange={(e) => setStatus(e.currentTarget.value)}
                />
                <TextField
                required
                id="outlined"
                label="Corporate ID"
                onChange={(e) => setCorpID(e.currentTarget.value)}
                />             
            </div>
        </Box>  
        <Box 
            m={1}
            display="flex"
            justifyContent= 'center'
            >
            <StyledButton 
            variant="outlined"
            onClick={handleSave}
            >Save</StyledButton>
            <StyledButton 
            variant="outlined"
            onClick={handleClose}
            >Close</StyledButton>
        </Box>
        </Box>
      </Modal>
    </div>
  );
}