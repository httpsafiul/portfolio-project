import styled from 'styled-components';
import { colour_background } from '../../../Common/colours';

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Default: 1 per row on small screens */
  gap: 2rem;
  padding: 8rem;
  background-color: ${colour_background};

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 per row on large screens */
  }

  /* Reduce padding on mobile */
  @media (max-width: 600px) {
    padding: 2rem;
  }

  margin: 0 auto;
`;
