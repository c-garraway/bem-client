import { Box } from "@mui/material";
import React, { useEffect } from "react";
import EntityInfo from "./Entity/EntityInfo";
import EntityDetails from "./Entity/EntityDetails";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../features/userData/userDataSlice";
import { useNavigate } from "react-router-dom";

function Main() {
  const loggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn) {
      navigate('/')
    }
  })
  

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
