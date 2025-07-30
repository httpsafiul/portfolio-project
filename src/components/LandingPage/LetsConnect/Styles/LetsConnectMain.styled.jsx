import styled from 'styled-components';
import { colour_primary, colour_background } from '../../../../Common/colours';
import { Button } from '@mui/material';

export const ConnectSection = styled.section`
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

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  flex-wrap: wrap;
  max-width: 1000px;
  width: 100%;
  justify-content: center;
`;

export const ProfilePhoto = styled.img`
  width: 290px;
  height: 290px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* flex: 1; */
`;

export const LinkItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LinkHeading = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colour_primary};
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
`;

export const LinkText = styled.p`
  font-size: 1rem;
  color: #444;
  margin: 0;

  a {
    text-decoration: none;
    color: #444;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CopyButton = styled(Button)`
  && {
    text-transform: none;
    background-color: ${colour_primary};
    color: white;
    font-size: 0.85rem;
    padding: 4px 12px;
    border-radius: 6px;
    &:hover {
      background-color: #5e2f00;
    }
  }
`;
