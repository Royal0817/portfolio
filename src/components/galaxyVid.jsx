import React, { useState, useEffect } from 'react';
import '../styles/VidIntro.css';
import vid1 from '../images/941F95DA-8595-4469-8A79-2C8CE46A02DE.mp4'

function Galaxy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  return (
    <div className={`fade-in ${isVisible ? 'fade-in-visible' : ''}`}>
          <video autoPlay loop muted>
            <source src={vid1} type="video/mp4" />
              Your browser does not support the video tag.
        </video>
    </div> 
  );
}

export default Galaxy;