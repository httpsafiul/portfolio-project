import React from 'react';
import HeroMain from './Hero/HeroMain';
import IntroductionMain from './Introduction/IntroductionMain';
import EducationMain from './Education/EducationMain';
import TechStackMain from './TechStack/TechStackMain';
import LetsConnectMain from './LetsConnect/LetsConnectMain';
import Navbar from '../Navbar/Navbar';

function LandingPageMain() {
  return (
    <>
    <Navbar active={"home"}/>
        <HeroMain />
        <IntroductionMain />
        <EducationMain/>
        <TechStackMain/>
        <LetsConnectMain/>
    </>
  );
}

export default LandingPageMain;
