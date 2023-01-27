import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { styled, TextField } from '@mui/material';
import { useDispatch, useSelector } from "react-redux"
import { selectEntityData, selectCurrentEntity, loadExistingCJs } from "../../features/entityData/entityDataSlice";
import { getEntityCorporateJurisdictions, updateEntityCJ } from '../../api/cJ';

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

const StyledButton = styled(Button) ({
    margin: 5,
    /* '&:hover':{
        backgroundColor: 'darkblue',
        color: 'white',
      }
 */
});


export default function CJInfo({currentCJIndex}) {
  const dispatch = useDispatch();
  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);
  const entityID = entityData[entityIndex].id;
  const currentEntity = entityData[entityIndex];
  const currentCJ = entityData[entityIndex].corporateJurisdictions[currentCJIndex]

  const [open, setOpen] = React.useState(false);

  const [jurisdiction, setJurisdiction] = React.useState(currentCJ.jurisdiction);
  const [status, setStatus] = React.useState(currentCJ.status);
  const [startDate, setStartDate] = React.useState(currentCJ.startDate);
  const [endDate, setEndDate] = React.useState(currentCJ.endDate);
  const [errorMessage, setErrorMessage] = React.useState();

  const [disabled, setDisabled] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setDisabled(true);
    setErrorMessage();

};
  const handleEdit = () => setDisabled(false);

  const handleSave = async () => {
    if(jurisdiction.length < 1 || status.length < 1 || startDate.length < 1) {
      setErrorMessage('Required field(s) empty!')
      return;
    }

    await updateEntityCJ({
      id: currentCJ.id,
      entity: currentCJ.entity,
      jurisdiction: jurisdiction,
      status: status,
      startDate: startDate,
      endDate: endDate
    })

    const CJs = await getEntityCorporateJurisdictions(entityID)
    dispatch(loadExistingCJs(CJs))

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
            Corporate Jurisdiction for {currentEntity.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            Select EDIT below to update Corporate Jurisdiction.
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
            <div
             >
                <TextField
                required
                disabled = {disabled}
                id="outlined-required"
                label="Jurisdiction"
                defaultValue={currentCJ.jurisdiction}
                onChange={(e) => setJurisdiction(e.currentTarget.value)}
                />
                <TextField
                required
                disabled = {disabled}
                id="outlined-required"
                label="Status"
                defaultValue={currentCJ.status}
                onChange={(e) => setStatus(e.currentTarget.value)}
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
                defaultValue={currentCJ.startDate}
                onChange={(e) => setStartDate(e.currentTarget.value)}
                />
                <TextField
                disabled = {disabled}
                id="outlined-required"
                label="End Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={currentCJ.endDate}
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