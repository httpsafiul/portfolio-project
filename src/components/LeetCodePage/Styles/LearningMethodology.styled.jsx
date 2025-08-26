import styled from "styled-components";
import { Paper } from "@mui/material";
import { colour_green, colour_orange, colour_white, colour_background } from "../../../Common/colours";

export const SectionContainer = styled.div`
  width: 90%;
  margin: 4rem auto;
  text-align: center;
`;

export const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${colour_green};
  margin-bottom: 0.5rem;
`;

export const SectionSubHeading = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const MethodCard = styled(Paper)`
  width: 300px;
  padding: 1.5rem;
  border-radius: 16px;
  background: ${colour_background};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CardIcon = styled.div`
  color: ${(props) => (props.colour === "green" ? colour_green : colour_orange)};
  margin-bottom: 1rem;
`;

export const CardHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colour_green};
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  font-size: 1rem;
`;
