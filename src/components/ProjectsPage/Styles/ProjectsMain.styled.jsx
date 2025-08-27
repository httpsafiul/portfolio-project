import styled from 'styled-components';
import { colour_background, colour_green } from '../../../Common/colours';
import { Typography } from '@mui/material';

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 40px 8%;
  background-color: ${colour_background};

  @media (max-width: 600px) {
    padding: 2rem;
  }

  margin: 0 auto;
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
  textAlign: "center",
  lineHeight: "1.8",
})`
  color: #333;
`;