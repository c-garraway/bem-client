import { AppBar, Avatar, Box, Button, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser, resetUserData, selectIsLoggedIn, setIsLoggedIn, setCurrentUser, selectUserType } from "../features/userData/userDataSlice";
import { resetEntityData } from "../features/entityData/entityDataSlice";
import { logoutUser, getUser } from "../api/auth";
import { useEffect } from "react";

const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between",
});

function Navbar() {

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const currentUserType = useSelector(selectUserType);
  const currentUser = useSelector(selectCurrentUser);
  const currentUserName = currentUser?.firstName;
  const companyName = currentUser?.companyName;
  const avatar = currentUser?.avatar;
  const navigate = useNavigate();

  const loggedIn = useSelector(selectIsLoggedIn);
  const displayButtons = loggedIn ? "none" : "block"
  const displayAvatar = loggedIn ? "flex" : "none"

  useEffect(() => {
    async function getCurrentUser() {
      const guser = await getUser();
      if(guser?.message) {
        return;
      }
      if(guser.id) {
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
      };
    };
    
    if(currentUserType) {
      getCurrentUser();
    }
    
  },[loggedIn, dispatch, navigate, currentUserType]);

  const handleRegister = () => {
    navigate('/register')   

  };
  const handleLogin = () => {
    navigate('/login')   
    
  };
  const handleLogout = (event) => {
    setAnchorEl(event.currentTarget);

    dispatch(resetUserData())
    dispatch(resetEntityData())
    handleClose()
    logoutUser()
    navigate('/')
    
  };
  const handleProfile = (event) => {
    setAnchorEl(event.currentTarget);
    handleClose();
    navigate('/profile');      
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="sticky">
        <StyledToolbar>
           <Typography 
            variant="h4" 
            /* sx={{ display: { xs: "none", sm: "block"}}} */>
              B E M
           </Typography>
           <Typography 
            variant="h6" 
            sx={{ display: { xs: "none", sm: "block"}}}>
              {companyName}
           </Typography>
           {/* <MenuIcon sx={{ display: { xs: "block", sm: "none"}}}/>  */}
           <Box sx={{ display: displayButtons}}>
            <Button 
              variant="outlined" 
              onClick={handleRegister}
              sx={{
                backgroundColor: 'white',
                color: 'black',
                '&:hover':{
                  backgroundColor: 'black',
                  color: 'white',
                }
              }}>Register</Button>
            <Button 
              variant="outlined" 
              onClick={handleLogin}
              sx={{
                backgroundColor: 'white',
                color: 'black',
                marginLeft: '10px',
                '&:hover':{
                  backgroundColor: 'black',
                  color: 'white',
                }
              }}>Login</Button>
           </Box>
           <Box
           sx={{display: displayAvatar, alignItems: 'center'}}   >              
                <Avatar 
                sx={{width: 35, height: 35, border: '1px solid lightblue'}} 
                src={avatar}
                /> 
                <Typography 
                  variant="span"
                  sx={{ml: "10px", cursor: "pointer"}}
                  onClick={handleClick}
                  >{currentUserName}</Typography>               
           </Box>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          >
          <MenuItem
            onClick={handleProfile} >
            Profile
          </MenuItem>
          <MenuItem
            onClick={handleLogout} >
            Logout
          </MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar;
