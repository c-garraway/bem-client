import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import DOList from './DOList';
import BNList from './BNList';
import BNFList from './BNFList';
import CFList from './CFList';


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
          <Typography>{children}</Typography>
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Directors & Officers" {...a11yProps(0)} />
          <Tab label="Business Names" {...a11yProps(1)} />
          <Tab label="Business Name Filings" {...a11yProps(2)} />
          <Tab label="Corporate Filings" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Button 
        startIcon={<Add/>}
        color="primary"
        sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px' }}
        >Add Director or Officer
      </Button>
        <DOList />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Button 
        startIcon={<Add/>}
        color="primary"
        sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px' }}
        >Add Business Name
      </Button>
        <BNList/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Button 
        startIcon={<Add/>}
        color="primary"
        sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px' }}

        >Add Business Filing
      </Button>
        <BNFList/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Button 
        startIcon={<Add/>}
        color="primary"
        sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '3px' }}

        >Add Corporate Filing
      </Button>
        <CFList/>
      </TabPanel>
    </Box>
  );
}