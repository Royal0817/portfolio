import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.css';
import Resume from './resume';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        'template_vfunysh', 
        form.current,
        'IcyKnpon5aBsuBGRI'
      );
      console.log(result.text);
      setMessage('Email sent!');
      form.current.reset();
    } catch (error) {
      console.error(error);
      setError('Error sending email. Please try again later.');
    }
  };

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage('');
      }, 3000);

      return () => clearTimeout(timeout); 
    }
  }, [message]);

 
  return (
    <section id='contact'>
      <h1 className='contact_header'>Send an email</h1>

      <div className='contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <h4 className='email'>Contact me at Martinezl27737@gmail.com</h4>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input className='top' type='text' id='name' name='name' placeholder='Name' required />
          <input className='bottom' type='email' id='email' name='email' placeholder='Your Email' required />
          <textarea id='message' name='message' cols='30' rows='10' placeholder='Click here to write a message' required />

          <div>
          {message && <p className='success-message fade-out'>{message}</p>}
          {error && <p className='error-message'>{error}</p>} 
          </div>

          <div className='the-buttons'>
            <Resume />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
  