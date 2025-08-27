import styled from "styled-components";
import { colour_background, colour_green } from '../../../Common/colours';
import { Typography } from "@mui/material";

export const AchievementsContainer = styled.section`
  width: 100%;
  background: ${colour_background};
  padding: 40px 8%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
    @media (max-width: 768px) {
    padding: 40px 5%;
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
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

export const Intro = styled(Typography).attrs({
  fontSize: { xs: '0.9rem', sm: '1.0rem', md: '1.1rem' },
  variant: "subtitle1",
  component: "p",
  fontFamily: "Libre Caslon Text",
  marginTop: "0.8rem",
  maxWidth: "800px",
  marginBottom: "2rem",
  textAlign: "center",
  lineHeight: "1.8",
})`
  color: #333;
`;