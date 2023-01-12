import { Box } from "@mui/material";
import React, { useEffect } from "react";
import EntityInfo from "./Entity/EntityInfo";
import EntityDetails from "./Entity/EntityDetails";
import { useNavigate } from "react-router";
import { selectIsLoggedIn, setCurrentUser, setIsLoggedIn } from "../features/userData/userDataSlice"
import { useDispatch, useSelector } from "react-redux";
import { getGoogleUser } from "../api/googleLogin";

function Main() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const guser = await getGoogleUser();
        if(guser) {
            dispatch(setCurrentUser({
                id: guser.id,
                email: guser.email,
                firstName: guser.firstname,
                lastName: guser.lastname,
                companyName: guser.companyname,
                avatar: guser.avatar
            }));
            dispatch(setIsLoggedIn());
            if(guser.companyname === null) {
              navigate('/profile');
              return;
            }
            navigate('/main');
            return;
        };
    }

    getUser();
    
    if(loggedIn === false) {   
      return  (
        navigate('/login') 
       )
    }
    
    // eslint-disable-next-line
  },[]);

  

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
