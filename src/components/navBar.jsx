import React, { useState } from 'react'
import {TbHome} from 'react-icons/tb'
import {GrContactInfo} from 'react-icons/gr'
import {VscBeaker} from 'react-icons/vsc'
// import {GrContact} from 'react-icons/gr'
import {MdDesignServices} from 'react-icons/md'
import '../styles/navBar.css'


const Spaceship = () => {

  const[activeNav, setActiveNav] = useState('#home')
  
  console.log(useState)
  return (
    <nav>
      <a href='#home' onClick={() => setActiveNav('#home')}className={activeNav === '#home' ? 'active' : ''}><TbHome /></a>
      <a href='#intro' onClick={() => setActiveNav('#intro')} className={activeNav === '#intro' ? 'active' : ''}><GrContactInfo /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdDesignServices /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><VscBeaker /></a>
      {/* <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><GrContact /></a> */}
    </nav>
  )
}
export default Spaceship








 