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
import LandingPageMain from './components/LandingPage/LandingPageMain';
import ProjectsMain from './components/ProjectsPage/ProjectsMain';
import AchievementsMain from './components/AchievementsPage/AchievementsMain';

function App() {
  return (
    <>
      <Navbar />
      <GlobalStyle>
        {/* <LandingPageMain/> */}
        {/* <ProjectsMain/> */}
        <AchievementsMain/>
      </GlobalStyle>
      <CopyrightSection/>
    </>
  );
}

export default App;
