import styled from 'styled-components';
import { colour_background } from '../../../Common/colours';

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Default: 1 per row on small screens */
  gap: 2rem;
  padding: 40px 8%;
  background-color: ${colour_background};



  /* Reduce padding on mobile */
  @media (max-width: 600px) {
    padding: 2rem;
  }

  margin: 0 auto;
`;
