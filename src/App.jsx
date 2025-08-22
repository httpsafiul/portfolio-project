// App.jsx
import React from 'react';
import GlobalStyle from './GlobalStyles';
import CopyrightSection from './components/Copyright/CopyrightSection';
import LandingPageMain from './components/LandingPage/LandingPageMain';
import ProjectsMain from './components/ProjectsPage/ProjectsMain';
import AchievementsMain from './components/AchievementsPage/AchievementsMain';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LifePageMain from './components/LifePage/LifePageMain';
import ContactMain from './components/ContactPage/ContactMain';

function App() {
  return (
    <GlobalStyle>
      <Router>
        <Routes>
          Lazy-loaded auth module
          <Route path="/" element={<LandingPageMain />} />
          <Route path="/home" element={<LandingPageMain />} />
          <Route path="achievements" element={<AchievementsMain />} />
          <Route path="projects" element={<ProjectsMain />} />
          <Route path="life" element={<LifePageMain />} />
          <Route path="contact" element={<ContactMain />} />
        </Routes>
      </Router>
      <CopyrightSection />
    </GlobalStyle>
  );
}

export default App;
