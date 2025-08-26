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
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Objectives = () => {
  return (
    <ObjectivesContainer elevation={2}>
      <StyledChip
        icon={<TrendingUpIcon style={{ color: "white" }} />}
        label="2025 Objectives"
      />
      <SectionHeading>Target Milestones</SectionHeading>

      <MilestonesRow>
        <MilestoneBox>
          <MilestoneValue>300+</MilestoneValue>
          <MilestoneLabel>Problems to Solve</MilestoneLabel>
        </MilestoneBox>
        <MilestoneBox>
          <MilestoneValue>Top 20%</MilestoneValue>
          <MilestoneLabel>Global Ranking</MilestoneLabel>
        </MilestoneBox>
      </MilestonesRow>

      <Description>
        Focused preparation for technical interviews while building deep
        algorithmic intuition and problem-solving expertise.
      </Description>
    </ObjectivesContainer>
  );
};

export default Objectives;
