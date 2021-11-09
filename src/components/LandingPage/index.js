import React,{useState,useEffect} from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn
  } from './landingElement';

const Landing = () => {
  const [isOpen,setIsOpen]=useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
    return (
        <div>
            <HeroContainer>
              
     <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>بهترین خدمات</HeroH1>
          <HeroP>تحویل در کمترین زمان</HeroP>
          <HeroBtn>همین حالا سفارش دهید</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
            

            
        </div>
    )
}

export default Landing
