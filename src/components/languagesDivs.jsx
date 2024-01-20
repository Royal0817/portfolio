import React, { useState, useEffect } from 'react';
import '../styles/languageDivs.css'

const Bars = () => {
  const [expanded, setExpanded] = useState(false);
  

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
    <div className="bar-holder">
      {/* <h4>Language Profeciency</h4> */}

          <ul className='viz'>
            <li className='novice lvl'>Novice</li>
            <li className='intermediate lvl' >Intermediate</li>
            <li className='proficient lvl'>Proficient</li>
            <li className='expert lvl'>Advaced</li>
          </ul>
      <section className={`expanding-container ${expanded ? 'expanded' : ''}`}>

        <ul className='percent'>
          <li className='html lang'>HTML</li>
          <li className='javascript lang'>Javascript</li>
          <li className='react lang'>React</li>
          <li className='node lang'>Node.js</li>
          <li className='css lang'>CSS/SCSS</li>
          <li className='mongo lang'>MongoDB</li>
          <li className='python lang'>Python</li>
          <li className='heroku lang'>GitHub-Pages/Netlify/Heroku</li>
          <li className='post lang'>PostGre</li> 
          <li className='nosql lang'>NoSQL</li>
          <li className='express lang'>Express</li>
        </ul>
      </section>
    </div>
  );
}

export default Bars;
