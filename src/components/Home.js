import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Card, CardContent, Typography, Grid, CardMedia } from '@material-ui/core'
import NumberFormat from 'react-number-format';

import "../css/Home.css"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
       maxWidth: 500,            
      textAlign: "center",
      margin: 30,            
      display: "inline-block",       
    },
    img: {
        height: 200,        
    }

  }); 

function Home() {
    

    const [latest, setLatest] = useState([])
    const [results, setResults] = useState([])

    useEffect(() => {
        axios.all([
            axios.get("https://corona.lmao.ninja/v2/all"),
            axios.get("https://corona.lmao.ninja/v2/countries"),
        ])
            .then(responseArr => {
                setLatest(responseArr[0].data)
                setResults(responseArr[1].data)
            })
            .catch(err => { console.log(err) })

    }, [])



    const date = new Date(parseInt(latest.updated));
    const lastUpdated = date.toString()
    let classes = useStyles();
    const countries = results.map((data, i) => {
       
        return (

            <Card className={classes.root}>
      
        <CardMedia
          component="img"
          alt="Countries"
          height="140"
          image={data.countryInfo.flag} 
          className={classes.img}         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
               <strong> {data.country} </strong> 
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
                Cases {data.cases}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
                Deaths {data.deaths}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
                Recovered {data.recovered}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
                Today's cases {data.todayCases}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
                Today's deaths {data.todayDeaths}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
                Active {data.active}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
                Critical {data.critical}
          </Typography>
        </CardContent>
      
    </Card>
    //      <div className="container" key={i}>             
    //     <Grid container spacing={3} justify="center" >
    //      <Grid item  xs={12} md={3}>
    //       <CardContent>
    //        <Typography color="textSecondary" gutterBottom> <img src={data.countryInfo.flag} alt="countries"/>  </Typography>
    //         <Typography variant="h5">   
    //           <h5> {data.country} </h5>            
    //           <h4> Cases {data.cases} </h4>        
    //           <h4> Deaths {data.deaths} </h4>  
    //           <h4> Recovered {data.recovered }</h4> 
    //           <h4> Today's cases {data.todayCases} </h4>
    //           <h4> Today's deaths {data.todayDeaths} </h4>
    //           <h4> Active {data.active}</h4>
    //           <h4> Critical {data.critical}</h4>           
    //         </Typography>
    //       </CardContent>
    //      </Grid>
    //     </Grid>
    // </div>
   )
 })



    return (
        <div className="container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className="card">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>  Infected  </Typography>
                        <Typography variant="h5">

                            <NumberFormat value={latest.cases} displayType={'text'} thousandSeparator={true} />

                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdated).toDateString()}   </Typography>
                        <Typography variant="body2"> Number of active cases of COVID-19 </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className="card1">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>  Recovered  </Typography>
                        <Typography variant="h5">
                            <NumberFormat value={latest.recovered} displayType={'text'} thousandSeparator={true} />



                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdated).toDateString()} </Typography>
                        <Typography variant="body2"> Number of recoveries from COVID-19 </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className="card2">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>  Deaths  </Typography>
                        <Typography variant="h5">
                            <NumberFormat value={latest.deaths} displayType={'text'} thousandSeparator={true} />



                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdated).toDateString()} </Typography>
                        <Typography variant="body2"> Number of death caused by COVID-19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>

              {countries}
               
        </div>

    )
}


export default Home;