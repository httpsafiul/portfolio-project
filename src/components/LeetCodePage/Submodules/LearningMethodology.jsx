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


import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import InsightsIcon from "@mui/icons-material/Insights";
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';

const LearningMethodology = () => {
  return (
    <SectionContainer>
      <SectionHeading>Learning Pathway</SectionHeading>
      <SectionSubHeading>
        A disciplined roadmap to sharpen problem-solving skills and grow steadily with every challenge.
      </SectionSubHeading>

      <CardsContainer>
        <MethodCard elevation={2}>
          <CardIcon colour="orange">
            <ModelTrainingIcon fontSize="large" />
          </CardIcon>
          <CardHeading>Progress Tracking</CardHeading>
          <CardText>
            Monitoring solved problems, streaks, and milestones to stay motivated and measure consistent improvement.
          </CardText>
        </MethodCard>

        <MethodCard elevation={2}>
          <CardIcon colour="orange">
            <TrackChangesIcon fontSize="large" />
          </CardIcon>
          <CardHeading>Goal-Oriented Practice</CardHeading>
          <CardText>
            Tackling problems with focused goals—mastering data structures, algorithms, and coding efficiency step by step.
          </CardText>
        </MethodCard>

        <MethodCard elevation={2}>
          <CardIcon colour="orange">
            <InsightsIcon fontSize="large" />
          </CardIcon>
          <CardHeading>Reflect & Improve</CardHeading>
          <CardText>
            Reviewing past attempts to strengthen weak areas, refine techniques, and gain deeper insights into problem-solving.
          </CardText>
        </MethodCard>
      </CardsContainer>
    </SectionContainer>
  );
};

export default LearningMethodology;
