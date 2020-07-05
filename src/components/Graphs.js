import React, { useState,useEffect } from 'react';
import Cards from "../components/Cards"
import axios from "axios"
import { Line } from "react-chartjs-2";


const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  
 
  
  



function Graph () {

    const [latest, setLatest] = useState("")
  

    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v2/all")
        .then(res => { setLatest(res.data) })
        .catch(err => { console.log(err) })
            
    }, [])




    return (
        <div>
           <Cards />
           <Line data={data}  />
        </div>
    )
}

export default Graph 
