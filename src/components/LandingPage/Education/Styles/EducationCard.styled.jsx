import styled from 'styled-components';
import { Card } from '@mui/material';
import { colour_primary, colour_background } from '../../../../Common/colours';
import { motion } from 'framer-motion';

// Use motion for hover animation
export const CardContainer = styled(motion(Card))`
  background-color: ${colour_background};
  width: 300px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: transform 0.3s ease;
`;

export const CourseName = styled.h2`
  color: ${colour_primary};
  font-size: 1.37rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

export const InstitutionLogo = styled.img`
  height: 85px;
  object-fit: contain;
  margin: 10px 0;
`;

export const CollegeName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
  color: #333;
`;

export const UniversityName = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #666;
  margin: 0;
`;

export const Year = styled.p`
  font-size: 0.95rem;
  color: #444;
  margin: 0;
`;

export const CGPA = styled.p`
  font-size: 1rem;
  color: #444;
  font-weight: 500;
  margin: 0;
`;
