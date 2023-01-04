import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser, resetUserData } from "../features/userData/userDataSlice";

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
    const [open, setOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const currentUserName = currentUser.firstName;
    const companyName = currentUser.companyName;
    const navigate = useNavigate();

    const loggedIn = currentUser.email?.length > 1 ? true : false;
    const displayButtons = loggedIn ? "none" : "block"
    const displayAvatar = loggedIn ? "flex" : "none"

    const handleRegister = () => {
      navigate('/register')   

    };
    const handleLogin = () => {
      navigate('/login')   
      
    };
    const handleLogout = () => {
      dispatch(resetUserData());
      setOpen(false);
      navigate('/');   
      
    };
    const handleProfile = () => {
      setOpen(false);
      /* navigate('/profile');  */     
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
                sx={{width: 30, height: 30}} 
                src={"https://material-ui.com/static/images/avatar/1.jpg"}
                onClick={e=>{
                  setOpen(true)
                  }}/> 
                <Typography 
                  variant="span"
                  sx={{ml: "10px"}}
                  onClick={e=>{
                    setOpen(true)
                    }}
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
        /* anchorEl={false} */
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
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
