import styled from "styled-components";
import { colour_background } from "../../../Common/colours";

export const ContactContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 5.5rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* align-items: center; */
  background: ${colour_background};
  
  @media (max-width: 830px) {
    padding: 3rem 0;
  }
  
`;
