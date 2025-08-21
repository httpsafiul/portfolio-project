import styled from "styled-components";
import { Card, Box } from "@mui/material";
import { colour_orange, colour_white, colour_green, colour_background } from "../../../Common/colours";
import bg from "../../../assets/Hero/bg.png";

export const CardContainer = styled(Card)`
  width: 75%;
  min-height: 500px;
  display: flex;
  border-radius: 20px !important;
  overflow: hidden;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.12) !important;

  @media (max-width: 1150px) {
    width: 80%;
  }
  @media (max-width: 830px) {
    flex-direction: column;
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

  @media (max-width: 830px) {
    gap: 1.2rem;
  }

  @media (max-width: 1245px) {
    width: 40%;
  }

  @media (max-width: 830px) {
    width: 100%; /* ✅ full width on mobile */
    padding: 2rem 1rem;
    align-items: center;
    text-align: center;
  }
`;

export const RightSection = styled(Box)`
  flex: 1;
  padding: 0; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 830px) {
    padding: 0;
  }
`;

export const ToggleContainer = styled(Box)`
  display: flex;
  width: 100%;
  height: 50px;
`;

export const ToggleButton1 = styled.button`
  flex: 1;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.active ? colour_orange : colour_background)};
  color: ${(props) => (props.active ? colour_green : colour_green)};
  border: 2px solid ${colour_green};
  border-radius: 0px 20px 20px 0px;

  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 830px) {
    border-radius: 0px 0px 20px 0px;
  }
  @media (max-width: 720px) {
    font-size: 0.8rem;
  }
`;

export const ToggleButton2 = styled.button`
  flex: 1;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.active ? colour_orange : colour_background)};
  color: ${(props) => (props.active ? colour_green : colour_green)};
  border: 2px solid ${colour_green};
  border-radius: 0px 0px 0px 20px;

  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 720px) {
    font-size: 0.8rem;
  }
`;

export const SocialBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 5px;
  @media (max-width: 830px) {
    margin: 0px;
  }
`;

export const SocialHeading = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${colour_orange};

  @media (max-width: 830px) {
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

  @media (max-width: 830px) {
    justify-content: center;
    font-size: 0.9rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 0rem;
  padding: 1rem 3rem;

  @media (max-width: 830px) {
    padding: 1.5rem 1rem;
  }
`;

export const InputRow = styled(Box)`
  display: flex;
  gap: 1rem;
  width: 100%;

  @media (max-width: 830px) {
    flex-direction: column;
  }
`;

export const Intro = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: ${colour_green};
  text-align: center;
  margin-top: 1.5rem;
  margin-left: 10px;
  margin-right: 10px;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;
