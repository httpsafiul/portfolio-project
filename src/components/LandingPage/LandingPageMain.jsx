import React, { useState, useEffect } from 'react';
import HeroMain from './Hero/HeroMain';
import IntroductionMain from './Introduction/IntroductionMain';
import EducationMain from './Education/EducationMain';
import TechStackMain from './TechStack/TechStackMain';
import LetsConnectMain from './LetsConnect/LetsConnectMain';
import Navbar from '../Navbar/Navbar';
import LoadingScreen from './LoadingScreen';

function LandingPageMain() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a 4s timer, then hide the loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar active={"home"} />
          <HeroMain />
          <IntroductionMain />
          <EducationMain />
          <TechStackMain />
          <LetsConnectMain />
        </>
      )}
    </>
  );
}

export default LandingPageMain;
