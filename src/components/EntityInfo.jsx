import {  Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux"
import { selectCurrentEntity } from "../features/entityData/currentEntitySlice";
import { selectEntityData } from "../features/entityData/entityDataSlice";

function EntityInfo() {
    const entityIndex = useSelector(selectCurrentEntity);
    const entities = useSelector(selectEntityData);
    const currentEntity = entities[entityIndex];

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

                id="outlined-required"
                label="Name"
                /* defaultValue="Furniture Corporation" */
                value={currentEntity.name}
                />
                <TextField

                id="outlined-disabled"
                label="Address"
                value={currentEntity.address}
                />
                <TextField

                id="outlined-disabled"
                label="Jurisdiction(s)"
                value={currentEntity.jurisdictions.map(jurisdictions => {
                    return ` ${jurisdictions.jurisdiction}`
                })}
                />
                <TextField

                id="outlined-required"
                label="Date Created"
                value={currentEntity.dateCreated}
                />
                <TextField

                id="outlined-disabled"
                label="Status"
                value={currentEntity.status}
                />
                <TextField
                /* disabled */
                id="outlined-disabled"
                label="Corporate ID"
                value={currentEntity.corpID}
                />                
            </div>
        </Box>                     
    </>
  );
}

export default EntityInfo;
