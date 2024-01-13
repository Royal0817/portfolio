import React from 'react'
import '../styles/Homepage.css'
import Occupations from './occupations'
import Galaxy from './galaxyVid'
import Social from './social'


const Homepage = () => {
  return (
    <section id='home'>

      <div className='home1'>
        <Galaxy />
      </div>

      <div className="home2">
       
          <div className="header">
            Hi, my name is Luis
          </div>

          <div className='break1'>
            <Occupations />
          </div> 

          <div className="break2">
            Building user-friendly solutions
          </div>

          <div className="break3">
            to complex problems for the web  
          </div>

          <div className="classname socialBar">

          <Social />
          </div>


      </div>

    </section>
  )
} 

export default Homepage