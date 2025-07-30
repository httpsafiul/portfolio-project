import React from 'react';
import {
  TechStackSection,
  SectionHeading,
  CardsWrapper
} from './Styles/TechStackMain.styled';

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

import TechStackCard from './TehcStackCard';

const TechStackMain = () => {
  return (
    <TechStackSection>
      <SectionHeading>Tech Stack</SectionHeading>
      <CardsWrapper>
        <TechStackCard
          title="Languages"
          icons={[javaIcon, pythonIcon, cIcon, cppIcon, jsIcon]}
        />
        <TechStackCard
          title="Frameworks & Technologies"
          icons={[springbootIcon, reactIcon, htmlIcon, cssIcon, elkIcon, nodejsIcon]}
        />
        <TechStackCard
          title="Databases"
          icons={[mysqlIcon, mongoIcon, sqliteIcon]}
        />
      </CardsWrapper>
    </TechStackSection>
  );
};

export default TechStackMain;
