import React, { Suspense } from 'react';
const HeroMain = React.lazy(() => import('./Hero/HeroMain'))
const IntroductionMain = React.lazy(() => import('./Introduction/IntroductionMain'))
const EducationMain = React.lazy(() => import('./Education/EducationMain'))
const TechStackMain = React.lazy(() => import('./TechStack/TechStackMain'))
const LetsConnectMain = React.lazy(() => import('./LetsConnect/LetsConnectMain'))
import Navbar from '../Navbar/Navbar';
import LoadingScreen from './LazyLoadingComponents/LoadingScreen';
import { CircularProgress } from '@mui/material';

function LandingPageMain() {
  return (
    <>
      <Navbar active={"home"} />
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
            flexDirection: "column",
            zIndex: 9999,
          }}
        >
          <LoadingScreen />
        </div>
      }>
        <HeroMain />
      </Suspense>

      <Suspense fallback={
        <CircularProgress />
      }>
        <IntroductionMain />
      </Suspense>

      <Suspense fallback={
        <CircularProgress />
      }>
        <EducationMain />
      </Suspense>


      <Suspense fallback={
        <CircularProgress />
      }>
        <TechStackMain />
      </Suspense>


      <Suspense fallback={
        <CircularProgress />
      }>
        <LetsConnectMain />
      </Suspense>

    </>
  );
}

export default LandingPageMain;
