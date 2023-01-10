import { Box } from "@mui/material";
import React, { useEffect } from "react";
import EntityInfo from "./Entity/EntityInfo";
import EntityDetails from "./Entity/EntityDetails";
import { useNavigate } from "react-router";
import { selectIsLoggedIn } from "../features/userData/userDataSlice"
import { useSelector } from "react-redux";

function Main() {
 //const dispatch = useDispatch();
  const loggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  //let { guser } = useParams();

  

  useEffect( () => {
  /* console.log(guser);

  async function setUser() { 
    if(guser) {
      const googleUser = await getGoogleUser(guser);
      dispatch(setCurrentUser({
        email: googleUser.email,
        firstName: googleUser.firstname,
        lastName: googleUser.lastname,
        companyName: googleUser.companyname,
        avatar: googleUser.avatar
      }));
    }
  }
    
    setUser();
    dispatch(setIsLoggedIn()); */
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
