import React from 'react';
import {
  HeroContainer,
  TextSection,
  ImageSection,
  MotionIntroText,
  MotionNameText,
  HighlightedText,
  AnimatedProfileImage,
  ImageWrapper,
  CircleBackdrop,
  SubtitleText,
  ButtonContainer,
  StyledButton
} from './Styles/HeroMain.styled';

import { colour_primary } from '../../../Common/colours'; 
import safi from "../../../assets/Hero/safi.jpg";

const HeroMain = () => {
  return (
    <HeroContainer>
      <TextSection>
        <MotionIntroText
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          THIS IS
        </MotionIntroText>
        <MotionNameText
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          MD <HighlightedText>SAFI</HighlightedText>UL HAQUE
        </MotionNameText>

        {/* Animated Subtitle */}
        <SubtitleText
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Software Developer
        </SubtitleText>

        {/* Buttons */}
        <ButtonContainer>
          <StyledButton
            variant="contained"
            sx={{ backgroundColor: colour_primary, '&:hover': { backgroundColor: colour_primary }, fontWeight: "bold", }}
            href="/resume.pdf" // replace with actual CV link
            target="_blank"
          >
            Download CV
          </StyledButton>
          <StyledButton
            variant="outlined"
            sx={{
              borderColor: colour_primary,
              color: colour_primary,
              fontWeight: "bold",
              '&:hover': {
                backgroundColor: `${colour_primary}10`, // light hover effect
                borderColor: colour_primary,
              },
            }}
            href="#contact"
          >
            Contact
          </StyledButton>
        </ButtonContainer>
      </TextSection>

      <ImageSection>
        <ImageWrapper
          animate={{
            x: [0, -10, 10, 0, 10, -10, 0, 10, 0],
            y: [0, 10, -10, 0, -10, -10, 0, 10, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <CircleBackdrop
            animate={{
              x: [0, 10, -10, 0, -10, 10, 0, 10, -10, 0],
              y: [0, -10, 10, 0, 10, -10, 0, 10, -10, 0],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <AnimatedProfileImage src={safi} alt="Md Safiul Haque" />
        </ImageWrapper>
      </ImageSection>
    </HeroContainer>
  );
};

export default HeroMain;
