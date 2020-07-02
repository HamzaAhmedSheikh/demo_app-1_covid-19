import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Nav'
import Home from './components/Home'
import Graph from './components/Graphs'
import Symptom from './components/Symptom'

function App() {  

  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/symptom" component={Symptom} />
        <Route path="/graph" component={Graph} />        
      </Switch>   
    </div>      
  </Router> 
          
  );
}

export default App;
