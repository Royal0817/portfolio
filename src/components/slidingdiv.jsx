import React, { useState, useEffect } from 'react';
import '../styles/SlidingDiv.css';

const SlidingDiv = () => {
    window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  });


  const [shouldSlideIn, setShouldSlideIn] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showThreshold = 183;
    const hideThreshold = 1000;

    if (scrollY > showThreshold && scrollY <= hideThreshold) {
      setShouldSlideIn(true);
    } else {
      setShouldSlideIn(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sliding-div ${shouldSlideIn ? 'slide-in' : ''}`}>
      Who am I?
    </div>
  ); 
};

export default SlidingDiv;
