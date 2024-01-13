import React from 'react';
import CV from '../images/Resume_1:2:24.jpg'

const openPdfInNewTab = () => {
  window.open(CV, '_blank');
};

const Resume = () => {
  return (
    <div className='btn-container'>
      <button type='submit' className='btn'> 
        <span>Send Email</span> 
      </button>

      <button type='button' onClick={openPdfInNewTab} className='btn'>
        <span>Open Resume in browser</span>
      </button>
    </div>
  );
};

export default Resume;

 