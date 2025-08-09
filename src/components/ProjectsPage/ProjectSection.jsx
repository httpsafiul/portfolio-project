import React from 'react';
import {
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectHighlights,
  ProjectRecognition,
  ProjectTech,
  LearnMoreButton
} from './Styles/ProjectSection.styled';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProjectSection = ({ project }) => {
  return (
    <ProjectCard>
      <ProjectImage src={project.image} alt={project.name} />
      <ProjectContent>
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectHighlights><strong>Highlights:</strong> {project.highlights}</ProjectHighlights>
        <ProjectRecognition><strong>Recognition:</strong> {project.recognition}</ProjectRecognition>
        <ProjectTech><strong>Tech Used:</strong> {project.tech}</ProjectTech>
        <LearnMoreButton href={project.link}>
          Learn More <ArrowForwardIcon />
        </LearnMoreButton>
      </ProjectContent>
    </ProjectCard>
  );
};

export default ProjectSection;
