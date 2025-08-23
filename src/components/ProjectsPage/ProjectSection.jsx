import React from "react";
import {
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectHighlights,
  ProjectRecognition,
  ProjectTech,
  LearnMoreButton,
} from "./Styles/ProjectSection.styled";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProjectSection = ({ project }) => {
  return (
    <ProjectCard elevation={2}>
      <ProjectImage src={project.image} alt={project.name} />
      <ProjectContent>
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectHighlights>
          <strong>Highlights:</strong> {project.highlights}
        </ProjectHighlights>
        <ProjectRecognition>
          <strong>Recognition:</strong> {project.recognition}
        </ProjectRecognition>
        <ProjectTech>
          <strong>Tech Used:</strong> {project.tech}
        </ProjectTech>
        {/* {project.link && (
          <LearnMoreButton href={project.link} target="_blank" rel="noopener noreferrer">
            Learn More <ArrowForwardIcon fontSize="small" />
          </LearnMoreButton>
        )} */}
      </ProjectContent>
    </ProjectCard>
  );
};

export default ProjectSection;
