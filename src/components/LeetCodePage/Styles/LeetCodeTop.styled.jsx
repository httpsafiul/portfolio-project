import styled from "styled-components";
import { Typography, Card } from "@mui/material";
import { colour_green, colour_orange, colour_white } from '../../../Common/colours';

export const Container = styled.div`
  width: 90%;
  margin: 3rem auto;
  text-align: center;
`;

export const Heading = styled(Typography).attrs({
  variant: "h4",
  component: "h1",
  fontWeight: "bold",
})`
  font-weight: 700;
  color: ${colour_green}
`;

export const Subheading = styled(Typography).attrs({
  variant: "subtitle1",
  component: "p"
})`
  margin-top: 0.8rem;
  color: #555;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

export const StatCard = styled(Card)`
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
  @media (max-width: 1060px) {
    padding: 1.2rem;
    }
    @media (max-width: 910px) {
    padding: 1.0rem;
    }
    @media (max-width: 795px) {
    padding: 0.8rem;
  }
    @media (max-width: 520px) {
    padding: 0.5rem;
  }
`;

export const StatGreen = styled(Typography).attrs({
  variant: "h5",
  component: "div"
})`
  font-weight: 700;
  color: ${colour_green};
`;

export const StatGrey = styled(Typography).attrs({
  variant: "body1",
  component: "div"
})`
  font-weight: 500;
  color: ${colour_orange};
`;
