import React from 'react';
import {
  CardContainer,
  CourseName,
  InstitutionLogo,
  CollegeName,
  UniversityName,
  Year,
  CGPA
} from './Styles/EducationCard.styled';

const EducationCard = ({
  courseName,
  logoSrc,
  college,
  university,
  year,
  cgpa
}) => {
  return (
    <CardContainer
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <CourseName>{courseName}</CourseName>
      <InstitutionLogo src={logoSrc} alt={`${college} logo`} />
      <CollegeName>{college}</CollegeName>
      <UniversityName>{university}</UniversityName>
      <Year>{year}</Year>
      <CGPA>CGPA: {cgpa}</CGPA>
    </CardContainer>
  );
};

export default EducationCard;
