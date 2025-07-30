// App.jsx
import React from 'react';
import GlobalStyle from './GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import HeroMain from './components/LandingPage/Hero/HeroMain';
import IntroductionMain from './components/LandingPage/Introduction/IntroductionMain';
import EducationMain from './components/LandingPage/Education/EducationMain';
import TechStackMain from './components/LandingPage/TechStack/TechStackMain';
import LetsConnectMain from './components/LandingPage/LetsConnect/LetsConnectMain';
import CopyrightSection from './components/Copyright/CopyrightSection';

function App() {
  return (
    <>
      <Navbar />
      <GlobalStyle>
        <HeroMain />
        <IntroductionMain />
        <EducationMain/>
        <TechStackMain/>
        <LetsConnectMain/>
      </GlobalStyle>
      <CopyrightSection/>
    </>
  );
}

export default App;
