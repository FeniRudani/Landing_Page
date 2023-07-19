import React, { useState } from 'react';
import axios from 'axios';
import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => {
  const [msg, setMsg] = useState('')

   const submit=async(e)=> {
    e.preventDefault()

    try {
      await axios.post('http://localhost:3000/', {
        msg
      })
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title="Newsletter" />
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And Never Miss Latest Updates!</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <form action="POST">
          <input type="email" placeholder='Enter your e-mail address' onChange={(e) => { setMsg(e.target.value) }} />
            
          <button className='custom__button' type='submit' onClick={submit} value="Submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
