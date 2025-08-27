import styled from "styled-components";
import { Card, Paper } from "@mui/material";

export const StatsContainer = styled.div`
  width: 60%;
  margin: 0.5rem auto 0rem auto;
  padding: 1.5rem;
  border-radius: 16px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1060px) {
    width: 70%;
  }
  @media (max-width: 910px) {
    width: 80%;
  }
  @media (max-width: 795px) {
    width: 90%;
  }
  @media (max-width: 520px) {
    width: 100%;
  }
`;

export const Header = styled(Paper)`
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
  @media (max-width: 780px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 520px) {
    width: 30px;
    height: 30px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  @media (max-width: 780px) {
    font-size: 1rem;
  }
  @media (max-width: 520px) {
    font-size: 0.8rem;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  @media (max-width: 780px) {
    font-size: 0.8rem;
  }
  @media (max-width: 520px) {
    font-size: 0.7rem;
  }
`;

export const HeaderRight = styled.div``;

export const Content = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const LeftBox = styled(Paper)`
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

export const RightBox = styled(Paper)`
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

export const ChartWrapper = styled.div`
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatsSummary = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const StatBox = styled.div`
  width: 50%;
  background-color: #f3f6f9ff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:first-child {
    margin-right: 5px;
  }

  &:last-child {
    margin-left: 5px;
  }
`;

export const StatValue = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  @media (max-width: 1371px) {
    font-size: 1rem;
  }
`;

export const StatLabel = styled.div`
  font-size: 0.9rem;
  @media (max-width: 1371px) {
    font-size: 0.8rem;
  }
`;

// NEW - Loading container
export const LoadingPaper = styled(Paper)`
  width: 100%;
  border-radius: 12px;
  padding: 2rem;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;
