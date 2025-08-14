import styled from 'styled-components';
import {
  colour_background,
  colour_orange,
  colour_green,
  colour_white
} from '../../../../Common/colours';
import { Button } from '@mui/material';

export const IntroductionContainer = styled.section`
  width: 100%;
  background-color: ${colour_background};
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
  margin-top: 1rem;
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-left: 95px;
  white-space: nowrap;
  color: ${colour_green};
`;

export const DividerLine = styled.div`
  flex: 1;
  height: 2.1px;
  background-color: ${colour_orange};
  margin-left: 1rem;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 1400px;
`;

export const CarouselInner = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex: 1;
  transition: transform 0.3s ease;
`;

export const NavButton = styled(Button)`
  min-width: 48px !important;
  height: 48px;
  border-radius: 50% !important;
  background-color: ${colour_green} !important;
  color: ${colour_white} !important;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${colour_orange} !important;
  }

  &:disabled {
    background-color: #ccc !important;
    color: #666 !important;
    cursor: not-allowed;
  }
`;
