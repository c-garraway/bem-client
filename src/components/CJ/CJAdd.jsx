import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MenuItem, styled, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { loadExistingCJs, selectCurrentEntity, selectEntityData } from '../../features/entityData/entityDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addEntityCJ, getEntityCorporateJurisdictions } from '../../api/cJ';
import '../../styles.css'

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

export default function CJAdd() {
  const dispatch = useDispatch()
  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);
  const entityID = entityData[entityIndex].id;
  const disabled = entityData[0].name === '' ? true : false;
  const currentEntity = entityData[entityIndex];

  const [open, setOpen] = React.useState(false);
  const [jurisdiction, setJurisdiction] = React.useState();
  const [status, setStatus] = React.useState();
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [errorMessage, setErrorMessage] = React.useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setJurisdiction();
    setStatus();
    setStartDate();
    setEndDate();
    setErrorMessage();
};
  const handleSave = async () => {
    if(jurisdiction === undefined || status === undefined || startDate === undefined) {
      setErrorMessage('Required field(s) empty!')
      return;
    }

    await addEntityCJ({
      entity: entityID,
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
      <Button 
        disabled={disabled}
        variant="outlined"
        onClick={handleOpen}
        startIcon={<Add/>}
        color="primary"
        sx={{ width: {xs: "95%", md: "fit-content"},  m:1 }}
      >Add Corporate Jurisdiction
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
          Add Corporate Jurisdiction for {currentEntity.name}
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
                label="Jurisdiction"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {setJurisdiction(e.currentTarget.value); setErrorMessage()}}
                />                
                <TextField
                required
                id="outlined-required"
                select
                label="Status"
                defaultValue=""
                helperText="Please select status"
                onChange={(e) => {setStatus(e.target.value); setErrorMessage()}}
                >
                  {statusField.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                required
                className="left-input"
                id="outlined-required"
                label="Start Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {setStartDate(e.currentTarget.value); setErrorMessage()}}
                />
                <TextField
                className="left-input"
                id="outlined-required"
                label="End Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {setEndDate(e.currentTarget.value); setErrorMessage()}}
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