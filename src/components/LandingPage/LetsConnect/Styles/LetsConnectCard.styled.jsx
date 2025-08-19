import styled from "styled-components";
import { colour_orange, colour_white } from "../../../../Common/colours";
import { Button } from "@mui/material";

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Heading = styled.h2`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${colour_orange};
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${colour_white};
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 800px;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ConnectButton = styled(Button)`
  font-weight: 600;
  text-transform: none;
  border-radius: 10px;
  padding: 0.6rem 1.5rem;
  background-color: ${colour_orange};
  color: ${colour_white};
  font-family: "Libre Caslon Text", serif;
  &:hover {
    background-color: ${colour_orange};
    opacity: 0.9;
  }
`;
