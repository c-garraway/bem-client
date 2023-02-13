import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MenuItem, styled, TextField } from '@mui/material';
import { selectCurrentEntity, selectEntityData, loadExistingEntities, loadExistingDOs, loadExistingBNs, loadExistingBNFs, loadExistingCFs, loadExistingCJs } from '../../features/entityData/entityDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getUserEntities, updateUserEntity } from "../../api/entity";
import { selectCurrentTab, selectCurrentUser } from "../../features/userData/userDataSlice";
import { getEntityDo } from "../../api/dO";
import { getEntityBusinessNames } from "../../api/bN";
import { getEntityBusinessNameFilings } from "../../api/bNF";
import { getEntityCorporateFilings } from "../../api/cF";
import { getEntityCorporateJurisdictions } from "../../api/cJ";

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

export default function EntityEdit() {
  const dispatch = useDispatch()
  const entityIndex = useSelector(selectCurrentEntity);
  const entityData = useSelector(selectEntityData);
  const currentEntity = entityData[entityIndex];
  const entityID = entityData[entityIndex].id;
  const currentTab = useSelector(selectCurrentTab);
  const disabled = entityData[0].name === '' ? true : false;
  const currentUser = useSelector(selectCurrentUser);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [dateCreated, setDateCreated] = useState();
  const [corpID, setCorpID] = useState();
  const [address, setAddress] = useState();
  const [status, setStatus] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    setName(currentEntity.name);
    setDateCreated(currentEntity.dateCreated);
    setCorpID(currentEntity.corpID);
    setAddress(currentEntity.address);
    setStatus(currentEntity.status);
  
  }, [currentEntity]);

  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false);
    setErrorMessage();
  };
  const handleSave = async () => {

    if(name?.length < 1 || address?.length < 1 || dateCreated === null || status?.length < 1 || corpID?.length < 1) {
      setErrorMessage('All fields are required to edit entity!')
      
      return;
    }

    await updateUserEntity({
      id: currentEntity.id,
      userID: currentEntity.userID,
      name: name,
      address: address,
      dateCreated: dateCreated,
      status: status,
      corpID: corpID, 
    })

    async function getEntities() {
      const entities = await getUserEntities(currentUser.id)
      if(entities?.message) {
        return;
      }
      dispatch(loadExistingEntities(entities))
    }
    
    async function getDOs() {
      const dOs = await getEntityDo(entityID)
      if(dOs?.message) {
        return;
      }
      dispatch(loadExistingDOs(dOs))
    }
    
    async function getBNs() {
      const bNs = await getEntityBusinessNames(entityID)
      if(bNs?.message) {
        return;
      }
      dispatch(loadExistingBNs(bNs))
    }

    async function getBNFs() {
      const bNFs = await getEntityBusinessNameFilings(entityID)
      if(bNFs?.message) {
        return;
      }
      dispatch(loadExistingBNFs(bNFs))
    }
    
    async function getCFs() {
      const cFs = await getEntityCorporateFilings(entityID)
      if(cFs?.message) {
        return;
      }
      dispatch(loadExistingCFs(cFs))
    }

    async function getCJs() {
      const cJs = await getEntityCorporateJurisdictions(entityID)
      if(cJs?.message) {
        return;
      }
      dispatch(loadExistingCJs(cJs))
    }

    getEntities()

    switch(currentTab) {
      default:
        getDOs()
        getCJs()
      break;
      case 1:
        getBNs()
        getCJs()
      break;
      case 2:
        getBNFs()
        getCJs()
      break;
      case 3:
        getCFs()
        getCJs()
      break;
    }

    handleClose();
  };

  return (    
    <div >
      <StyledButton 
            disabled={disabled}
            variant="outlined"
            onClick={handleOpen}
            >Edit</StyledButton>
      {/* <Button 
        onClick={handleOpen}
        startIcon={<Add/>}
        color="primary"
        sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px' }}
        >Add Entity
      </Button> */}
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
            Edit Entity
          </Typography>
          <Typography id="modal-modal-description"  sx={{ mt: 2, mb: 2, color: "red" }}>
            {errorMessage}
          </Typography>          
          <Box
            flex={1} 
            component="form"
            sx={{
            '& .MuiTextField-root': { mt: 1, mb: 1, width: "100%", /* minWidth: '25ch' */},}}
            noValidate
            autoComplete="off"
            >
            <div>
                <TextField
                required
                id="outlined-required"
                label="Name"
                defaultValue={currentEntity.name}
                onChange={(e) => {setName(e.currentTarget.value); setErrorMessage('')}}
                />
                <TextField
                required
                id="outlined"
                label="Address"
                defaultValue={currentEntity.address}
                onChange={(e) => {setAddress(e.currentTarget.value); setErrorMessage('')}}
                />                
                <TextField
                required
                id="outlined-required"
                label="Date Created"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={currentEntity.dateCreated}
                onChange={(e) => {setDateCreated(e.currentTarget.value); setErrorMessage('')}}
                />
{/*                 <TextField
                required
                id="outlined-required"
                label="Status"
                defaultValue={currentEntity.status}
                onChange={(e) => {setStatus(e.currentTarget.value); setErrorMessage('')}}
                /> */}
                <TextField
                required
                id="outlined-required"
                select
                label="Status"
                defaultValue={currentEntity.status}
                helperText="Please select status"
                onChange={(e) => {setStatus(e.target.value); setErrorMessage('')}}
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
                defaultValue={currentEntity.corpID}
                onChange={(e) => {setCorpID(e.currentTarget.value); setErrorMessage('')}}
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