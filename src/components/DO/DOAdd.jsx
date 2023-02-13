import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MenuItem, styled, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { loadExistingDOs, selectCurrentEntity, selectEntityData } from '../../features/entityData/entityDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addEntityDo, getEntityDo } from '../../api/dO';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  overflow:'scroll',
  transform: 'translate(-50%, -50%)',
  width: {xs: "80%", sm: "50%", md: "50%"},
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

const statusField = [
  {
    value: 'ACTIVE',
    label: 'ACTIVE'
  },
  {
    value: 'INACTIVE',
    label: 'INACTIVE'
  },
]

export default function DOAdd() {
  const dispatch = useDispatch()
  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);
  const entityID = entityData[entityIndex].id;
  const disabled = entityData[0].name === '' ? true : false;

  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState();
  const [position, setPosition] = React.useState();
  const [status, setStatus] = React.useState();
  const [startDate, setStartDate] = React.useState();
  const [address, setAddress] = React.useState();
  const [phone, setPhone] = React.useState();
  const [email, setEmail] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [errorMessage, setErrorMessage] = React.useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setName();
    setPosition();
    setStatus();
    setStartDate();
    setAddress();
    setPhone();
    setEmail();
    setEndDate();
    setErrorMessage();

};
  const handleSave = async () => {
    if(name === undefined || position === undefined || status === undefined || startDate === undefined) {
      setErrorMessage('Required field(s) empty!')
      return;
    }
    await addEntityDo({
      entity: entityID,
      name: name,
      position: position,
      status: status,
      startDate: startDate,
      address: address,
      phone: phone,
      email: email,
      endDate: endDate,
    })

    const dOs = await getEntityDo(entityID)
    dispatch(loadExistingDOs(dOs))

   /*  dispatch(addNewDO({
      name: name,
      position: position,
      status: status,
      startDate: startDate,
      address: address,
      phone: phone,
      email: email,     
      endDate: endDate,     
    })); */
    handleClose()
    }; 

  return (
    <div >
      <Button 
        disabled={disabled}
        variant="outlined"
        onClick={handleOpen}
        startIcon={<Add/>}
        color="primary"
        sx={{ width: {xs: "95%", md: "fit-content"},  m:1 }}
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
            
            '& .MuiTextField-root': { mt: 1, mb: 1, width: "100%"}}}
            noValidate
            autoComplete="off"
            
            >
            <div>
                <TextField
                required
                id="outlined-required"
                label="Name"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {setName(e.currentTarget.value); setErrorMessage('')}}
                />
                <TextField
                id="outlined"
                label="Address"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {setAddress(e.currentTarget.value); setErrorMessage('')}}
                />
                
                <TextField
                required
                id="outlined-required"
                label="Position"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {setPosition(e.currentTarget.value); setErrorMessage('')}}
                />
                <TextField
                id="outlined"
                label="Phone"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {setPhone(e.currentTarget.value); setErrorMessage('')}}
                />
                <TextField
                required
                id="outlined-required"
                select
                label="Status"
                defaultValue=""
                helperText="Please select status"
                onChange={(e) => {setStatus(e.target.value); setErrorMessage('')}}
                >
                  {statusField.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                id="outlined"
                label="Email"
                type="email"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {setEmail(e.currentTarget.value); setErrorMessage('')}}
                />  
                <TextField
                required
                id="outlined-required"
                label="Start Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {setStartDate(e.currentTarget.value); setErrorMessage('')}}
                />  
                <TextField
                id="outlined"
                label="End Date"
                type="date"                
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {setEndDate(e.currentTarget.value); setErrorMessage('')}}
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