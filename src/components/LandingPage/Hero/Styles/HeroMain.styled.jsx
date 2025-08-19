import styled from 'styled-components';
import { colour_orange, colour_white } from '../../../../Common/colours';
import { Button } from '@mui/material';
import bg from '../../../../assets/Hero/bg.png';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: flex-end; */
  /* padding: 4rem 8rem; */
  height: calc(100vh - 80px);
  font-family: 'Poppins', sans-serif;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    /* padding: 2rem; */
    text-align: center;
    height: auto;
  }
  @media (min-height: 800px) {
    height: auto;
  }
`;

export const TextSection = styled.div`
  flex: 3;
  color: ${colour_white};
  /* padding-top: 4rem; */
  padding-left: 8rem;
  /* padding-bottom: 4rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  @media (max-width: 768px) {
    padding: 1rem;
  }
   @media (min-height: 800px) {
    padding-bottom: 50px;
    padding-top: 50px;
  }
`;

export const MotionIntroText = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  color: ${colour_white};
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const MotionNameText = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  color: ${colour_white};
  margin-top: 0.5rem;
    @media (max-width: 1024px) {
    font-size: 2.8rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SubtitleText = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${colour_orange};
  margin: 1rem 0;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const ImageSection = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 1570px) {
    margin-right: 30px;
  }
  @media (max-width: 768px) {
    /* padding-top: 1rem; */
    margin-left: 40px;
  }
   @media (min-height: 800px) {
    padding-top: 1rem;
  }
`;

export const StaticProfileImage = styled.img`
  width: 520px;
  height: auto;
  object-fit: contain;
    @media (max-width: 1024px) {
    width: 420px;
  }
  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const StyledButton = styled(Button)`
  font-weight: 600;
  text-transform: none;
  border-radius: 8px;
  font-family: "Libre Caslon Text", serif;
  @media (max-width: 768px) {
    font-weight: 400;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const IconButton = styled.a`
  color: ${colour_white};
  font-size: 2rem;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    color: ${colour_orange};
    transform: scale(1.2);
  }
`;
