import styled from "styled-components";
import { colour_background } from '../../../Common/colours';

export const AchievementsContainer = styled.section`
  width: 100%;
  background: ${colour_background};
  padding: 40px 8%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
    @media (max-width: 768px) {
    padding: 40px 5%;
  }
`;

export const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: var(--colour_primary);
  margin-bottom: 40px;
  text-align: center;
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;
