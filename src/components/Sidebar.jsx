import { Box, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material";
import React from "react";
import {store} from '../app/store'
import { setCurrentEntity } from "../features/entityData/currentEntitySlice";
import EntityAdd from "./Entity/EntityAdd";
import { selectEntityData } from "../features/entityData/entityDataSlice";
import { useSelector } from "react-redux";


function Sidebar() {

    const entities = useSelector(selectEntityData)
 
    return (
        <Box
            flex={1.5}
            >
            <EntityAdd/>
            <TextField
                id="filled-search"
                label="Entity Search"
                type="search"
                defaultValue="..."
                /* variant="filled" */
                sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px', ml: '4px' }}
            />
            <Box>
                {entities.map((entity, index) => {
                    const changeCurrentEntity = () => {
                        store.dispatch(setCurrentEntity(index))
                    }
                    return (
                        <ListItem /* style={style} */ key={index} component="div" disablePadding>
                        <ListItemButton onClick={changeCurrentEntity}>
                            <ListItemText primary={entities[index].name} />
                        </ListItemButton>
                        </ListItem>
                    );
                })}
            </Box>           
        </Box>    
    )
}

export default Sidebar;
