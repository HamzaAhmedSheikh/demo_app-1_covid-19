// import React, { useEffect, useState } from 'react'
// import { Card, CardContent, Typography, Grid  } from '@material-ui/core'
// import NumberFormat from 'react-number-format';


// function Cards () {

//   const [latest, setLatest] = useState("")
  

//      useEffect(() => {
//       async function fetchGlobalData(){
//         const apiResponse = await fetch("https://disease.sh/v3/covid-19/all")
//         const dataFromAPI = await apiResponse.json()
//           setLatest(dataFromAPI)
//       } 

//          fetchGlobalData()      
                    
//     }, [])

//     const date = new Date(parseInt(latest.updated));
//     const lastUpdated = date.toString()

//     return (
//       <div className="container">
//        <Grid container spacing={3} justify="center">
//         <Grid item component={Card} xs={12} md={3} className="card">
//          <CardContent>
//            <Typography color="textSecondary" gutterBottom>  Infected  </Typography>
//             <Typography variant="h5">
//               <NumberFormat value={latest.cases}
//                             displayType={'text'}
//                             thousandSeparator={true} />
//             </Typography>
//             <Typography color="textSecondary">
//                  {new Date(lastUpdated).toDateString()} 
//             </Typography>
//             <Typography variant="body2"> Number of active cases of COVID-19 </Typography>
//          </CardContent>
//        </Grid>

//         <Grid item component={Card} xs={12} md={3} className="card1">
//           <CardContent>
//             <Typography color="textSecondary" gutterBottom>  Recovered  </Typography>
//             <Typography variant="h5">
//               <NumberFormat value={latest.recovered}
//                             displayType={'text'}
//                             thousandSeparator={true} />
//             </Typography>
//             <Typography color="textSecondary"> {new Date(lastUpdated).toDateString()} </Typography>
//             <Typography variant="body2"> Number of recoveries from COVID-19 </Typography>
//           </CardContent>
//         </Grid>

//           <Grid item component={Card} xs={12} md={3} className="card2">
//            <CardContent>
//              <Typography color="textSecondary" gutterBottom>  Deaths  </Typography>
//              <Typography variant="h5">
//                <NumberFormat value={latest.deaths}
//                              displayType={'text'}
//                              thousandSeparator={true} />
//              </Typography>
//               <Typography color="textSecondary"> {new Date(lastUpdated).toDateString()} </Typography>
//               <Typography variant="body2"> Number of death caused by COVID-19 </Typography>
//             </CardContent>
//           </Grid>

          
//           </Grid>
//           </div>
          
//     )

// }

// export default Cards;









