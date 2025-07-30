import React, { useState } from 'react';
import { Typography } from '@mui/material';
import {
  CardContainer,
  CardInner,
  CardFront,
  CardBack,
  FrontOverlay,
  FrontHeading,
  BackContent,
  BackHeading,
  BackText,
} from './Styles/AbuotCard.styled';

const AboutCard = ({ image_url, frontHeading, textHeading, textContent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardInner
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <CardFront>
          <img
            src={image_url}
            alt="Card front"
            style={{ width: '100%', height: '100%', borderRadius: 'inherit', objectFit: 'cover' }}
          />
          <FrontOverlay>
            <FrontHeading >{frontHeading}</FrontHeading>
          </FrontOverlay>
        </CardFront>

        <CardBack>
          <BackContent>
            <BackHeading variant="h6">{textHeading}</BackHeading>
            <BackText variant="body2">{textContent}</BackText>
          </BackContent>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default AboutCard;
