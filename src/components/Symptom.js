import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
       <p> Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
       <p> Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. </p>

      <hr /> 

      <p> HOW IT SPREADS </p>
      <p>The virus that causes COVID-19 is mainly transmitted through droplets generated
         when an infected person coughs, sneezes, or exhales.
         These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.
     </p>
     <p>You can be infected by breathing in the virus if you are within close proximity
        of someone who has COVID-19, or by touching a contaminated surface and
        then your eyes, nose or mouth.  
     </p>

     <p> Source: 
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
          rel="noopener noreferrer"
          target="_blank">
            who.int
        </a>    
     </p>



      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}