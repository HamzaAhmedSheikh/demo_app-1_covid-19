import React, { Component } from 'react';
import Cards from '../components1/Cards/Cards'
import Chart from '../components1/Charts/Chart'
import CountryPicker from '../components1/CountryPicker/CountryPicker'

import { fetchData } from '../api'

import styles from '../App.module.css'



class Graph extends Component {

  state = {
    data: {},    
  }

  async componentDidMount(){
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })
       
  }


  render(){

   const { data } = this.state

    return (
      <div className={styles.container}>
         <Cards data={ data } />    
         <CountryPicker />
         <Chart />       
      </div>
  )
  }  
}

export default Graph 
