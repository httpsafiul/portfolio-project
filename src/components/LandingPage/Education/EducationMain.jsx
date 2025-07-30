import React from 'react';
import {
  EducationMainContainer,
  SectionHeading,
  CardsWrapper
} from './Styles/EducationMain.styled';

import EducationCard from './EducationCard';
import college from '../../../assets/EducationSection/college.png';
import hs from '../../../assets/EducationSection/hs.png';
import s from '../../../assets/EducationSection/s.png';

const EducationMain = () => {
  return (
    <EducationMainContainer>
      <SectionHeading>Education</SectionHeading>
      <CardsWrapper>
        <EducationCard
          courseName="Secondary (X)"
          logoSrc={s}
          college="Barisha High School"
          university="West Bengal Board of Secondary Education"
          year="2018 – 2019"
          cgpa="89.00%"
        />
        <EducationCard
          courseName="Higher Secondary (XII)"
          logoSrc={hs}
          college="Barisha High School"
          university="West Bengal Council of Higher Secondary Education"
          year="2019 – 2021"
          cgpa="84.40%"
        />
        <EducationCard
          courseName="B.Tech (ECE)"
          logoSrc={college}
          college="Meghnad Saha Institute of Technology"
          university="Maulana Abul Kalam Azad University of Technology"
          year="2021 – 2025"
          cgpa="8.41"
        />
      </CardsWrapper>
    </EducationMainContainer>
  );
};

export default EducationMain;
