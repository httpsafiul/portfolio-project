import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import { colour_primary } from '../../../../Common/colours';

export const CardContainer = styled.div`
  width: 260px;
  height: 390px;
  perspective: 1000px;
`;

export const CardInner = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  border-radius: 18px;
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 18px;
  overflow: hidden;
`;

export const FrontOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 14px 14px;
  box-sizing: border-box;
`;

export const FrontHeading = styled.span`
  color: ${colour_primary};
  font-weight: 600;
  font-size: 1.7rem;
  font-style: italic;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  padding: 24px;
`;

export const BackContent = styled.div`
  text-align: center;
`;

export const BackHeading = styled(Typography)`
  color: ${colour_primary};
  font-weight: bold;
  margin-bottom: 8px;
`;

export const BackText = styled(Typography)`
  /* color: ${colour_primary}; */
  font-size: 1rem;
`;
