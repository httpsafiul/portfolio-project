import React from "react";
import {
  ObjectivesContainer,
  StyledChip,
  SectionHeading,
  MilestonesRow,
  MilestoneBox,
  MilestoneValue,
  MilestoneLabel,
  Description,
} from "../Styles/Objectives.styled";

import FlagIcon from '@mui/icons-material/Flag';

const Objectives = () => {
  return (
    <ObjectivesContainer elevation={2}>
      <StyledChip
        icon={<FlagIcon style={{ color: "white" }} />}
        label="2025 Goals"
      />
      <SectionHeading>Achievement Roadmap</SectionHeading>

      <MilestonesRow>
        <MilestoneBox>
          <MilestoneValue>500+</MilestoneValue>
          <MilestoneLabel>Coding Challenges</MilestoneLabel>
        </MilestoneBox>
        <MilestoneBox>
          <MilestoneValue>Consistent</MilestoneValue>
          <MilestoneLabel>Daily Streak</MilestoneLabel>
        </MilestoneBox>
        <MilestoneBox>
          <MilestoneValue>Top 10%</MilestoneValue>
          <MilestoneLabel>Leaderboard Rank</MilestoneLabel>
        </MilestoneBox>
      </MilestonesRow>

      <Description>
        Aiming for continuous growth through disciplined problem-solving, 
        sharpening competitive programming skills, and preparing for 
        high-impact technical opportunities.
      </Description>
    </ObjectivesContainer>
  );
};

export default Objectives;
