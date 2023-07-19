import React from 'react';
import {images} from "../../constants";
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus  flex__center section__padding' id='about'>
    {/* <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="gletter" />
    </div> */}

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__coromorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>
        Welcome to Genricth, where culinary excellence meets unparalleled dining experience.
        At Genricth, we pride ourselves on delivering a delightful fusion of flavors, ambiance, 
        and exceptional service.
       
       </p>
       <button type="button" className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__coromorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>
        Our dedicated team of talented chefs crafts each dish with 
        passion and creativity, using the finest and freshest ingredients sourced from local producers.
        The Gericth has something for everyone. 
        
       </p>
       <button type="button" className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
