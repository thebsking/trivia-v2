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
    return axios.get('/api/locations')
      .then(res => {
        setLocArray(res.data)
        console.log(locArray)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <UserTopBar />
      <div id='locs-div'>
        {locArray.map(x => {
          return (
            <Card variant="outlined" sx={{ maxWidth: 500 }} className='loc-card'>
              <CardMedia
                component='img'
                alt='bar photo'
                height='200'
                image={process.env.PUBLIC_URL + x.image}
              />
              <CardContent>
                <h2>{x.weekday}</h2>
                <h3>{x.name} - {x.start}</h3>
              </CardContent>
            </Card>)
        })}
      </div>
    </>
  )
}

export default Locations;