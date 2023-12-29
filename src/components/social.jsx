import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'
import { GrContact } from "react-icons/gr";


const Social = () => {
  return (
    <div className="social">
        <a className='socialIcon' href='https://www.linkedin.com/in/luis-martinez-4692181b7/' target='blank'><FiLinkedin /></a>
        <a className='socialIcon' href='https://github.com/Royal0817' target='blank'><FaGithub /></a>
        <a href='#contact' className='scroll_down socialIcon'><GrContact /></a>
    </div>
  )
}

export default Social 