import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { styled, TextField } from '@mui/material';
import { useSelector } from "react-redux"
import { selectCurrentEntity } from "../features/entityData/currentEntitySlice";
//import { selectEntityData } from "../features/entityData/entityDataSlice";
import {store} from '../app/store'

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


export default function DOInfo({currentDOIndex}) {
  const [open, setOpen] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setDisabled(true);
};
  const handleEdit = () => setDisabled(false);
  const handleSave = () => {
    setDisabled(true)
    };


  const entityIndex = useSelector(selectCurrentEntity);
  const currentDO = store.getState().entityData[entityIndex].dO[currentDOIndex]

  return (
    <div >
      <Button onClick={handleOpen}><InfoOutlinedIcon /></Button>
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
            Director & Officer Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            Select EDIT below to update Director and Officer information.
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
                disabled = {disabled}
                id="outlined-required"
                label="Name"
                defaultValue={currentDO.name}
                />
                <TextField
                disabled = {disabled}
                id="outlined-disabled"
                label="Address"
                defaultValue={currentDO.address}
                />
                
                <TextField
                disabled = {disabled}
                id="outlined-required"
                label="Position"
                defaultValue={currentDO.position}
                />
                <TextField
                disabled = {disabled}
                id="outlined-disabled"
                label="Phone"
                defaultValue={currentDO.phone}
                />
                <TextField
                disabled = {disabled}
                id="outlined-disabled"
                label="Status"
                defaultValue="ACTIVE"
                />
                <TextField
                disabled = {disabled}
                id="outlined-disabled"
                label="Email"
                defaultValue={currentDO.email}
                />  
                <TextField
                disabled = {disabled}
                id="outlined-disabled"
                label="Start Date"
                defaultValue="Sep 1, 2000"
                />  
                <TextField
                disabled = {disabled}
                id="outlined-disabled"
                label="End Date"
                defaultValue="None"
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
            onClick={handleEdit}
            >Edit</StyledButton>
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