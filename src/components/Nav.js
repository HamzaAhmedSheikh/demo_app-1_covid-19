import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button } from '@material-ui/core/';
import { Link }  from "react-router-dom";

// import logo

import Logo from '../img/image.png'





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
      <AppBar position="static">
        <Toolbar>          
          <Typography variant="h6" className={classes.title}>
            <Link to="/"  style={{ color: "white",  textDecoration: "none"}}>
               <img src={Logo} alt="the covid-19 tracker app logo" />
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