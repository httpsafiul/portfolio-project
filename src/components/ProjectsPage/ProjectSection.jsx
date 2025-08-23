import React, { useState } from "react";
import {
  ProjectCard,
  ProjectImageWrapper,
  StyledImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectHighlights,
  ProjectRecognition,
  ProjectTech,
  LearnMoreButton,
} from "./Styles/ProjectSection.styled";

import { Blurhash } from "react-blurhash";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProjectSection = ({ project }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ProjectCard elevation={2}>
      <ProjectImageWrapper>
        {!isLoaded && (
          <Blurhash
            hash={project.imageHash}
            width={"100%"}
            height={"100%"}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}
        <StyledImage
          src={project.image}
          alt={project.name}
          onLoad={() => setIsLoaded(true)}
          style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s ease" }}
        />
      </ProjectImageWrapper>

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
