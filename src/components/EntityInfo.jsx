import {  Box, TextField, Typography } from "@mui/material";
import React from "react";


function EntityInfo() {
  return (
    <>
        <Typography variant="h6" marginLeft={1}>Entity 1 General Information</Typography>
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
                value="Furniture Corporation"
                />
                <TextField

                id="outlined-disabled"
                label="Address"
                value="1234 Second Street, Mississauga, ON"
                />
                <TextField

                id="outlined-disabled"
                label="Jurisdiction(s)"
                value="BC, MB, ON, PQ"
                />
                <TextField

                id="outlined-required"
                label="Date Created"
                value="September 1, 1999"
                />
                <TextField

                id="outlined-disabled"
                label="Status"
                value="ACTIVE"
                />
                <TextField
                /* disabled */
                id="outlined-disabled"
                label="Corporate ID"
                value="455FE6"
                />
                
            </div>
        </Box>           
                    
    </>
  );
}

export default EntityInfo;
