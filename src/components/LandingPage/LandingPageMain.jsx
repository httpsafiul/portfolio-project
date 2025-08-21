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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* Always mount main content */}
      <Navbar active={"home"} />
      <HeroMain />
      <IntroductionMain />
      <EducationMain />
      <TechStackMain />
      <LetsConnectMain />

      {/* Overlay loading screen for first 4s */}
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "#f9f9f9",
            display: "flex",
            flexDirection: "column",
            zIndex: 9999, 
          }}
        >
          <LoadingScreen />
        </div>
      )}
    </div>
  );
}

export default LandingPageMain;
