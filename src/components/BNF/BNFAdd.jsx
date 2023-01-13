import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { loadExistingBNFs, selectCurrentEntity, selectEntityData } from '../../features/entityData/entityDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addEntityBNF, getEntityBusinessNameFilings } from '../../api/bNF';

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


export default function BNFAdd() {
  const dispatch = useDispatch();
  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);
  const entityID = entityData[entityIndex].id;

  const [open, setOpen] = React.useState(false);
  
  const [businessName, setBusinessName] = React.useState();
  const [subName, setSubName] = React.useState();
  const [confirmation, setConfirmation] = React.useState();
  const [jurisdiction, setJurisdiction] = React.useState();
  const [dueDate, setDueDate] = React.useState();

  const [errorMessage, setErrorMessage] = React.useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setErrorMessage('');

};
  const handleSave = async () => {
    if(businessName.length < 1 || subName.length < 1 || confirmation.length < 1 || dueDate.length < 1) {
      setErrorMessage('Required field(s) empty!')
      return;
    }

    await addEntityBNF({
      entity: entityID,
      businessName: businessName,
      jurisdiction: jurisdiction,
      subName: subName,
      dueDate: dueDate,
      confirmation: confirmation
    })

    const BNFs = await getEntityBusinessNameFilings(entityID)
    dispatch(loadExistingBNFs(BNFs))

    setOpen(false);

    setBusinessName('');
    setSubName('');
    setConfirmation('');
    setJurisdiction('');
    setDueDate('');

    setErrorMessage('');
    }; 

  return (
    <div >
      <Button 
        onClick={handleOpen}
          startIcon={<Add/>}
          color="primary"
          sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px' }}
          >Add Business Name Filing
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
          Add Business Name Filing
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
                label="Business Name"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setBusinessName(e.currentTarget.value)}
                />
                <TextField
                required
                id="outlined-required"
                label="Name (submitter)"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setSubName(e.currentTarget.value)}
                />                
                <TextField
                required
                id="outlined-required"
                label="Confirmation"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setConfirmation(e.currentTarget.value)}
                />
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
                label="Due Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setDueDate(e.currentTarget.value)}
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