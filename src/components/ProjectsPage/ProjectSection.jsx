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
  ProjectTechWrapper,
} from "./Styles/ProjectSection.styled";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CodeIcon from "@mui/icons-material/Code";

import { Blurhash } from "react-blurhash";
import { colour_green, colour_orange } from "../../Common/colours";

import { Chip, Avatar } from "@mui/material";

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
          <strong style={{color: colour_green}}>Highlights:</strong> {project.highlights}
        </ProjectHighlights>

        <ProjectRecognition>
          <strong style={{color: colour_green}}>Recognition:</strong> {project.recognition}
        </ProjectRecognition>

        <div>
          <ProjectTechWrapper>
            {project.tech?.map((tech, index) => (
              <Chip
                key={index}
                avatar={<Avatar src={tech.icon} alt={tech.name} />}
                label={tech.name}
                size="medium"
                variant="outlined"
                sx={{
                  marginTop: "5px"
                }}
              />
            ))}
          </ProjectTechWrapper>
        </div>
      </ProjectContent>
    </ProjectCard>
  );
};

export default ProjectSection;
