import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled, TextField } from '@mui/material';
import { useSelector } from "react-redux"
import { selectCurrentEntity } from "../../features/entityData/currentEntitySlice";
import {store} from '../../app/store'
import { Add } from '@mui/icons-material';
import { addNewDO } from '../../features/entityData/entityDataSlice';

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


export default function DOCreate() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phone, setPone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setErrorMessage();

};
  const handleSave = () => {
    if(name.length < 1 || position.length < 1 || status.length < 1 || startDate.length < 1) {
      setErrorMessage('Required field(s) empty!')
      return;
    }
    /* store.dispatch(addNewDO({
      name: name,
      position: position,
      status: status,
      startDate: startDate,
      address: address,
      phone: phone,
      email: email,     
      endDate: endDate,     
    })); */
    setOpen(false);
    setErrorMessage();
    };


  const entityIndex = useSelector(selectCurrentEntity);
 

  return (
    <div >
      <Button 
        onClick={handleOpen}
          startIcon={<Add/>}
          color="primary"
          sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px' }}
          >Add Director or Officer
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
            Add Director or Officer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2, color: "red"  }}>
            {errorMessage}
          </Typography>
          <Box
            flex={1} 
            component="form"            
            sx={{ 
            
            '& .MuiTextField-root': { m: 1, width: "30%", minWidth: '20ch'}}}
            noValidate
            autoComplete="off"
            
            >
            <div
             >
                <TextField
                required
                id="outlined-required"
                label="Name"
                onChange={(e) => setName(e.currentTarget.value)}
                />
                <TextField
                id="outlined-disabled"
                label="Address"
                onChange={(e) => setAddress(e.currentTarget.value)}
                />
                
                <TextField
                required
                id="outlined-required"
                label="Position"
                onChange={(e) => setPosition(e.currentTarget.value)}
                />
                <TextField
                id="outlined-disabled"
                label="Phone"
                onChange={(e) => setPone(e.currentTarget.value)}
                />
                <TextField
                required
                id="outlined-disabled"
                label="Status"
                onChange={(e) => setStatus(e.currentTarget.value)}
                />
                <TextField
                id="outlined-disabled"
                label="Email"
                onChange={(e) => setEmail(e.currentTarget.value)}
                />  
                <TextField
                required
                id="outlined-disabled"
                label="Start Date"
                onChange={(e) => setStartDate(e.currentTarget.value)}
                />  
                <TextField
                id="outlined-disabled"
                label="End Date"
                onChange={(e) => setEndDate(e.currentTarget.value)}
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