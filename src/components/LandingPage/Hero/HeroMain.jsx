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
  StyledButton,
  SocialIconsContainer,
  IconButton
} from './Styles/HeroMain.styled';

import { LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import { colour_green, colour_orange, colour_white } from '../../../Common/colours'; 
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
              '&:hover': { backgroundColor: colour_orange, color: colour_green },
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
                // backgroundColor: `${colour_white}`,
                borderColor: colour_orange,
                color: colour_orange
              },
            }}
            href="contact"
          >
            Contact
          </StyledButton>
        </ButtonContainer>

        {/* Social Icons */}
        <SocialIconsContainer>
          <IconButton href="https://www.linkedin.com/in/safiulhaque/" target="_blank">
            <LinkedIn fontSize="inherit" />
          </IconButton>
          <IconButton href="https://github.com/httpsafiul" target="_blank">
            <GitHub fontSize="inherit" />
          </IconButton>
          <IconButton href="https://www.instagram.com/httpsafiul" target="_blank">
            <Instagram fontSize="inherit" />
          </IconButton>
          <IconButton href="https://x.com/23Safiul" target="_blank">
            <XIcon fontSize="inherit" />
          </IconButton>
        </SocialIconsContainer>
      </TextSection>

      <ImageSection>
        <StaticProfileImage src={safi} alt="Md Safiul Haque" />
      </ImageSection>
    </HeroContainer>
  );
};

export default HeroMain;
