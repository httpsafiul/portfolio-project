import styled from 'styled-components';
import { colour_background } from '../../../../Common/colours';

export const EducationMainContainer = styled.section`
  width: 100%;
  background-color: ${colour_background};
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
`;
