import React from 'react';
import {motion} from 'framer-motion';

import './Header.css';
import {images} from '../../constants';
import { SubHeading } from '../../components';
const Header = () => (
  <div className='app__header app__wrapper secion__padding app__bg3' id='home'>
    <motion.div 
      initial= {{opacity: 0}}
      animate = {{opacity: 1}}
      transition={{duration:.5, delay:.3 }}
      exit = {{opacity:0}}
    className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
       <h1 className='headtext__cormorant'>Elevate Your Tastebuds to New Heights</h1>
      <p className='p__opensans' style={{ margin :'2rem 0'}}>Indulge your taste buds in a culinary journey at our restaurant, where exquisite flavors, warm ambiance, and attentive service come together for an unforgettable dining experience</p>
      <button type = "button" className='custom__button'>Menu</button>
    </motion.div>
 

  <div className='app__wrapper_img'>
      <img src={images.headerimg} alt="header img" />
  </div>

</div>  
);

export default Header;
