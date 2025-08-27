import styled from "styled-components";
import { colour_green } from "../../../Common/colours";
import { Typography } from "@mui/material";

export const LifeContainer = styled.div`
  width: 100%;
  padding: 3rem 6rem;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    @media (max-width: 720px) {
    padding: 3rem 1rem;
  }
`;


export const LifeHeading = styled(Typography).attrs({
  fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
  variant: "h4",
  component: "h1",
  fontWeight: "700",
  fontFamily: "Libre Caslon Text",
  marginBottom: "1rem",

})`
  color: ${colour_green};
`;

export const LifeIntro = styled(Typography).attrs({
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

export const SectionWrapper = styled.div`
  margin-bottom: 2rem;

  .MuiButton-root {
    border-radius: 3px;
    text-transform: none;
    font-weight: 600;
    padding: 0.5rem 1.5rem;
  }

  .MuiButton-contained {
    background-color: ${colour_green};
    color: white;

    &:hover {
      background-color: #0f4f3f;
    }
  }

  .MuiButton-outlined {
    border-color: ${colour_green};
    color: ${colour_green};

    &:hover {
      border-color: #0f4f3f;
      color: #0f4f3f;
    }
  }
`;
