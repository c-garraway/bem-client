import styled from "@emotion/styled";
import {  Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux"
import { selectCurrentEntity } from "../../features/entityData/currentEntitySlice";
import { selectEntityData } from "../../features/entityData/entityDataSlice";

const StyledButton = styled(Button) ({
    margin: 5,
    /* '&:hover':{
        backgroundColor: 'darkblue',
        color: 'white',
      }
 */
});

function EntityInfo() {
    const [disabled, setDisabled] = React.useState(true);
    const entityIndex = useSelector(selectCurrentEntity);
    const entities = useSelector(selectEntityData);
    const currentEntity = entities[entityIndex];

    const handleClose = () => {
        /* setOpen(false);
        setDisabled(true); */
    };
    const handleEdit = () => {
        setDisabled(false)
    };
    const handleSave = () => {
        setDisabled(true)
    };

  return (
    <>
        <Typography variant="h6" marginLeft={1}>General Information</Typography>
        <Box
            flex={1} 
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },}}
            noValidate
            autoComplete="off"
            >
            <div>
                <TextField
                disabled = {disabled}
                id="outlined-required"
                label="Name"
                /* defaultValue="Furniture Corporation" */
                value={currentEntity.name}
                />
                <TextField
                disabled = {disabled}
                id="outlined-disabled"
                label="Address"
                value={currentEntity.address}
                />                
                <TextField
                disabled = {disabled}
                id="outlined-required"
                label="Date Created"
                value={currentEntity.dateCreated}
                />
                <TextField
                disabled = {disabled}
                id="outlined-disabled"
                label="Status"
                value={currentEntity.status}
                />
                <TextField
                disabled = {disabled}
                id="outlined-disabled"
                label="Corporate ID"
                value={currentEntity.corpID}
                />   
                <TextField
                disabled
                id="outlined-disabled"
                label="Jurisdiction(s)"
                value={currentEntity.jurisdictions.map(jurisdictions => {
                    return ` ${jurisdictions.jurisdiction}`
                })}
                />             
            </div>
        </Box>  
        <Box 
            m={.5}
            display="flex"
            justifyContent= 'flex-start'
            >
            <StyledButton 
            variant="outlined"
            onClick={handleEdit}
            >Edit</StyledButton>
            <StyledButton 
            variant="outlined"
            onClick={handleSave}
            >Save</StyledButton>
            <StyledButton 
            variant="outlined"
            onClick={handleClose}
            >Add | Edit Jusrisdictions</StyledButton>
        </Box>                   
    </>
  );
}

export default EntityInfo;
