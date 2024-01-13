import React, { useEffect, useState } from 'react';
import '../styles/services.css';
import logo from '../images/appleLogo1.jpg';
import logo2 from '../images/figLogo.png';
import logo3 from '../images/github.png';
import logo4 from '../images/psLogo.png';
import logo5 from '../images/Midjourney.png';
import logo6 from '../images/postmanLogo.png';
import Bars from './languagesDivs';

const Services = () => {
  const [animationActivated, setAnimationActivated] = useState(false);

  const SCROLL_THRESHOLD_START = 350;
  const SCROLL_THRESHOLD_END = 1050;

  const handleScroll = () => {
    if (window.scrollY > SCROLL_THRESHOLD_START && window.scrollY <= SCROLL_THRESHOLD_END) {
      setAnimationActivated(true);
    } else {
      setAnimationActivated(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="services">
      <h1 className='service-header'>Services Offered</h1>

      <div className="services-container">
        <div className={`container1 ${animationActivated ? 'active' : ''}`}>
          
          <h4 className='platforms'>Platforms I Use</h4>

          <div className="grid-item mac">
            <img src={logo} alt="apple-logo" />
            <h3>Mac OSX</h3>
          </div>

          <div className="grid-item github">
            <img src={logo3} alt="github-logo" />
            <h3>Github</h3>
          </div>

          <div className="grid-item adobe">
            <img src={logo4} alt="adobe-logo" />
            <h3>PhotoShop</h3>
          </div>

          <div className="grid-item figma"> 
            <img src={logo2} alt="figma-logo" />
            <h3>Figma</h3>
          </div>
 
          <div className="grid-item mid">
            <img src={logo5} alt="midjourney-logo" />
            <h3>MidJourney</h3>
          </div>

          <div className="grid-item postman">
            <img src={logo6} alt="postman-logo" />
            <h3>Postman</h3>
          </div>
        </div>

        <div className='container2'>
          <h4 className='contHeader'>What I can do</h4> 

          <ul className="services-offered">
            <li>Creating/Managing Databases</li>
            <li>Company Websites</li>
            <li className=''>Art with Artificial Intelligence</li>
            <li>Google API's</li>
            <li>Databases</li>
            <li>Agile Development</li>  
            <li>UX/UI Design</li>
          </ul>
        </div>
        {/* shows language profeciency bars when scrolled to */}
        <div className={`container3 ${animationActivated ? 'active' : ''}`}> 
     
          <Bars />
 
        </div>

      </div>
    </section>
  )
};

export default Services;
