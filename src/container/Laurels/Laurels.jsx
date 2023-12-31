import React from 'react';
import images from '../../constants/images';
import data from '../../constants/data';
import './Laurels.css';
import { SubHeading } from '../../components';


const AwardCard = ({award : {imgUrl , title , subtitle}}) =>(
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="" />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{ color :'#DCCA87'}}>{title}</p>
      <p className='p__cormorant' >{subtitle}</p>
      
    </div>
  </div>
)


const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title="Awards & Recognition"/>
      <h1 className='headtext_cormorant' style={{color : '#daa520'}}>Our Laurels</h1>
      <div className='app__laurels_awards'>
        {data.awards.map((award) => <AwardCard award = {award} key = {award.title}/> )}
      </div>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.awardsec} alt="" />
      </div>
    
  </div>
);

export default Laurels;
