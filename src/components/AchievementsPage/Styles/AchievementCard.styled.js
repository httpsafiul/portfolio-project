import styled from "styled-components";
import { colour_primary } from '../../../Common/colours';

export const CardContainer = styled.div`
  display: flex;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  /* height: 450px;  */
  width: 85%;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  padding: 30px;
  background: var(--colour_background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TrophyIcon = styled.div`
  font-size: 6rem;
  margin-bottom: 0px;
`;

export const Title = styled.h3`
  color: var(--colour_primary);
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  color: ${colour_primary};
`;

export const Description = styled.p`
  color: #444;
  text-align: center;
  font-size: 1rem;
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
