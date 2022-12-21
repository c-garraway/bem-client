import { Add } from "@mui/icons-material";
import { Box, Button, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material";
import React from "react";
import { FixedSizeList } from 'react-window';


function renderRow(props) {
    const { index, style } = props;
  
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`Entity ${index + 1}`} />
        </ListItemButton>
      </ListItem>
    );
}

function Sidebar() {
  return (
    <Box
        flex={1.5}
    >
    <Button 
    startIcon={<Add/>}
    color="primary"
    sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px' }}

    >Create Entity</Button>
    <TextField
          id="filled-search"
          label="Entity Search"
          type="search"
          defaultValue="..."
          /* variant="filled" */
          sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px', ml: '4px' }}
        />
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        /* width={'100%'} */
        itemSize={46}
        itemCount={10}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
    
    </Box>
    )
}

export default Sidebar;
