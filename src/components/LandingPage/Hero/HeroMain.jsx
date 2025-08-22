import React from 'react';
import {
  HeroContainer,
  TextSection,
  ImageSection,
  MotionIntroText,
  MotionNameText,
  SubtitleText,
  StaticProfileImage, // keep styled wrapper
  ButtonContainer,
  StyledButton,
  SocialIconsContainer,
  IconButton,
  LocationRow,
  LocationText
} from './Styles/HeroMain.styled';

import { LinkedIn, GitHub, Instagram, LocationOn } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import { colour_green, colour_orange, colour_white } from '../../../Common/colours';
import safi from "../../../assets/Hero/safi.webp";
import safioritemp from "../../../assets/Hero/safioritemp.webp";
import { useNavigate } from 'react-router-dom';

// 👇 import lazy load component
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const HeroMain = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <HeroContainer>
      <TextSection>
        <MotionIntroText>THIS IS</MotionIntroText>
        <MotionNameText>MD SAFIUL HAQUE</MotionNameText>
        <SubtitleText>Software Developer</SubtitleText>
        <LocationRow>
          <LocationOn style={{ fontSize: "1.8rem", color: colour_orange }} />
          <LocationText>Kolkata, India</LocationText>
        </LocationRow>

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
            href="https://drive.google.com/file/d/1ph7YV5Nf4f4rfqpj_RlHT7gbFpysRbkL/view?usp=sharing"
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
                borderColor: colour_orange,
                color: colour_orange
              },
            }}
            onClick={handleContactClick}
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
        <StaticProfileImage
          as={LazyLoadImage} // 👈 use lazy-load version
          src={safi}
          alt="Md Safiul Haque"
          placeholderSrc={safioritemp} // 👈 temp image before load
          effect="blur" // 👈 optional blur-up effect
        />
      </ImageSection>
    </HeroContainer>
  );
};

export default HeroMain;
