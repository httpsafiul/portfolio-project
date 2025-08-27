import styled from "styled-components";
import { Typography, Paper } from "@mui/material";
import { colour_green, colour_orange, colour_white } from '../../../Common/colours';

export const Container = styled.div`
  width: 90%;
  margin: 3rem auto 0rem auto;
  text-align: center;
`;

export const Heading = styled(Typography).attrs({
  fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
  variant: "h4",
  component: "h1",
  fontWeight: "700",
  fontFamily: "Libre Caslon Text",
  marginBottom: "1rem",

})`
  color: ${colour_green};
`;

export const Subheading = styled(Typography).attrs({
  fontSize: { xs: '0.9rem', sm: '1.0rem', md: '1.1rem' },
  variant: "subtitle1",
  component: "p",
  fontFamily: "Libre Caslon Text",
  marginTop: "0.8rem",
  maxWidth: "800px",
  textAlign: "center",
  lineHeight: "1.8",
})`
  color: #333;
`;



export const StatCard = styled(Paper).attrs({
  padding: { xs: '0rem', sm: '0.5rem', md: '1rem' },
})`
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
`;

export const StatGreen = styled(Typography).attrs({
  variant: "h5",
  component: "div",
  fontFamily: "Libre Caslon Text",
  fontSize: { xs: '0.9rem', sm: '1.0rem', md: '1.3rem' },
})`
  font-weight: 700;
  color: ${colour_green};
`;

export const StatGrey = styled(Typography).attrs({
  variant: "body1",
  component: "div",
  fontFamily: "Libre Caslon Text",
  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1.0rem' },
})`
  font-weight: 500;
  color: ${colour_orange};
`;
