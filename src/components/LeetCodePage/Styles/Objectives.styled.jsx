import styled from "styled-components";
import { Chip, Paper } from "@mui/material";
import { colour_background, colour_green, colour_orange } from "../../../Common/colours";

export const ObjectivesContainer = styled(Paper)`
  width: 80%;
  margin: 4rem auto;
  padding: 2rem;
  border-radius: 16px;
  background: ${colour_background};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const StyledChip = styled(Chip)`
  && {
    background-color: ${colour_orange};
    color: white;
    font-weight: 600;
    margin-bottom: 1rem;
    .MuiChip-icon {
      color: white;
    }
  }
`;

export const SectionHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${colour_green};
`;

export const MilestonesRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

export const MilestoneBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

export const MilestoneValue = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${colour_orange};
`;

export const MilestoneLabel = styled.p`
  font-size: 1rem;
  color: #444;
  margin-top: 0.3rem;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  max-width: 700px;
`;
