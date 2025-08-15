import React from 'react';
import {
  HeroContainer,
  TextSection,
  ImageSection,
  MotionIntroText,
  MotionNameText,
  SubtitleText,
  StaticProfileImage,
  ButtonContainer,
  StyledButton
} from './Styles/HeroMain.styled';

import { colour_green, colour_primary, colour_white } from '../../../Common/colours'; 
import safi from "../../../assets/Hero/safi.png";

const HeroMain = () => {
  return (
    <HeroContainer>
      <TextSection>
        <MotionIntroText>THIS IS</MotionIntroText>
        <MotionNameText>MD SAFIUL HAQUE</MotionNameText>
        <SubtitleText>Software Developer</SubtitleText>

        {/* Buttons */}
        <ButtonContainer>
          <StyledButton
            variant="contained"
            sx={{
              backgroundColor: colour_white,
              color: colour_green,
              '&:hover': { backgroundColor: colour_white },
              fontWeight: "bold",
              fontFamily: "Libre Caslon Text",
            }}
            href="https://drive.google.com/file/d/1hYEk6YaGctYhFJFnrGH4o03fFk2k3aM-/view?usp=drive_link"
            target="_blank"
          >
            Download CV
          </StyledButton>
          <StyledButton
            variant="outlined"
            sx={{
              borderColor: colour_white,
              color: colour_white,
              fontWeight: "bold",
              fontFamily: "Libre Caslon Text",
              '&:hover': {
                backgroundColor: `${colour_white}10`,
                borderColor: colour_white,
              },
            }}
            href="contact"
          >
            Contact
          </StyledButton>
        </ButtonContainer>
      </TextSection>

      <ImageSection>
        <StaticProfileImage src={safi} alt="Md Safiul Haque" />
      </ImageSection>
    </HeroContainer>
  );
};

export default HeroMain;
