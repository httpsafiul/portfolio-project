import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colour_green, colour_orange } from '../../../../Common/colours';
import { Card } from '@mui/material';

export const CardContainer = styled(motion(Card))`
  width: 360px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 260px;
  }

  @media (max-width: 480px) {
    width: 220px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colour_green};
  margin: 0;
  text-align: center;
`;

export const DividerLine = styled.div`
  width: 200px;
  height: 1px;
  background-color: ${colour_orange};
  border-radius: 2px;
`;

export const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  @media (max-width: 480px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;
