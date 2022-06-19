import React from 'react';
import UserTopBar from '../components/UserTopBar';

export default function Home(){

  const date = new Date();
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]

  return ( 
    <>
    <UserTopBar />
    <div id='main' className='center-div'>
      <h1>Alan's Trivia Challenge</h1>
      <p> Today is {month + 1}/{day}/{year} </p>
    </div>  
    </>
  )
}