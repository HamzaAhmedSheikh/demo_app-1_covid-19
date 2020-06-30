import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import NumberFormat from 'react-number-format';

import "../css/Home.css"

function Home() {

const [latest, setLatest] = useState("")

useEffect(() => {
    axios.get("https://corona.lmao.ninja/v2/all")
    .then(res => { setLatest(res.data) })
    .catch(err => { console.log(err) })
        
}, [])

const date = new Date(parseInt(latest.updated));
const lastUpdated = date.toString()

    // if(!confirmed) {

    //    return 'Loading....';   
    // }

 

  return (
      <div className="container">
        <Grid container spacing={3} justify="center">
          <Grid item component={Card} xs={12} md={3} className="card">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>  Infected  </Typography>
              <Typography variant="h5"> 

              <NumberFormat value={latest.cases} displayType={'text'} thousandSeparator={true} />
                                                  
              </Typography>
              <Typography color="textSecondary"> { new Date(lastUpdated).toDateString() }   </Typography>
              <Typography variant="body2"> Number of active cases of COVID-19 </Typography>
            </CardContent> 
          </Grid>  

          <Grid item component={Card} xs={12} md={3} className="card1">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>  Recovered  </Typography>
              <Typography variant="h5">
                <NumberFormat value={latest.recovered} displayType={'text'} thousandSeparator={true} />                 
                    
                          
                 
              </Typography>
              <Typography color="textSecondary"> { new Date(lastUpdated).toDateString() } </Typography>
              <Typography variant="body2"> Number of recoveries from COVID-19 </Typography>
            </CardContent> 
          </Grid>  

          <Grid item component={Card} xs={12} md={3} className="card2">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>  Deaths  </Typography>
              <Typography variant="h5">
              <NumberFormat value={latest.deaths} displayType={'text'} thousandSeparator={true} />

                  
                               
              </Typography>
              <Typography color="textSecondary"> { new Date(lastUpdated).toDateString() } </Typography>
              <Typography variant="body2"> Number of death caused by COVID-19 </Typography>
            </CardContent> 
          </Grid>  
        </Grid>     
      </div>
    
  )
}


export default Home;