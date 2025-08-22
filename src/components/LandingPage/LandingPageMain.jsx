import React, { Suspense } from 'react';
// import HeroMain from './Hero/HeroMain';
const HeroMain = React.lazy(()=>import('./Hero/HeroMain'))
import IntroductionMain from './Introduction/IntroductionMain';
import EducationMain from './Education/EducationMain';
import TechStackMain from './TechStack/TechStackMain';
import LetsConnectMain from './LetsConnect/LetsConnectMain';
import Navbar from '../Navbar/Navbar';
import LoadingScreen from './LazyLoadingComponents/LoadingScreen';

function LandingPageMain() {
  return (
    <>
    <Navbar active={"home"}/>
    <Suspense fallback={
     <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "#f9f9f9",
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            flexDirection: "column",
            zIndex: 9999, 
          }}
        >
          <LoadingScreen />
        </div> 
    }>
        <HeroMain/>
    </Suspense>
        {/* <HeroMain /> */}
        <IntroductionMain />
        <EducationMain/>
        <TechStackMain/>
        <LetsConnectMain/>
    </>
  );
}

export default LandingPageMain;
