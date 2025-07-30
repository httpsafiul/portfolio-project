import styled from 'styled-components';
import { colour_background } from '../../../Common/colours/';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${colour_background};
  padding: 1.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: #444;;
  text-align: center;
  margin: 0;
`;
