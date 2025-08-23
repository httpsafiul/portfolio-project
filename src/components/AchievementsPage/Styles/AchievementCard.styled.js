import styled from "styled-components";
import { colour_green, colour_primary } from '../../../Common/colours';

export const CardContainer = styled.div`
  display: flex;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  /* height: 450px;  */
  width: 80%;
  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 815px) {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  padding: 30px;
  /* background: var(--colour_background); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1100px) {
    padding: 30px 15px;
  }
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

export const TrophyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  text-align: center;
  font-size: 1.2rem;
  color: ${colour_green};
`;

export const Description = styled.p`
  color: #444;
  text-align: center;
  font-size: 0.95rem;
  margin-top: 12px;
  line-height: 1.5;
`;

export const RightSection = styled.div`
  flex: 1; 
  position: relative;
  overflow: hidden;
  min-height: 350px; /* Match card height */
  @media (max-width: 768px) {
    min-height: 250px;
  }
`;
