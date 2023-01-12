import {  Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux"
import { selectCurrentEntity } from "../../features/entityData/entityDataSlice";
import { selectEntityData } from "../../features/entityData/entityDataSlice";
import EntityEdit from "./EntityEdit";

function EntityInfo() {
    const entityIndex = useSelector(selectCurrentEntity);
    const entityData = useSelector(selectEntityData);
    const currentEntity = entityData[entityIndex];
    const activeJurisdiction = [];

    currentEntity.corporateJurisdictions?.forEach(jurisdictions => {
        if(jurisdictions.status === 'ACTIVE') {
            activeJurisdiction.push(` ${jurisdictions.jurisdiction}`)
        }
        
    })

  return (
    <>
        <Typography variant="h6" marginLeft={1}>Corporate General Information</Typography>
        <Box
            flex={1} 
            component="form"
            sx={{ 
            '& .MuiTextField-root': { m: 1, width: '35ch', },}}
            noValidate
            autoComplete="off"
            
            >
            <div>
                <TextField
                disabled
                id="outlined-required"
                label="Name"
                variant="filled"
                size="small"
                InputLabelProps={{
                    shrink: true,
                }}
                value={currentEntity.name}
                />
                <TextField
                disabled
                id="outlined-disabled"
                label="Address"
                variant="filled"
                size="small"
                InputLabelProps={{
                    shrink: true,
                }}
                value={currentEntity.address}
                />                
                <TextField
                disabled
                id="outlined-required"
                label="Date Created"
                variant="filled"
                type="date"
                InputLabelProps={{
                    shrink: true,
                  }}
                size="small"
                value={currentEntity.dateCreated}
                inputProps={{style: {textAlign: 'left'}}}
                />
                <TextField
                disabled
                id="outlined-disabled"
                label="Status"
                variant="filled"
                size="small"
                InputLabelProps={{
                    shrink: true,
                }}
                value={currentEntity.status}
                />
                <TextField
                disabled
                id="outlined-disabled"
                label="Corporate ID"
                variant="filled"
                size="small"
                InputLabelProps={{
                    shrink: true,
                }}
                value={currentEntity.corpID}
                />   
                <TextField
                disabled
                id="outlined-disabled"
                label="Active Jurisdiction(s)"
                variant="filled"
                InputLabelProps={{
                    shrink: true,
                }}
                size="small"
                value={activeJurisdiction}                
                />             
            </div>
        </Box>
        <Box 
            m={.5}
            display="flex"
            justifyContent= 'flex-start'
            >
            <EntityEdit/>
        </Box>                   
    </>
  );
}

export default EntityInfo;
