import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MenuItem, styled, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { loadExistingEntities } from '../../features/entityData/entityDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addUserEntity, getUserEntities } from '../../api/entity';
import { selectCurrentUser } from '../../features/userData/userDataSlice';
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


export default function EntityAdd() {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser);
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState();
  const [dateCreated, setDateCreated] = React.useState();
  const [corpID, setCorpID] = React.useState();
  const [address, setAddress] = React.useState();
  const [status, setStatus] = React.useState();
  const [errorMessage, setErrorMessage] = React.useState();

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setName()
    setDateCreated()
    setCorpID()
    setAddress()
    setStatus()
    setErrorMessage();
  };

  const handleSave = async () => {
    if(name === undefined || address === undefined || dateCreated === undefined || status === undefined || corpID === undefined) {
      setErrorMessage('All fields are required to add entity!')
      return;
    }
    await addUserEntity({
      userID: currentUser.id,
      name: name,
      address: address,
      dateCreated: dateCreated,
      status: status,
      corpID: corpID,
    })

    const entities = await getUserEntities(currentUser.id)
    dispatch(loadExistingEntities(entities))

    handleClose()
  };

  return (    
    <div >
      <Button 
        variant="contained"
        onClick={handleOpen}
        startIcon={<Add/>}
        color="success"
        sx={{ width: '95%',  m:1 }}
      >Add Entity
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
            Add Entity
          </Typography>
          <Typography id="modal-modal-description"  sx={{ mt: 2, mb: 2, color: "red" }}>
            {errorMessage}
          </Typography>          
          <Box
            flex={1} 
            component="form"
            sx={{
            '& .MuiTextField-root': { mb: 1, mt: 1, width: "100%", /* minWidth: '25ch' */},}}
            noValidate
            autoComplete="off"
            >
            <div>
                <TextField
                required
                id="outlined-required"
                label="Name"
                onChange={(e) => {setName(e.currentTarget.value); setErrorMessage()}}
                />
                <TextField
                required
                id="outlined"
                label="Address"
                onChange={(e) => {setAddress(e.currentTarget.value); setErrorMessage()}} 
                />                
                <TextField
                required
                className="left-input"
                id="outlined-required"
                label="Date Created"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {setDateCreated(e.currentTarget.value); setErrorMessage()}}
                />
{/*                 <TextField
                required
                id="outlined-required"
                label="Status"
                onChange={(e) => {setStatus(e.currentTarget.value); setErrorMessage()}}
                /> */}
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
                id="outlined"
                label="Corporate ID"
                onChange={(e) => {setCorpID(e.currentTarget.value); setErrorMessage()}}
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