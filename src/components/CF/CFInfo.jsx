import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { styled, TextField } from '@mui/material';
import { useDispatch, useSelector } from "react-redux"
import { selectEntityData, selectCurrentEntity, loadExistingCFs } from "../../features/entityData/entityDataSlice";
import { getEntityCorporateFilings, updateEntityCF } from '../../api/cF';

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


export default function CFInfo({currentCFIndex}) {
  const dispatch = useDispatch();
  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);
  const currentEntity = entityData[entityIndex];
  const entityID = entityData[entityIndex].id;
  const currentCF = entityData[entityIndex].corporateFilings[currentCFIndex];

  const [open, setOpen] = React.useState(false);
  const [subName, setSubName] = React.useState(currentCF.subName);
  const [confirmation, setConfirmation] = React.useState(currentCF.confirmation);
  const [jurisdiction, setJurisdiction] = React.useState(currentCF.jurisdiction);
  const [dueDate, setDueDate] = React.useState(currentCF.dueDate);
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
    if(subName.length < 1 || confirmation.length < 1 || dueDate.length < 1) {
      setErrorMessage('Required field(s) empty!')
      return;
    }
    await updateEntityCF({
      id: currentCF.id,
      entity: currentCF.entity,
      jurisdiction: jurisdiction,
      subName: subName,
      dueDate: dueDate,
      confirmation: confirmation
    })

    const CFs = await getEntityCorporateFilings(entityID)
    dispatch(loadExistingCFs(CFs))

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
            Corporate Filing Details for {currentEntity.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            Select EDIT below to update Corporate Filing.
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
                {/* <TextField
                required
                disabled = {disabled}
                id="outlined-required"
                label="Name"
                defaultValue={currentCF.name}
                onChange={(e) => setName(e.currentTarget.value)}
                /> */}
                <TextField
                required
                disabled = {disabled}
                id="outlined-required"
                label="Jurisdiction"
                defaultValue={currentCF.jurisdiction}
                onChange={(e) => setJurisdiction(e.currentTarget.value)}
                />                
                <TextField
                required
                disabled = {disabled}
                id="outlined-required"
                label="Name (submitter)"
                defaultValue={currentCF.subName}
                onChange={(e) => setSubName(e.currentTarget.value)}
                />
                <TextField
                required
                disabled = {disabled}
                id="outlined-required"
                label="Due Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={currentCF.dueDate}
                onChange={(e) => setDueDate(e.currentTarget.value)}
                />
                <TextField
                required
                disabled = {disabled}
                id="outlined-required"
                label="Confirmation"
                defaultValue={currentCF.confirmation}
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