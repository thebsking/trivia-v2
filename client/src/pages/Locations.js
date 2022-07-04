import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia } from '@mui/material';
import UserTopBar from "../components/UserTopBar";
import axios from 'axios';

function Locations() {

  const [locArray, setLocArray] = useState([]);

    useEffect(() => {
      renderLocations();
    }, [])

    function renderLocations() {
      axios.get('/api/locations')
        .then(res => {
          setLocArray([...res.data])
          console.log(locArray)
        })
        .catch(err => console.log(err))
    }

  return (
    <>
      <UserTopBar />
      <div id="locs-div">
        <Card variant="outlined" sx={{ maxWidth: 500 }} className='loc-card'>
          <CardMedia
            component='img'
            alt='bar photo'
            height='200'
            image={process.env.PUBLIC_URL + "byrnes.jpeg"}
          />
          <CardContent>
            <h2>Monday</h2>
            <h3>Byrne's Pub - 7:00pm</h3>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ maxWidth: 500 }} className='loc-card'>
          <h2>Tuesday</h2>
          <h3>TBD</h3>
        </Card>
        <Card variant="outlined" sx={{ maxWidth: 500 }} className='loc-card'>
          <CardMedia
            component='img'
            alt='bar photo'
            height='200'
            image={process.env.PUBLIC_URL + "planks.webp"}
          />
          <CardContent>
            <h2>Wednesday</h2>
            <h3>Plank's Bier Garten - 7:30pm</h3>
          </CardContent>
        </Card>
      </div >
    </>
  )
}

export default Locations;