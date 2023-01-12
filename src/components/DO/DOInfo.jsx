import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { styled, TextField } from '@mui/material';
import { useDispatch, useSelector } from "react-redux"
import { selectEntityData, selectCurrentEntity, loadExistingDOs } from "../../features/entityData/entityDataSlice";
import { getEntityDo, updateEntityDo } from '../../api/dO';

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
  const dispatch = useDispatch();

  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);
  const entityID = entityData[entityIndex].id;
  const currentDO = entityData[entityIndex].dO[currentDOIndex]

  const [open, setOpen] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [name, setName] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  useEffect(() => {
    setName(currentDO.name);
    setPosition(currentDO.position);
    setStatus(currentDO.status);
    setStartDate(currentDO.startDate);
    setAddress(currentDO.address);
    setPhone(currentDO.phone);
    setEmail(currentDO.email);
    setEndDate(currentDO.endDate);
  
  }, [currentDO]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setDisabled(true);
    setErrorMessage('');
  };

  const handleEdit = () => setDisabled(false);

  const handleSave = async () => {
    if(name.length < 1 || position.length < 1 || status.length < 1 || startDate.length < 1) {
      setErrorMessage('Required field(s) empty!')
      return;
    }

    await updateEntityDo({
      id: currentDO.id,
      entity: currentDO.entity,
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

    handleClose()
  };

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
                disabled = {disabled}
                id="outlined-required"
                label="Name"
                defaultValue={currentDO.name}
                onChange={(e) => setName(e.currentTarget.value)}
                />
                <TextField
                disabled = {disabled}
                id="outlined"
                label="Address"
                defaultValue={currentDO.address}
                onChange={(e) => setAddress(e.currentTarget.value)}
                />
                
                <TextField
                required
                disabled = {disabled}
                id="outlined-required"
                label="Position"
                defaultValue={currentDO.position}
                onChange={(e) => setPosition(e.currentTarget.value)}
                />
                <TextField
                disabled = {disabled}
                id="outlined"
                label="Phone"
                defaultValue={currentDO.phone}
                onChange={(e) => setPhone(e.currentTarget.value)}
                />
                <TextField
                required
                disabled = {disabled}
                id="outlined-required"
                label="Status"
                defaultValue={currentDO.status}
                onChange={(e) => setStatus(e.currentTarget.value)}
                />
                <TextField
                disabled = {disabled}
                id="outlined"
                label="Email"
                defaultValue={currentDO.email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                />  
                <TextField
                required
                disabled = {disabled}
                id="outlined-required"
                label="Start Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={currentDO.startDate}
                onChange={(e) => setStartDate(e.currentTarget.value)}
                />  
                <TextField
                disabled = {disabled}
                id="outlined"
                label="End Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={currentDO.endDate}
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
            onClick={handleEdit}
            >Edit</StyledButton>
            <StyledButton 
            disabled = {disabled}
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