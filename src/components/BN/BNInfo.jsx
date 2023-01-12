import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { styled, TextField } from '@mui/material';
import { useDispatch, useSelector } from "react-redux"
import { selectEntityData, selectCurrentEntity, loadExistingBNs } from "../../features/entityData/entityDataSlice";
import { getEntityBusinessNames, updateEntityBn } from '../../api/bN';

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


export default function BNInfo({currentBNIndex}) {
  const dispatch = useDispatch();
  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);
  const entityID = entityData[entityIndex].id;
  const currentBN = entityData[entityIndex].businessNames[currentBNIndex]
  

  const [open, setOpen] = React.useState(false);
  const [businessName, setBusinessName] = React.useState(currentBN.businessName);
  const [address, setAddress] = React.useState(currentBN.address);
  const [status, setStatus] = React.useState(currentBN.status);
  const [jurisdiction, setJurisdiction] = React.useState(currentBN.jurisdiction);
  const [creationDate, setCreationDate] = React.useState(currentBN.creationDate);
  const [closeDate, setCloseDate] = React.useState(currentBN.closeDate);
 
  const [errorMessage, setErrorMessage] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setDisabled(true);
    setErrorMessage('');

  };
  const handleEdit = () => setDisabled(false);

  const handleSave = async () => {
    if(businessName.length < 1 || status.length < 1 || setCreationDate.length < 1 || jurisdiction.length < 1) {
      setErrorMessage('Required field(s) empty!')
      return;
    }

    await updateEntityBn({
      id: currentBN.id,
      entity: currentBN.entity,
      businessName: businessName,
      jurisdiction: jurisdiction,
      address: address,
      creationDate: creationDate,
      status: status,
      closeDate: closeDate
    })

    const bNs = await getEntityBusinessNames(entityID)
    dispatch(loadExistingBNs(bNs))

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
            Business Name Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            Select EDIT below to update Business Name.
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
                disabled = {disabled}
                id="outlined-required"
                label="Business Name"
                defaultValue={currentBN.businessName}
                onChange={(e) => setBusinessName(e.currentTarget.value)}
                />
                <TextField
                disabled = {disabled}
                id="outlined-disabled"
                label="Jurisdiction"
                onChange={(e) => setJurisdiction(e.currentTarget.value)}
                defaultValue={currentBN.jurisdiction}
                />
                
                <TextField
                disabled = {disabled}
                id="outlined-required"
                label="Address"
                defaultValue={currentBN.address}
                onChange={(e) => setAddress(e.currentTarget.value)}
                />
                <TextField
                disabled = {disabled}
                id="outlined-disabled"
                label="Creation Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={currentBN.creationDate}
                onChange={(e) => setCreationDate(e.currentTarget.value)}
                />
                <TextField
                disabled = {disabled}
                id="outlined-disabled"
                label="Status"
                defaultValue={currentBN.status}
                onChange={(e) => setStatus(e.currentTarget.value)}
                />
                <TextField
                disabled = {disabled}
                id="outlined-disabled"
                label="Close Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={currentBN.closeDate}
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