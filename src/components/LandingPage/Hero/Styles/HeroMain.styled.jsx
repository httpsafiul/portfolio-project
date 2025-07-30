import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colour_primary, colour_background } from '../../../../Common/colours';
import { Button } from '@mui/material';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 8rem;
  min-height: 70vh;
  font-family: 'Poppins', sans-serif;
  background-color: ${colour_background};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

export const TextSection = styled.div`
  flex: 3;
`;

export const MotionIntroText = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colour_primary};
  margin: 0;
  text-transform: uppercase;
`;

export const MotionNameText = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 900;
  color: #111;
  text-transform: uppercase;
`;

export const HighlightedText = styled.span`
  color: ${colour_primary};;
  font-weight: 900;
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
  position: relative;
`;

export const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 325px;
  height: 325px;
`;

export const CircleBackdrop = styled(motion.div)`
  position: absolute;
  width: 325px;
  height: 325px;
  border-radius: 50%;
  background-color: #7c3f00;
  z-index: 0;
`;

export const AnimatedProfileImage = styled(motion.img)`
  width: 325px;
  height: 325px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #999;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
`;

export const SubtitleText = styled(motion.h3)`
  font-size: 1.8rem;
  font-weight: 500;
  color: #444;
  margin: 1rem 0;
  font-family: 'Poppins', sans-serif;
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
`;
