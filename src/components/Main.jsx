import { Box } from "@mui/material";
import React from "react";
import EntityInfo from "./Entity/EntityInfo";
import EntityDetails from "./Entity/EntityDetails";

function Main() {

  return (
    <Box
        flex={6}
    >
      <EntityInfo/>
      <EntityDetails/>   
    </Box>
    )
}

export default Main;
