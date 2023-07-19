import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import {  FooterOverlay,Navbar, Newsletter } from './components';
import './App.css';

const App = () => (
  <div className='bg'>
    <Navbar />
    <Header/>
    <AboutUs/>
    <SpecialMenu/>
    <Chef/>
    <Intro/>
    <Laurels/>
    <Gallery/>
    <FindUs/>
 
   <Footer/>
  </div>
);

export default App;
