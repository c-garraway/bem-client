import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DOList from '../DO/DOList';
import BNList from '../BN/BNList';
import BNFList from '../BNF/BNFList';
import CFList from '../CF/CFList';
import DOAdd from '../DO/DOAdd';
import BNAdd from '../BN/BNAdd';
import BNFAdd from '../BNF/BNFAdd';
import CFAdd from '../CF/CFAdd';
import CJAdd from '../CJ/CJAdd';
import CJList from '../CJ/CJList';
import { setCurrentTab } from '../../features/userData/userDataSlice';
import { useDispatch } from 'react-redux';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
          {/* <Typography>{children}</Typography> */}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function EntityDetails() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    dispatch(setCurrentTab(value));
  }, [dispatch, value])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', minWidth: '400px' }}>
        <Tabs 
          value={value} 
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={true} 
          allowScrollButtonsMobile
          aria-label="basic tabs example" >
          <Tab label="D & O's" {...a11yProps(0)} />
          <Tab label="Bus. Names" {...a11yProps(1)} />
          <Tab label="Bus. Name Filings" {...a11yProps(2)} />
          <Tab label="Corp. Filings" {...a11yProps(3)} />
          <Tab label="Corp. Jurisdictions" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DOAdd/>
        <DOList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BNAdd/>
        <BNList/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BNFAdd/>
        <BNFList/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CFAdd/>
        <CFList/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CJAdd/>
        <CJList/>
      </TabPanel>
    </Box>
  );
}