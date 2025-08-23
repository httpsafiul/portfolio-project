import styled from "styled-components";
import { Card } from "@mui/material";
import { colour_primary, colour_background, colour_green } from "../../../Common/colours";

export const ProjectCard = styled(Card)`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: row;
  background: ${colour_background};
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 1300px) {
    width: 90%;
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const ProjectImageWrapper = styled.div`
  position: relative;
  width: 40%;
  height: auto;

  @media (max-width: 900px) {
    width: 100%;
    height: 220px;
  }

  @media (max-width: 600px) {
    height: 160px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ProjectContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const ProjectTitle = styled.h3`
  color: ${colour_green};
  margin: 0;
`;

export const ProjectDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.4;
`;

export const ProjectHighlights = styled.p`
  font-size: 0.9rem;
`;

export const ProjectRecognition = styled.p`
  font-size: 0.9rem;
`;

export const ProjectTech = styled.p`
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
