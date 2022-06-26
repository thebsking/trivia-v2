import React from 'react';
import UserTopBar from '../components/UserTopBar';

export default function Home(){

  return ( 
    <>
    <UserTopBar />
    <div id='main' className='center-div'>
      <h1>Alan's Trivia Challenge</h1>
      <img className='logo' src={process.env.PUBLIC_URL+'alogo-1.svg'} alt='placeholder logo'></img>
      <p>This is where I will put information about the game and what not</p>
    </div>  
    </>
  )
}