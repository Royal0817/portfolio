import React from 'react'
import '../styles/Footer.css'
import mushVid from '../images/StoryZ_Video.mp4'
import Contact from './contact'

const Footer = () => {
  return (
    <section id='experience'>

      <h1 className='experience_header'>Get in Touch</h1>
      
      <div className="container-experience">
        <div className='mush-content'>
          <h2>Let's build your app</h2>
          <a href="https://royal0817.github.io/Project-1/">
          <video autoPlay loop muted className='video-mushroom'>
            <source src={mushVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>    
          </a>
        </div>
        <Contact />
      </div>
    </section> 
  )
} 

export default Footer