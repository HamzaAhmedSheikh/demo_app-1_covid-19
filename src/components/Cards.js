import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
// import CountUp from 'react-countup'
import axios from "axios"

import 'bootstrap/dist/css/bootstrap.min.css'

function Cards () {

  const [latest, setLatest] = useState("")

    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v2/all")
        .then(res => { setLatest(res.data) })
        .catch(err => { console.log(err) })
            
    }, [])

    const date = new Date(parseInt(latest.updated));
    const lastUpdated = date.toString()

    return(
        <CardDeck style={{ margin: "20px" }}>
        <Card bg="secondary" text="white" className="text-center">          
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>  {latest.cases }   </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="white" className="text-center">          
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>  {latest.deaths}   </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text="white" className="text-center">          
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>  {latest.recovered}  </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardDeck>  
    )

}

export default Cards;