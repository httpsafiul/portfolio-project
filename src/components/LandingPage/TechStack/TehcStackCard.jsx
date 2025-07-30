import React from 'react';
import {
  CardContainer,
  SectionTitle,
  DividerLine,
  IconsGrid
} from './Styles/TechStackCard.styled';

const TechStackCard = ({ title, icons }) => {
  return (
    <CardContainer
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <SectionTitle>{title}</SectionTitle>
      <DividerLine />
      <IconsGrid>
        {icons.map((icon, index) => (
          <img key={index} src={icon} alt={`${title} icon ${index}`} />
        ))}
      </IconsGrid>
    </CardContainer>
  );
};

export default TechStackCard;
