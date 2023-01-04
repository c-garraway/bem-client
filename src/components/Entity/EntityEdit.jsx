import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled, TextField } from '@mui/material';
import { updateEntity, selectCurrentEntity, selectEntityData } from '../../features/entityData/entityDataSlice';
import { useDispatch, useSelector } from 'react-redux';

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


export default function EntityEdit() {
  const dispatch = useDispatch()
  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);

  const currentEntity = entityData[entityIndex];

  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState(currentEntity.name);
  const [dateCreated, setDateCreated] = React.useState(currentEntity.dateCreated);
  const [corpID, setCorpID] = React.useState(currentEntity.corpID);
  const [address, setAddress] = React.useState(currentEntity.address);
  const [status, setStatus] = React.useState(currentEntity.status);
  const [errorMessage, setErrorMessage] = React.useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setErrorMessage();
  };
  const handleSave = () => {
    // perform input validation
    if(name.length < 1 || address.length < 1 || dateCreated.length < 1 || status.length < 1 || corpID.length < 1) {
      setErrorMessage('All fields are required to add entity!')
      return;
    }
    dispatch(updateEntity({
      name: name,
      address: address,
      dateCreated: dateCreated,
      status: status,
      corpID: corpID,    
    }));
    setOpen(false);
    setErrorMessage();
  };

  return (    
    <div >
      <StyledButton 
            variant="outlined"
            onClick={handleOpen}
            >Edit</StyledButton>
      {/* <Button 
        onClick={handleOpen}
        startIcon={<Add/>}
        color="primary"
        sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px' }}
        >Add Entity
      </Button> */}
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
            Edit Entity
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
                defaultValue={currentEntity.name}
                onChange={(e) => setName(e.currentTarget.value)}
                />
                <TextField
                required
                id="outlined"
                label="Address"
                defaultValue={currentEntity.address}
                onChange={(e) => setAddress(e.currentTarget.value)}
                />                
                <TextField
                required
                id="outlined-required"
                label="Date Created"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={currentEntity.dateCreated}
                onChange={(e) => setDateCreated(e.currentTarget.value)}
                />
                <TextField
                required
                id="outlined-required"
                label="Status"
                defaultValue={currentEntity.status}
                onChange={(e) => setStatus(e.currentTarget.value)}
                />
                <TextField
                required
                id="outlined"
                label="Corporate ID"
                defaultValue={currentEntity.corpID}
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