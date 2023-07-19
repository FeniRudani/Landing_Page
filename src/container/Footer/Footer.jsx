import React from 'react';
import {FiFacebook , FiTwitter, FiInstagram} from 'react-icons/fi';
import images from '../../constants/images';
import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
   <div className='app__footer-links'>
     <div className='app__footer-links_contact'>
       <h1 className='app__footer-headtext'>Contact Us</h1>
       <p className='p__opensans'>Sardar Patel Ring Road, Ahmedabad</p>
       <p className='p__opensans'>+91 8033542310</p>
       <p className='p__opensans'>+91 7889054210</p>
     </div>
     <div className='app__footer-links_logo'>
         {/* <img src={images.HurryCurryInd} alt="footer_logo" /> */}
         <h1 className='headtext__cormorant'>HurryCurry</h1>
         <p className='p__opensans'>The best way to find yourself is to lose yourself in the services of others</p>
         <img src={images.spoon} alt="spoon" className='spoon__image' style={{ marginTop: 15 }} />
         <div className='app__footer-links_icons'>
           <FiFacebook/>
           <FiTwitter/>
          <FiInstagram/>
         </div>
     </div>
     <div className='app__footer-links_work'>
       <h1 className='app__footer-headtext'>Working Hours</h1>
       <p className='p__opensans'>Monday - Friday:</p>
       <p className='p__opensans'>11:00 am - 11:00 pm</p>
       <p className='p__opensans'>Saturday - Sunday:</p>
       <p className='p__opensans'>11:00 am - 12:00 pm</p>

     </div>
   </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2020 HurryCurry. All Rights Reserved</p>

    </div>
  </div>
);


export default Footer;
