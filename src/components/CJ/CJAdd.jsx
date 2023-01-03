import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { addNewCJ, selectCurrentEntity, selectEntityData } from '../../features/entityData/entityDataSlice';
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


export default function CJAdd() {
  const dispatch = useDispatch()
  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);

  const currentEntity = entityData[entityIndex];

  const [open, setOpen] = React.useState(false);

  const [jurisdiction, setJurisdiction] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  const [errorMessage, setErrorMessage] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setErrorMessage('');

};
  const handleSave = () => {
    if(jurisdiction.length < 1 || status.length < 1 || startDate.length < 1) {
      setErrorMessage('Required field(s) empty!')
      return;
    }
    dispatch(addNewCJ({
      jurisdiction: jurisdiction,
      status: status,
      startDate: startDate,
      endDate: endDate,    
    }));
    setOpen(false);

    setJurisdiction('');
    setStatus('');
    setStartDate('');
    setEndDate('');

    setErrorMessage('');
    }; 

  return (
    <div >
      <Button 
        onClick={handleOpen}
          startIcon={<Add/>}
          color="primary"
          sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px' }}
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
            
            '& .MuiTextField-root': { m: 1, width: "100%", minWidth: '20ch'}}}
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
                onChange={(e) => setJurisdiction(e.currentTarget.value)}
                />                
                <TextField
                required
                id="outlined-required"
                label="Status"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setStatus(e.currentTarget.value)}
                />
                <TextField
                required
                id="outlined-required"
                label="Start Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setStartDate(e.currentTarget.value)}
                />
                <TextField
                required
                id="outlined-required"
                label="End Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
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