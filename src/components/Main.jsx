import { Box } from "@mui/material";
import React from "react";
import EntityInfo from "./EntityInfo";
import EntityDetails from "./EntityDetails";


function Main() {

  return (
    <Box
        flex={6}
       /*  backgroundColor="lightblue" */
    >
    <EntityInfo/>
    <EntityDetails/>   
    </Box>
    )
}

export default Main;
