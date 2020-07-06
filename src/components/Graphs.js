import React from 'react';
import Cards from '../components1/Cards/Cards'
import Chart from '../components1/Charts/Chart'
import CountryPicker from '../components1/CountryPicker/CountryPicker'

import styles from '../App.module.css'



function Graph () {   

    return (
        <div className={styles.container}>
           <Cards />    
           <CountryPicker />
           <Chart />       
        </div>
    )
}

export default Graph 
