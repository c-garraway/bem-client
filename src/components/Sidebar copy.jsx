import { Box, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material";
import React from "react";
import { FixedSizeList } from 'react-window';
import {store} from '../app/store'
import { setCurrentEntity } from "../features/entityData/currentEntitySlice";
import EntityCreate from "./Entity/EntityAdd";

const entities = store.getState().entityData;

function renderRow(props) {
    const { index, style } = props;

    const changeCurrentEntity = () => {
        store.dispatch(setCurrentEntity(index))
    }

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton onClick={changeCurrentEntity}>
          <ListItemText primary={entities[index].name} />
        </ListItemButton>
      </ListItem>
    );
}

function Sidebar() {

  return (
    <Box
        flex={1.5}
        >
        <EntityCreate/>
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
                itemCount={entities.length}
                overscanCount={5}
                >
                {renderRow}
            </FixedSizeList>
        </Box>    
    </Box>
    )
}

export default Sidebar;
