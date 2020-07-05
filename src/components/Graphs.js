import React from 'react';
import Cards from "../components/Cards"
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
      },
      {
        label: "Thrid dataset",
        data: [30, 20, 35, 45, 50, 70],
        fill: false,
        borderColor: "green"
      },
      {
        label: "Thrid dataset",
        data: [30, 20, 35, 45, 50, 70],
        fill: false,
        borderColor: "green"
      }
    ]
  };
  
 
  
  



function Graph () {

    

    return (
        <div>
           <Cards />
           <Line data={data}  />
        </div>
    )
}

export default Graph 
