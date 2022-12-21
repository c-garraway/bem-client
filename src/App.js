import { Box, Stack } from '@mui/material';
import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Sidebar/>
        <Main/>
      </Stack>
    </Box>
  );
}

export default App;
