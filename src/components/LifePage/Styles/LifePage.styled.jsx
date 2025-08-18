import styled from "styled-components";
import { colour_green } from "../../../Common/colours";

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

export const LifeHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colour_green};
  margin-bottom: 1rem;
    @media (max-width: 720px) {
    font-size: 1.8rem;
  }
`;

export const LifeIntro = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  max-width: 800px;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 720px) {
    font-size: 0.9rem;
  }
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
