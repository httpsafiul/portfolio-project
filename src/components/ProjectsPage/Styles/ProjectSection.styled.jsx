
import styled from 'styled-components';
import { colour_primary } from '../../../Common/colours';

export const ProjectCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colour_primary};
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0,0,0,0.1);
  }
`;

export const ProjectImage = styled.img`
  width: 50%;
  height: 220px;
  object-fit: cover;

  /* Smaller height for mobile */
  @media (max-width: 600px) {
    height: 160px;
  }
`;


export const ProjectContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colour_primary};
  margin: 0;
`;

export const ProjectDescription = styled.p`
  color: #444;
  font-size: 0.95rem;
`;

export const ProjectHighlights = styled.p`
  color: #555;
  font-size: 0.9rem;
`;

export const ProjectRecognition = styled.p`
  color: #555;
  font-size: 0.9rem;
`;

export const ProjectTech = styled.p`
  color: #222;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const LearnMoreButton = styled.a`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: ${colour_primary};
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: translateX(4px);
  }
`;
