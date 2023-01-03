import { Box, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material";
import React from "react";
/* import { setCurrentEntity } from "../features/entityData/currentEntitySlice"; */
import EntityAdd from "./Entity/EntityAdd";
import { selectEntityData, setCurrentEntity } from "../features/entityData/entityDataSlice";
import { useSelector, useDispatch } from "react-redux";


function Sidebar() {
    const dispatch = useDispatch()

    const [search, setSearch] = React.useState('');


    const entityData = useSelector(selectEntityData);
    
    return (
        <Box
            flex={1.5}
            >
            <EntityAdd/>
            <TextField
                id="filled-search"
                label="Entity Search"
                type="search"
                onChange={(e) => setSearch(e.currentTarget.value)}
                sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px', ml: '4px' }}
            />
            { search.length > 0 ?
                <Box>
                    {entityData.map((entity, index) => {
                        const changeCurrentEntity = () => {
                            dispatch(setCurrentEntity(index))
                        }
                        if(entity.name.toLowerCase().includes(search.toLocaleLowerCase())){
                            return (
                                <ListItem /* style={style} */ key={index} component="div" disablePadding>
                                <ListItemButton onClick={changeCurrentEntity}>
                                    <ListItemText primary={entity.name} />
                                </ListItemButton>
                                </ListItem>
                            );
                        }
                        return null;
                    })}                    
                </Box> 
                :
                <Box>
                    {entityData.map((entity, index) => {
                        const changeCurrentEntity = () => {
                            dispatch(setCurrentEntity(index))
                        }
                        return (
                            <ListItem key={index} component="div" disablePadding>
                            <ListItemButton onClick={changeCurrentEntity}>
                                <ListItemText primary={entity.name} />
                            </ListItemButton>
                            </ListItem>
                        );
                    })}
                </Box>
            }          
        </Box>    
    )
}

export default Sidebar;
