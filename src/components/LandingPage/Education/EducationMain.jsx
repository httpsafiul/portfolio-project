import React, { useState, useEffect } from 'react';
import {
  IntroductionContainer,
  HeadingWrapper,
  Heading,
  DividerLine,
  CarouselWrapper,
  CarouselInner,
  NavButton
} from './Styles/EducationMain.styled';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import EducationCard from './EducationCard';
import college from '../../../assets/EducationSection/college.png';
import hs from '../../../assets/EducationSection/hs.png';
import s from '../../../assets/EducationSection/s.png';

const cardsData = [
  {
    frontHeading: "Secondary (X)",
    image: s,
    institute: "Barisha High School",
    university: "West Bengal Board of Secondary Education",
    year: 2019,
    marks: "89%"
  },
  {
    frontHeading: "Higher Secondary (XII)",
    image: hs,
    institute: "Barisha High School",
    university: "West Bengal Council of Higher Secondary Education",
    year: 2021,
    marks: "84.40%"
  },
  {
    frontHeading: "B.Tech. (ECE)",
    image: college,
    institute: "Meghnad Saha Institute of Technology",
    university: "Maulana Abul Kalam Azad University of Technology",
    year: 2025,
    marks: "8.41 CGPA"
  }
];

const EducationMain = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Adjust visible cards based on screen size
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
        <Heading>Education</Heading>
        <DividerLine />
      </HeadingWrapper>

      <CarouselWrapper>
        <NavButton onClick={handlePrev} disabled={startIndex === 0}>
          <ArrowBackIosNewIcon />
        </NavButton>

        <CarouselInner>
          {visibleCards.map((card, index) => (
            <EducationCard
              key={index}
              frontHeading={card.frontHeading}
              image={card.image}
              institute={card.institute}
              marks={card.marks}
              university={card.university}
              year={card.year}
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

export default EducationMain;
