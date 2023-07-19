import React from 'react';
import images from '../../constants/images';
import data from '../../constants/data';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding ' id = "contact">
    <div className='app__wrapper_info'>
        <SubHeading title="Contact"/>
        <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}></h1>
     <div className='app__wrapper-content'>
      <p className='p__opensans'> Discover a unique culinary heaven </p>
      <p className='p__cormorant' style={{color: '#DCCA87', margin: '2rem 0'}}> Sardar Patel Ring Road, Chandkheda,Ahmedabad </p>
      <p className='p__opensans' style={{color: '#DCCA87', margin: '2rem 0'}}> Opening Hours </p>
       <p className='p__opensans'> Mon - Fri : 11:00 am - 11:00 pm</p>
       <p className='p__opensans'> Sat - Sun : 11:00 am - 12:00 am</p>
      </div>    
       <div>
           <button className='custom__button' style={{marginTop : '2rem'}}>Visit Us</button>
       </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.contact} alt="findus" />
    </div>
  </div>

);

export default FindUs;
