import {  Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { getEntityCorporateJurisdictions } from "../../api/cJ";
import { loadExistingCJs, selectCurrentEntity } from "../../features/entityData/entityDataSlice";
import { selectEntityData } from "../../features/entityData/entityDataSlice";
import EntityEdit from "./EntityEdit";


function EntityInfo() {
    const dispatch = useDispatch();
    const entityIndex = useSelector(selectCurrentEntity);
    const entityData = useSelector(selectEntityData);
    const entityID = entityData[entityIndex].id;
    const currentEntity = entityData[entityIndex];
    const activeJurisdictions = [];

    React.useEffect(() => {
        async function getCJs() {
          const CJs = await getEntityCorporateJurisdictions(entityID);
          if(CJs?.message) {
              return;
          }
          dispatch(loadExistingCJs(CJs));    
        }
        getCJs();
        // eslint-disable-next-line
    },[entityID])

    currentEntity.corporateJurisdictions?.forEach(jurisdictions => {
        if(jurisdictions.status === 'ACTIVE') {
            activeJurisdictions.push(` ${jurisdictions.jurisdiction}`)
        }            
    })


  return (
    <>
        <Typography variant="h6" marginLeft={1}>Corporate General Information</Typography>
        <Box
            flex={1} 
            component="form"
            sx={{ 
            '& .MuiTextField-root': { m: 1, width: {xs: "95%", sm: "45%", md: "45%"}, }, }}
            noValidate
            autoComplete="off"
            
            >
            <div>
                <TextField
                disabled
                id="standard-disabled"
                label="Name"
                variant="standard"
                size="small"
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "#000000",
                    },
                }}
                value={currentEntity.name}
                />
                <TextField
                disabled
                id="standard-disabled"
                label="Address"
                variant="standard"
                size="small"
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "#000000",
                    },
                }}
                value={currentEntity.address}
                />                
                <TextField
                disabled
                id="standard-disabled"
                label="Date Created"
                variant="standard"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "#000000"
                    },
                }}
                size="small"
                value={currentEntity.dateCreated}
                />
                <TextField
                disabled
                id="standard-disabled"
                label="Status"
                variant="standard"
                size="small"
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "#000000",
                    },
                }}
                value={currentEntity.status}
                />
                <TextField
                disabled
                id="standard-disabled"
                label="Corporate ID"
                variant="standard"
                size="small"
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "#000000",
                    },
                }}
                value={currentEntity.corpID}
                />   
                <TextField
                disabled
                id="standard-disabled"
                label="Active Jurisdiction(s)"
                variant="standard"
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "#000000",
                    },
                }}
                size="small"
                value={activeJurisdictions}                
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
