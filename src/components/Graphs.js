import React, { Component } from 'react';
import Cards from '../components1/Cards/Cards'
import Chart from '../components1/Charts/Chart'
import CountryPicker from '../components1/CountryPicker/CountryPicker'

import { fetchData } from '../api'

import styles from '../App.module.css'



class Graph extends Component {

  state = {
    data: {},    
    country: ''
  }

  async componentDidMount(){
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })
       
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
      
    this.setState({data: fetchedData, country: country })    
      
  }


  render(){

   const { data, country } = this.state

    return (
      <div className={styles.container}>
         <Cards data={ data } />    
         <CountryPicker handleCountryChange={this.handleCountryChange} />
         <Chart  data={ data }  country={ country }/>  

              
      </div>
  )
  }  
}

export default Graph 
