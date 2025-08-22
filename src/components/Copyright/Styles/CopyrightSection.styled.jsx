import styled from 'styled-components';
import { colour_background } from '../../../Common/colours/';
import { colour_green, colour_orange, colour_white } from '../../../Common/colours';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${colour_green};
  padding: 1.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${colour_orange};
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: ${colour_white};;
  text-align: center;
  margin: 0;
`;
