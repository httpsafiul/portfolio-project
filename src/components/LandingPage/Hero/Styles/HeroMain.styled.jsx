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
    padding: 2rem;
    text-align: center;
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
`;

export const MotionIntroText = styled.h2`
  font-size: 2rem;
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
  @media (max-width: 768px) {
    font-size: 3.2rem;
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
  /* padding: 0rem 8rem; */
`;

export const StaticProfileImage = styled.img`
  width:450px;
  height: auto;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const StyledButton = styled(Button)`
  font-weight: 600;
  text-transform: none;
  border-radius: 8px;
  font-family: "Libre Caslon Text", serif;
`;
