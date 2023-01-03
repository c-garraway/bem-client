import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { addNewBN } from '../../features/entityData/entityDataSlice';
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

/* const StyledTextField = styled(TextField) ({
  InputLabelProps: {
    shrink: true,
  },
});
 */
const StyledButton = styled(Button) ({
    margin: 5,
    /* '&:hover':{
        backgroundColor: 'darkblue',
        color: 'white',
      }
 */
});


export default function BNAdd() {
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);

  const [businessName, setBusinessName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [jurisdiction, setJurisdiction] = React.useState('');
  const [creationDate, setCreationDate] = React.useState('');
  const [closeDate, setCloseDate] = React.useState('');
 
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setErrorMessage('');

};
  const handleSave = () => {
    if(businessName.length < 1 || status.length < 1 || setCreationDate.length < 1 || jurisdiction.length < 1) {
      setErrorMessage('Required field(s) empty!')
      return;
    }
    dispatch(addNewBN({
      businessName: businessName,
      address: address,
      status: status,
      jurisdiction: jurisdiction,
      creationDate: creationDate,
      closeDate: closeDate,    
    }));
    setOpen(false);

    setBusinessName('');
    setAddress('');
    setStatus('');
    setJurisdiction('');
    setCreationDate('');
    setCloseDate('');

    setErrorMessage('');
    }; 

  return (
    <div >
      <Button 
        onClick={handleOpen}
          startIcon={<Add/>}
          color="primary"
          sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px' }}
          >Add Business Name
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
          Add Business Name
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2, color: "red"  }}>
            {errorMessage}
          </Typography>
          <Box
            flex={1} 
            component="form"            
            sx={{ 
            
            '& .MuiTextField-root': { m: 1, width: "100%", minWidth: '20ch'}}}
            noValidate
            autoComplete="off"
            
            >
            <div>
                <TextField
                required
                id="outlined-required"
                label="Business Name"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setBusinessName(e.currentTarget.value)}
                />
                <TextField
                id="outlined"
                label="Address"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setAddress(e.currentTarget.value)}
                />                
                <TextField
                required
                id="outlined-required"
                label="Status"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setStatus(e.currentTarget.value)}
                />
                <TextField
                required
                id="outlined-required"
                label="Jurisdiction"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setJurisdiction(e.currentTarget.value)}
                />
                <TextField
                required
                id="outlined-required"
                label="Create Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setCreationDate(e.currentTarget.value)}
                />
                <TextField
                id="outlined"
                label="Close Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setCloseDate(e.currentTarget.value)}
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