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
};

const typeStyle = {
position: 'absolute',
top: '25%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: '80%',
maxHeight: '80%',
bgcolor: 'background.paper',
boxShadow: 24,
p: 4,
textAlign: 'center',
borderRadius: '5px'
};

//{ mb: 2, textAlign: "center", bgcolor: 'white', p: '20px' }

function Home() {
  return (
    <Box
        sx={backgroundStyle}        
        >
        <Typography id="user-box-title" variant="h5" sx={typeStyle}>
            Business Entity Management
        </Typography>
    </Box>
  );
}

export default Home;
