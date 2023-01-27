import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { loadExistingCFs, selectCurrentEntity, selectEntityData } from '../../features/entityData/entityDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addEntityCF, getEntityCorporateFilings } from '../../api/cF';

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


export default function CFAdd() {
  const dispatch = useDispatch()
  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);
  const currentEntity = entityData[entityIndex];
  const entityID = entityData[entityIndex].id;

  const [open, setOpen] = React.useState(false);

  const [subName, setSubName] = React.useState();
  const [confirmation, setConfirmation] = React.useState();
  const [jurisdiction, setJurisdiction] = React.useState();
  const [dueDate, setDueDate] = React.useState();

  const [errorMessage, setErrorMessage] = React.useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSubName();
    setConfirmation();
    setJurisdiction();
    setDueDate();
    setErrorMessage();

};
  const handleSave = async () => {
    if(subName === undefined || confirmation === undefined|| dueDate === undefined) {
      setErrorMessage('Required field(s) empty!')
      return;
    }

    await addEntityCF({
      entity: entityID,
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
      <Button 
        onClick={handleOpen}
          startIcon={<Add/>}
          color="primary"
          sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px' }}
          >Add Corporate Filing
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
          Add Corporate Filing for {currentEntity.name}
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
                {/* <TextField
                required
                id="outlined-required"
                label="Name"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setName(e.currentTarget.value)}
                /> */}
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