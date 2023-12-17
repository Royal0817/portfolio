import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'


const Social = () => {
  return (
    <div className="social">
        <a href='https://www.linkedin.com/in/luis-martinez-4692181b7/' target='blank'><FiLinkedin /></a>
        <a href='https://github.com/Royal0817' target='blank'><FaGithub /></a>
        <a href='#contact' className='scroll_down'>Contact   <br /> <br /> Info  </a>
    </div>
  )
}

export default Social 