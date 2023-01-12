import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { styled, TextField } from '@mui/material';
import { useDispatch, useSelector } from "react-redux"
import { selectEntityData, selectCurrentEntity, loadExistingBNFs } from "../../features/entityData/entityDataSlice";
import { getEntityBusinessNameFilings, updateEntityBNF } from '../../api/bNF';

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


export default function BNFInfo({currentBNIndex}) {
  const dispatch = useDispatch();
  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);
  const entityID = entityData[entityIndex].id;
  const currentBNF = entityData[entityIndex].businessNameFilings[currentBNIndex];

  const [open, setOpen] = React.useState(false);

  const [businessName, setBusinessName] = React.useState(currentBNF.businessName);
  const [subName, setSubName] = React.useState(currentBNF.subName);
  const [confirmation, setConfirmation] = React.useState(currentBNF.confirmation);
  const [jurisdiction, setJurisdiction] = React.useState(currentBNF.jurisdiction);
  const [dueDate, setDueDate] = React.useState(currentBNF.dueDate);

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
    if(businessName.length < 1 || subName.length < 1 || confirmation.length < 1 || dueDate.length < 1) {
      setErrorMessage('Required field(s) empty!')
      return;
    }
    await updateEntityBNF({
      id: currentBNF.id,
      entity: currentBNF.entity,
      businessName: businessName,
      jurisdiction: jurisdiction,
      subName: subName,
      dueDate: dueDate,
      confirmation: confirmation
    })

    const BNFs = await getEntityBusinessNameFilings(entityID)
    dispatch(loadExistingBNFs(BNFs))

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
            Business Name Filing Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            Select EDIT below to update Business Name Filing.
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
                label="Business Name"
                defaultValue={currentBNF.businessName}
                onChange={(e) => setBusinessName(e.currentTarget.value)}
                />
                <TextField
                required
                disabled = {disabled}
                id="outlined-required"
                label="Jurisdiction"
                defaultValue={currentBNF.jurisdiction}
                onChange={(e) => setJurisdiction(e.currentTarget.value)}
                />
                
                <TextField
                required
                disabled = {disabled}
                id="outlined-required"
                label="Name (submitter)"
                defaultValue={currentBNF.subName}
                onChange={(e) => setSubName(e.currentTarget.value)}
                />
                <TextField
                required
                disabled = {disabled}
                id="outlined-required"
                label="Due Date"
                type='date'
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={currentBNF.dueDate}
                onChange={(e) => setDueDate(e.currentTarget.value)}
                />
                <TextField
                required
                disabled = {disabled}
                id="outlined-required"
                label="Confirmation"
                defaultValue={currentBNF.confirmation}
                onChange={(e) => setConfirmation(e.currentTarget.value)}
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