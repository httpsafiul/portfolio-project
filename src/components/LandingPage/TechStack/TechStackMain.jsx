import React, { useState, useEffect } from 'react';
import {
  IntroductionContainer,
  HeadingWrapper,
  Heading,
  DividerLine,
  CarouselWrapper,
  CarouselInner,
  NavButton
} from './Styles/TechStackMain.styled';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TechStackCard from './TehcStackCard';

import javaIcon from '../../../assets/TechStack/javaIcon.png';
import pythonIcon from '../../../assets/TechStack/pythonIcon.png';
import cIcon from '../../../assets/TechStack/cIcon.png';
import cppIcon from '../../../assets/TechStack/cppIcon.png';
import jsIcon from '../../../assets/TechStack/jsIcon.png';

import springbootIcon from '../../../assets/TechStack/springbootIcon.png';
import reactIcon from '../../../assets/TechStack/reactIcon.png';
import htmlIcon from '../../../assets/TechStack/htmlIcon.png';
import cssIcon from '../../../assets/TechStack/cssIcon.png';
import elkIcon from '../../../assets/TechStack/elkIcon.png';
import nodejsIcon from '../../../assets/TechStack/nodejsIcon.png';

import mysqlIcon from '../../../assets/TechStack/mysqlIcon.png';
import mongoIcon from '../../../assets/TechStack/mongoIcon.png';
import sqliteIcon from '../../../assets/TechStack/sqliteIcon.png';

const cardsData = [
  {
    title: "Languages",
    icons: [javaIcon, pythonIcon, cIcon, cppIcon, jsIcon]
  },
  {
    title: "Frameworks & Technologies",
    icons: [springbootIcon, reactIcon, htmlIcon, cssIcon, elkIcon, nodejsIcon]
  },
  {
    title: "Databases",
    icons: [mysqlIcon, mongoIcon, sqliteIcon]
  }
];

const TechStackMain = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Adjust cards per page based on screen size
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1305 && window.innerWidth >=768) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const handleNext = () => {
    if (startIndex + cardsPerPage < cardsData.length) {
      setStartIndex(startIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  const visibleCards = cardsData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <IntroductionContainer>
      <HeadingWrapper>
        <Heading>My Tech Stack</Heading>
        <DividerLine />
      </HeadingWrapper>

      <CarouselWrapper>
        <NavButton
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          <ArrowBackIosNewIcon />
        </NavButton>

        <CarouselInner>
          {visibleCards.map((card, index) => (
            <TechStackCard
              key={index}
              title={card.title}
              icons={card.icons}
            />
          ))}
        </CarouselInner>

        <NavButton
          onClick={handleNext}
          disabled={startIndex + cardsPerPage >= cardsData.length}
        >
          <ArrowForwardIosIcon />
        </NavButton>
      </CarouselWrapper>
    </IntroductionContainer>
  );
};

export default TechStackMain;
