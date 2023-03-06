import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginLocalUser } from "../api/auth";
import { selectIsLoggedIn, setIsLoggedIn, setUserType } from "../features/userData/userDataSlice";
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
width: {xs: "80%", sm: "50%", md: "30%"},
bgcolor: 'background.paper',
p: 4,
opacity: '90%',
margin: 'auto',
fontSize: 'xx-large',
textAlign: 'center',
fontWeight: 'bold',
borderTop: '1px solid lightgrey',
borderBottom: '1px solid lightgrey'
};
const typeStyle2 = {
  width: {xs: "80%", sm: "50%", md: "30%"},
  bgcolor: 'background.paper',
  p: 4,
  opacity: '90%',
  margin: 'auto',
  fontSize: 'larger',
  textAlign: 'center'
};

const typeStyle3 = {
  width: {xs: "80%", sm: "50%", md: "30%"},
  bgcolor: 'background.paper',
  p: 4,
  opacity: '90%',
  margin: 'auto',
  fontSize: 'larger',
  textAlign: 'center',
  cursor: 'pointer',
  textDecoration: 'underline'
};

function Home() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if(loggedIn) {
      navigate('/main')
    }
  })

  const handleGuestUser = async () => {
    await loginLocalUser(process.env.REACT_APP_GUEST_EMAIL, process.env.REACT_APP_GUEST_PW);
    dispatch(setIsLoggedIn());
    dispatch(setUserType('Guest'))
    navigate('/main');
};

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
        <Typography id="home-title" variant="h5" sx={typeStyle3} onClick={handleGuestUser}>
            Login as Guest
        </Typography>
    </Box>
  );
}

export default Home;
