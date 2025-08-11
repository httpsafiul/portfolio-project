// App.jsx
import React from 'react';
import GlobalStyle from './GlobalStyles';
import CopyrightSection from './components/Copyright/CopyrightSection';
import LandingPageMain from './components/LandingPage/LandingPageMain';
import ProjectsMain from './components/ProjectsPage/ProjectsMain';
import AchievementsMain from './components/AchievementsPage/AchievementsMain';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <GlobalStyle>
     <Router>
        <Routes>
          Lazy-loaded auth module
          <Route path="/" element={<LandingPageMain/>} />
          <Route path="/home" element={<LandingPageMain/>} />
          <Route path="achievements" element={<AchievementsMain/>} />
          <Route path="projects" element={<ProjectsMain/>} />
          <Route path="life" element={<ComingSoon/>} />
          <Route path="thoughts" element={<ComingSoon/>} />
          <Route path="contact" element={<ComingSoon/>} />
        </Routes>
      </Router>
      <CopyrightSection/>
      </GlobalStyle>
  );
}

export default App;
