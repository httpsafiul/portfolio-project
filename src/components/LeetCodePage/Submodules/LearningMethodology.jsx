import React from "react";
import {
  SectionContainer,
  SectionHeading,
  SectionSubHeading,
  CardsContainer,
  MethodCard,
  CardIcon,
  CardHeading,
  CardText
} from "../Styles/LearningMethodology.styled";

import PsychologyIcon from "@mui/icons-material/Psychology";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import ReplayIcon from "@mui/icons-material/Replay";

const LearningMethodology = () => {
  return (
    <SectionContainer>
      <SectionHeading>Learning Methodology</SectionHeading>
      <SectionSubHeading>
        A structured approach to algorithmic problem-solving and skill development
      </SectionSubHeading>

      <CardsContainer>
        <MethodCard elevation={2}>
          <CardIcon colour="orange">
            <PsychologyIcon fontSize="large" />
          </CardIcon>
          <CardHeading>Pattern Recognition</CardHeading>
          <CardText>
            Studying common algorithmic patterns and solution templates to build a strong problem-solving framework.
          </CardText>
        </MethodCard>

        <MethodCard elevation={2}>
          <CardIcon colour="orange">
            <AutoGraphIcon fontSize="large" />
          </CardIcon>
          <CardHeading>Consistent Practice</CardHeading>
          <CardText>
            Solving 2-3 problems daily with emphasis on understanding underlying concepts and multiple solution approaches.
          </CardText>
        </MethodCard>

        <MethodCard elevation={2}>
          <CardIcon colour="orange">
            <ReplayIcon fontSize="large" />
          </CardIcon>
          <CardHeading>Iterative Review</CardHeading>
          <CardText>
            Regular revisiting of solved problems to reinforce learning and explore alternative optimization strategies.
          </CardText>
        </MethodCard>
      </CardsContainer>
    </SectionContainer>
  );
};

export default LearningMethodology;
