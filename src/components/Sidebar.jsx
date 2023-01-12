import { Box, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material";
import React, { useEffect } from "react";
/* import { setCurrentEntity } from "../features/entityData/currentEntitySlice"; */
import EntityAdd from "./Entity/EntityAdd";
import { selectEntityData, setCurrentEntity, loadExistingEntities } from "../features/entityData/entityDataSlice";
import { useSelector, useDispatch } from "react-redux";
import { getUserEntities } from "../api/entity";
import { selectCurrentUser } from "../features/userData/userDataSlice";


function Sidebar() {
    const dispatch = useDispatch()

    const [search, setSearch] = React.useState('');
    const currentUser = useSelector(selectCurrentUser);

    useEffect(() => {
        async function getEntities() {
            const entities = await getUserEntities(currentUser.id);
            console.log(entities.message);
            if(entities.message) {
                return null;
            }
            dispatch(loadExistingEntities(entities));
    
        }
        getEntities();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const entityData = useSelector(selectEntityData);
    console.log(entityData)
    return (
        <Box
            flex={1.5}
            >
            <EntityAdd/>
            <TextField
                id="filled-search"
                label="Entity Search"
                type="search"
                size="small"
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
                    { entityData[0].name === '' ?
                        <div>                           
                            <ListItem component="div" disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{color: 'red'}} primary={'No Entities Defined'}/>
                            </ListItemButton>
                            </ListItem>
                        </div>
                        :
                        <div>
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
                        </div>
                    }
                </Box>
            }          
        </Box>    
    )
}

export default Sidebar;
