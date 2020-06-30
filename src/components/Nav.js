import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button } from '@material-ui/core/';
// import { Link,  BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Symptom from './Symptom'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",  

  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
   
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>          
          <Typography variant="h6" className={classes.title}>
             COVID-19 
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Graphs</Button>
          <Button color="inherit">
              Symptoms        
          </Button>
        </Toolbar>
      </AppBar>
     
    </div>

       
  );
}