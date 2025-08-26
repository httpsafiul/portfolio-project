import styled from "styled-components";
import { Typography, Paper } from "@mui/material";
import {
  colour_green,
  colour_orange,
  colour_white,
  colour_background
} from "../../../Common/colours";

export const Container = styled.div`
  width: 90%;
  margin: 4rem auto;
  display: flex;
  justify-content: center;
`;

export const CardWrapper = styled(Paper)`
  background: ${colour_white};
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
  background: ${colour_background};
    @media (max-width: 1052px) {
     width: 300px;
    }
`;

export const CardHeading = styled(Typography).attrs({
  variant: "h6",
  component: "h2",
  fontFamily: "Libre Caslon Text",
})`
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${colour_orange};
  text-align: center;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: flex-start; /* top-align text and icon */
  margin: 0.6rem 0;
`;

export const IconWrapper = styled.div`
  color: ${colour_green};
  display: flex;
  align-items: flex-start;
  margin-right: 0.5rem;
  margin-top: 2px; /* fine-tunes vertical alignment */

  svg {
    font-size: 1.2rem;
  }
`;

export const ItemText = styled(Typography).attrs({
  variant: "body1",
  fontFamily: "Libre Caslon Text",
})`
  color: #333;
  font-weight: 500;
`;
