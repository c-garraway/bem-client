import { Box } from "@mui/material";
import React, { useEffect } from "react";
import EntityInfo from "./Entity/EntityInfo";
import EntityDetails from "./Entity/EntityDetails";
import { useNavigate } from "react-router";
import { selectIsLoggedIn } from "../features/userData/userDataSlice"
import { useSelector } from "react-redux";

function Main() {
  const loggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if(loggedIn === false) {   
      return  (
        navigate('/login') 
       )
    }
  })

  


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
