import React from 'react'
import backgroundVideo from '../video/(418) Marvel Intro _ 4k 60FPS - YouTube.mkv'






const home = () => {







  return (
    <div className='home'>
      

    <div className='overlay'></div>
    
    <video autoPlay muted loop id="background-video">
        <source src={backgroundVideo} type="video/mp4" /></video>

    <div className='content'>
      <h3>MarvelHub</h3>
      <p><span>Marvelize Your World</span></p>
      <p> Unlock the Marvel Universe's Endless Wonders! Dive into the Backstories of Iconic Characters, Amass a Collection of Rare Comics, Pay Tribute to the Visionary Creators, Immerse Yourself in Thrilling Events, and Embark on Epic Journeys through Unforgettable Stories.</p>
      {/* <button className='home-btn'>Dive In!</button> */}
    </div>

  </div>
  )
}

export default home
