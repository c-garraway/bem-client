import { Box, Stack } from '@mui/material';
import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import UserLogin from './components/User/UserLogin';
import UserRegister from './components/User/UserRegister';
import AddUserProfile from './components/User/AddUserProfile';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <Router>
      <Box>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<UserLogin/>} />
          <Route path='/register' element={<UserRegister/>} />
          <Route path='/profile' element={<AddUserProfile/>} />
          <Route path='/main' element={
            <Stack direction="row" spacing={1} justifyContent="space-between">
              <Sidebar/>
              <Main/>
            </Stack>} 
          />          
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
