import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between",
});

/* const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "50%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none", 
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
})); */

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex", 
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}));

function Navbar() {

    const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
        <StyledToolbar>
           <Typography variant="h4" sx={{ display: { xs: "none", sm: "block"}}}>B E M</Typography>
           <MenuIcon sx={{ display: { xs: "block", sm: "none"}}}/> 
           {/* <Search sx={{backgroundColor:"white"}}><InputBase placeholder="entity search..."  /></Search> */}
           <Box>
            <Button variant="outlined" sx={{
                backgroundColor: 'white',
                color: 'black',
                '&:hover':{
                  backgroundColor: 'black',
                  color: 'white',
                }
            }}>Sign Up</Button>
            <Button variant="outlined" sx={{
                backgroundColor: 'white',
                color: 'black',
                marginLeft: '10px',
                '&:hover':{
                  backgroundColor: 'black',
                  color: 'white',
                }
            }}>Sign In</Button>
           </Box>
           {/* <Icons>              
                <Avatar 
                sx={{width: 30, height: 30}} 
                src={"https://material-ui.com/static/images/avatar/1.jpg"}
                onClick={e=>setOpen(true)}/>                
           </Icons> */}
           <UserBox onClick={e=>setOpen(true)}>
                <Avatar sx={{width: 30, height: 30}} 
                src={"https://material-ui.com/static/images/avatar/1.jpg"}/> 
                <Typography variant="span">Travis</Typography>
           </UserBox>
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
        <MenuItem >Profile</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar;
