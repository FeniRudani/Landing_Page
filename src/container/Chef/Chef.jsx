import React from 'react';
import images from '../../constants/images'
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className=' app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.ChefW} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>Our Values</h1>
      <div className='app__chef-content'>
         <div className='app__chef-content_quote'>
           <img src={images.quote} alt="quote" />
             <p className='p__opensans'>At our restaurant, we take immense pride in crafting culinary experiences that are truly gourmet.
           </p> 
         </div>
         <p className='p__opensans'> We source only the finest artisan ingredients, carefully selected from local farms to ensure freshness and flavor. Indulge in 
          our Michelin-starred creations, where traditional flavors blend harmoniously with modern twists. 
          Come and savor the delectable and tantalizing flavors that our talented culinary team brings to your table. It's an epicurean 
          adventure you don't want to miss.</p>
        <div className='app__chef-sign'>
          <p>Abir Akash</p>
          <p className='p__opensans'>Chef & Founder</p>
          
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
