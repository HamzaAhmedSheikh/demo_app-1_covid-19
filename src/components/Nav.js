import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button } from '@material-ui/core/';
import { Link }  from "react-router-dom";

import styles from '../App.module.css'


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

export default function Navbar() {
  const classes = useStyles();

  return (
   
    <div className={classes.root}>
      <AppBar position="static" className={styles.navbar}>
        <Toolbar>          
          <Typography variant="h6" className={classes.title}>
            <Link to="/"  style={{ color: "white",  textDecoration: "none"}}>
              <strong className={styles.text}>
                 Covid-19 Tracker
              </strong>  
            </Link> 
          </Typography>
          <Button color="inherit">
            <Link to="/"  style={{ color: "white",  textDecoration: "none"}}> Home </Link> </Button>
         <Button color="inherit">
             <Link to="/graph" style={{ color: "white",  textDecoration: "none"}}> Graphs </Link>  </Button>
          <Button color="inherit">
            <Link to="/symptom" style={{ color: "white",  textDecoration: "none"}}> Symptoms </Link>  </Button>
        </Toolbar>
      </AppBar>
     
    </div>

       
  );
}