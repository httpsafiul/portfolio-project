import styled from "styled-components";
import { Card } from "@mui/material";

export const StatsContainer = styled.div`
  width: 50%;
  margin: 2rem auto;
  padding: 1.5rem;
  border-radius: 16px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
    @media (max-width: 780px) {
    width: 90%;
  }
`;

export const Header = styled(Card)`
  border-radius: 12px;
  background: #fafafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #666;
`;

export const HeaderRight = styled.div``;

export const Content = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const LeftBox = styled(Card)`
  flex: 1;
  padding: 1rem;
  border-radius: 12px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const RightBox = styled(Card)`
  flex: 1;
  padding: 1rem;
  border-radius: 12px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

export const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1rem;
  border-radius: 10px;
  background: ${({ bg }) => bg};
`;
