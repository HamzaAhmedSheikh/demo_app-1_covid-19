import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Tabs, Tab, Typography, Box} from '@material-ui/core/';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import "../../src/App.css"

import Doctor from "../img/doctor.svg";
import Distance from "../img/distance.svg"
import CleanHand from "../img/wash-hand.svg"
import Home from "../img/home.svg"
import Call from "../img/call.svg"
import Workout from "../img/workout.svg"
import Food from "../img/food.svg"



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
    margin: 20,
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
          <Tab label="Symptoms" {...a11yProps(1)} />
          <Tab label="Prevention" {...a11yProps(2)} />
          <Tab label="Treatments" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
       <p> Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
       <p> Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. </p>

      <hr /> 

      <p> HOW IT SPREADS </p>
      <p>
        The virus that causes COVID-19 is mainly transmitted through droplets generated
        when an infected person coughs, sneezes, or exhales.
        These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.
     </p>
     <p>
       You can be infected by breathing in the virus if you are within close proximity
       of someone who has COVID-19, or by touching a contaminated surface and
       then your eyes, nose or mouth.  
     </p>

     <p> Source:{" "}
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
          rel="noopener noreferrer"
          target="_blank">
            who.int
        </a>    
     </p>



      </TabPanel>
      <TabPanel value={value} index={1}>
        <p>
          COVID-19 affects different people in different ways.
          Most infected people will develop mild to moderate illness and recover without hospitalization.
        </p>
        <hr />

        <p>Most common symptoms:</p>
        <ul>
          <li>fever</li>
          <li>dry cough</li>
          <li>tiredness</li>
        </ul>

        <p>Less common symptoms:</p>
        <ul>
          <li>aches and pains</li>
          <li>sore throat</li>
          <li>diarrhoea</li>
          <li>conjunctivitis</li>
          <li>headache</li>
          <li>loss of taste or smell</li>
          <li>a rash on skin, or discolouration of fingers or toes</li>
        </ul>

        <p>Serious symptoms:</p>
        <ul>
          <li>difficulty breathing or shortness of breath</li>
          <li>chest pain or pressure</li>
          <li>loss of speech or movement</li>
        </ul>

        <p>
          Seek immediate medical attention if you have serious symptoms.
          Always call before visiting your doctor or health facility.
        </p>

        <img src={Doctor} style={{ height: 350 }} alt="doctor"/>

        <p>
          People with mild symptoms who are otherwise healthy should manage
          their symptoms at home.
        </p>

        <p>
          On average it takes 5–6 days from when someone is infected with the
          virus for symptoms to show, however it can take up to 14 days.
        </p>

        <p>
          Source:{" "}
          <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms"
             rel="noopener noreferrer"
             target="_blank"          
          >
              who.int
          </a>
        </p>

      </TabPanel>
      <TabPanel value={value} index={2}>
      <p>
        Protect yourself and others around you by knowing the facts and
        taking appropriate precautions. Follow advice provided by your local
        public health agency.
      </p>
      <hr />

      <p>To prevent the spread of COVID-19:</p>  
      <ul>
       <li className="clean">
        Clean your hands often. Use soap and water, or an alcohol-based  hand rub. 
       </li>  
       <img src={CleanHand} style={{ height: 450 }} alt="hand-wash"/>

       <li className="distance"> 
          Maintain a safe distance from anyone who is coughing or sneezing.          
       </li>

       <img src={Distance} style={{ height: 350 }} alt="distance" className="img" />

       <li>Don’t touch your eyes, nose or mouth.</li>

       <li>
         Cover your nose and mouth with your bent elbow or a tissue when
         you cough or sneeze.
       </li>

        <li>Stay home if you feel unwell.</li>

        <li>
          If you have a fever, cough and difficulty breathing, seek medical
          attention. Call in advance.
        </li>

        <li>Follow the directions of your local health authority.</li>
      </ul>

      <p>
        Avoiding unneeded visits to medical facilities allows healthcare
        systems to operate more effectively, therefore protecting you and
        others.
      </p>

      <p>
        Source:{" "}
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
             rel="noopener noreferrer"
             target="_blank"
        >
              who.int
            </a>
      </p>  

      </TabPanel>
      <TabPanel value={value} index={3}>
        <p>
          To date, there are no specific vaccines or medicines for COVID-19.
          Treatments are under investigation, and will be tested through
          clinical trials. World Health Organization  
        </p>
        <hr />
        <p>Self-care</p>
        <p>
          If you feel sick you should rest, drink plenty of fluid, and eat
          nutritious food. Stay in a separate room from other family members,
          and use a dedicated bathroom if possible. Clean and disinfect
          frequently touched surfaces.
        </p>
        <p>
          Everyone should keep a healthy lifestyle at home. Maintain a healthy
          diet, sleep, stay active, and make social contact with loved ones
          through the phone or internet. Children need extra love and
          attention from adults during difficult times. Keep to regular
          routines and schedules as much as possible.
        </p>

        <img src={Home} style={{ height: 150 }} alt="stay home"/>
        <img src={Call} style={{ height: 250 }} alt="call"/>
        <img src={Workout} style={{ height: 250}} alt="daily workout" />
        <img src={Food} style={{ height: 200 }} alt="stay healthy"/>

        <p>
          It is normal to feel sad, stressed, or confused during a crisis.
          Talking to people you trust, such as friends and family, can help.
          If you feel overwhelmed, talk to a health worker or counsellor.
        </p>

        <p>Medical treatments</p>
        <p>
          If you have mild symptoms and are otherwise healthy, self-isolate
          and contact your medical provider or a COVID-19 information line for advice.
        </p>
        <p>
          Seek medical care if you have a fever, a cough, and difficulty
          breathing. Call in advance.
        </p>
        <p>
          Source:{" "}  
         <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=protect"
              rel="noopener noreferrer"
              target="_blank"              
          >
              who.int
         </a>        
      
          
        </p>
      </TabPanel>
    </div>
  );
}