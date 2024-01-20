import React, { useEffect, useState } from 'react';
import '../styles/services.css';
import logo from '../images/appleLogo1.jpg';
import logo2 from '../images/figLogo.png';
import logo3 from '../images/github.png';
import logo4 from '../images/psLogo.png';
import logo5 from '../images/Midjourney.png';
import logo6 from '../images/postmanLogo.png';
import logo7 from '../images/new-asana-logo.png';
import Bars from './languagesDivs';

const Services = () => {
  const [animationActivated, setAnimationActivated] = useState(false);

  const SCROLL_THRESHOLD_START = 400;
  const SCROLL_THRESHOLD_END = 1250;

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
          <h4>Platforms I Use</h4>
          <div className='grid-items'>
            <img src={logo} alt="apple-logo" />
            <div className='grid-item2'>
              Mac OSX
            </div>
          </div>

          <div className='grid-items'>
            <img src={logo3} alt="github-logo" />
            <div className='grid-item2'>
              Github
            </div>
          </div>

          <div className='grid-items'>
            <img src={logo4} alt="adobe-logo" />
            <div className='grid-item2'>
              PhotoShop
            </div>
          </div>

          <div className='grid-items'> 
            <img src={logo2} alt="figma-logo" />
            <div className='grid-item2'>
            Figma
            </div>
          </div>

          <div className='grid-items'>
            <img src={logo5} alt="midjourney-logo" />
            <div className='grid-item2'>
              MidJourney
            </div>
          </div>

          <div className='grid-items'>
            <img src={logo6} alt="postman-logo" />
            <div className='grid-item2'>
              Postman
            </div>
          </div>

          <div className='grid-items'>
            <img src={logo7} alt="asana-logo" />
            <div className='grid-item2'>
              Asana
            </div>
          </div>
        </div>
        

        <div className='container2'>
          <h4>What I can do</h4> 

          <ul className='services-offered'>
            <li className='serv'>Creating/Managing Databases</li>
            <li className='serv'>Company Websites</li>
            <li className='serv Ai'>Art with Artificial Intelligence</li>
            <li className='serv'>Google API's</li>
            <li className='serv'>Databases</li>
            <li className='serv'>Agile Development</li>  
            <li className='serv'>UX/UI Design</li>
          </ul>
        </div>
        
        <div className={`container3 ${animationActivated ? 'active' : ''}`}> 
          <Bars />
        </div>

      </div>
    </section>
  )
};

export default Services; 
