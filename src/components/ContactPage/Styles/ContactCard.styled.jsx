import styled from "styled-components";
import { Card, Box } from "@mui/material";
import { colour_orange, colour_white } from "../../../Common/colours";
import bg from "../../../assets/Hero/bg.png";

export const CardContainer = styled(Card)`
  width: 80%;
  min-height: 500px;
  display: flex;
  border-radius: 20px !important;
  overflow: hidden;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.12) !important;

  @media (max-width: 768px) {
    flex-direction: column; /* ✅ stack vertically on mobile */
    width: 95%;
    min-height: auto;
  }
`;

export const LeftSection = styled(Box)`
  width: 30%;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;


  @media (max-width: 1245px) {
    width: 40%;
  }


  @media (max-width: 768px) {
    width: 100%; /* ✅ full width on mobile */
    padding: 2rem 1rem;
    align-items: center;
    text-align: center;
  }
`;

export const RightSection = styled(Box)`
  flex: 1;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
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
  color: ${colour_orange};

  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 1245px) {
    font-size: 0.8rem;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  font-size: 1rem;
  transition: 0.3s ease;
  color: ${colour_white};

  &:hover {
    color: ${colour_orange};
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 0.9rem;
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

  @media (max-width: 768px) {
    flex-direction: column; /* ✅ stack fields */
  }
`;
