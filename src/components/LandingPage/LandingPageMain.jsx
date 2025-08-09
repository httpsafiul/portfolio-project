import React from 'react';
import HeroMain from './Hero/HeroMain';
import IntroductionMain from './Introduction/IntroductionMain';
import EducationMain from './Education/EducationMain';
import TechStackMain from './TechStack/TechStackMain';
import LetsConnectMain from './LetsConnect/LetsConnectMain';

function LandingPageMain() {
  return (
    <>
        <HeroMain />
        <IntroductionMain />
        <EducationMain/>
        <TechStackMain/>
        <LetsConnectMain/>
    </>
  );
}

export default LandingPageMain;
