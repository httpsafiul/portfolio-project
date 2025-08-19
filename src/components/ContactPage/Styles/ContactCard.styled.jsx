import styled from "styled-components";
import { Card, Box } from "@mui/material";
import { colour_green, colour_orange, colour_white } from "../../../Common/colours";
import bg from '../../../assets/Hero/bg.png';

export const CardContainer = styled(Card)`
  width: 80%;
  min-height: 500px;
  display: flex;
  border-radius: 20px !important;
  overflow: hidden;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.12) !important;
`;

export const LeftSection = styled(Box)`
  width: 30%;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-image: url(${bg});
`;

export const RightSection = styled(Box)`
  flex: 1;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SocialBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 5px;
`;

export const SocialHeading = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${colour_orange}
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: black;
  font-size: 1rem;
  transition: 0.3s ease;
  color: ${colour_white};

  &:hover {
    color: ${colour_orange};
    transform: translateX(4px);
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1rem;
`;

export const InputRow = styled(Box)`
  display: flex;
  gap: 1rem;
  width: 100%;
`;
