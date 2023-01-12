import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser, resetUserData, selectIsLoggedIn } from "../features/userData/userDataSlice";
import { resetEntityData } from "../features/entityData/entityDataSlice";
import { logoutUser } from "../api/logout";

const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between",
});

/* const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "50%"
})); */

/* const Icons = styled(Box)(({ theme }) => ({
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
})); */

/* const UserBox = styled(Box)(({ theme }) => ({
    display: "flex", 
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
})); */

function Navbar() {

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const currentUser = useSelector(selectCurrentUser);
  const currentUserName = currentUser?.firstName;
  const companyName = currentUser?.companyName;
  const avatar = currentUser?.avatar;
  const navigate = useNavigate();

  const loggedIn = useSelector(selectIsLoggedIn);
  const displayButtons = loggedIn ? "none" : "block"
  const displayAvatar = loggedIn ? "flex" : "none"

  const handleRegister = () => {
    navigate('/register')   

  };
  const handleLogin = () => {
    navigate('/login')   
    
  };
  const handleLogout = (event) => {
    setAnchorEl(event.currentTarget);

    dispatch(resetUserData());
    dispatch(resetEntityData());
    handleClose();
    logoutUser();
    navigate('/');   
    
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
            sx={{ display: { xs: "none", sm: "block"}}}>
              B E M
           </Typography>
           <Typography 
            variant="h6" 
            sx={{ display: { xs: "none", sm: "block"}}}>
              {companyName}
           </Typography>
           <MenuIcon sx={{ display: { xs: "block", sm: "none"}}}/> 
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
                sx={{width: 35, height: 35, border: '1px solid white'}} 
                src={avatar}
                /> 
                <Typography 
                  variant="span"
                  sx={{ml: "10px", cursor: "pointer"}}
                  onClick={handleClick}
                  >{currentUserName}</Typography>               
           </Box>
           {/* <UserBox onClick={e=>setOpen(true)}>
                <Avatar sx={{width: 30, height: 30, display: "none"}} 
                src={"https://material-ui.com/static/images/avatar/1.jpg"}/> 
                <Typography variant="span">Travis</Typography>
           </UserBox> */}
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
