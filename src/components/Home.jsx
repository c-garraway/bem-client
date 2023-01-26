import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import background from '../images/background.jpg'

const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'block',
    padding: {xs: "15%", sm: "15%", md: "10%"}
    
};

const typeStyle = {
width: {xs: "80%", sm: "20%", md: "30%"},
bgcolor: 'background.paper',
/* boxShadow: 24, */
p: 4,
/* borderRadius: '25px', */
opacity: '85%',
margin: 'auto',
fontSize: 'xx-large',
textAlign: 'center',
fontWeight: 'bold',
borderTop: '1px solid lightgrey',
borderBottom: '1px solid lightgrey'
};

const typeStyle2 = {
  width: {xs: "80%", sm: "20%", md: "30%"},
  bgcolor: 'background.paper',
  /* boxShadow: 24, */
  p: 4,
  /* borderRadius: '25px', */
  opacity: '85%',
  margin: 'auto',
  fontSize: 'larger',
  textAlign: 'center'
  };
//{ mb: 2, textAlign: "center", bgcolor: 'white', p: '20px' }

function Home() {
  return (
    <Box
        sx={backgroundStyle}        
        >
        <Typography id="home-title" variant="h5" sx={typeStyle2}>
            Welcome To
        </Typography>
        <Typography id="home-title" variant="h5" sx={typeStyle}>
            Business Entity Management
        </Typography>
        <Typography id="home-title" variant="h5" sx={typeStyle2}>
            Login or Register to get started!
        </Typography>
    </Box>
  );
}

export default Home;
