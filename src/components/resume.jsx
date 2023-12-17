import React from 'react';
import CV from '../images/Resume_PDF_format.pdf'

const openPdfInNewTab = () => {
  window.open(CV, '_blank');
};

const Resume = () => {
  return (
    <div className='btn-container'>
      <button type='submit' className='btn'> 
        <span>Send Email</span> 
      </button>

      <button onClick={openPdfInNewTab} className='btn'>
        <span>Open Resume in browser</span>
      </button>
    </div>
  );
};

export default Resume;

 