import React, { useState, useEffect } from 'react';
import '../styles/languageDivs.css'

const Bars = () => {
  const [expanded, setExpanded] = useState(false);
  

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 350) {
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
      <h4 className='profeciency'>Language Profeciency</h4>

      <article className={`expanding-container ${expanded ? 'expanded' : ''}`}>
        <h5 className='html'>HTML</h5>
        <h5 className='javascript'>Javascript</h5>
        <h5 className='react'>React</h5>
        <h5 className='node'>Node.js</h5>
        <h5 className='css'>CSS/SCSS</h5>
        <h5 className='mongo'>MongoDB</h5>
        <h5 className='python'>Python</h5>
        <h5 className='post'>PostGre</h5> 
        <h5 className='heroku'>Heroku/Netlify</h5>
        <h5 className='nosql'>NoSQL</h5>
        <h5 className='express'>Express</h5>
      </article>
    </div>
  );
}

export default Bars;
