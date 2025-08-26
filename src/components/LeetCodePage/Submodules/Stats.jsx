import React, { useEffect, useState } from "react";
import {
  StatsContainer,
  Header,
  HeaderLeft,
  Logo,
  Title,
  Subtitle,
  HeaderRight,
  Content,
  LeftBox,
  RightBox,
  SectionTitle,
  StatRow,
  ChartWrapper,
  StatsSummary,
  StatBox,
  StatValue,
  StatLabel,
  LoadingPaper
} from "../Styles/Stats.styled";

import { Button, CircularProgress } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import leetcode from "../../../assets/LeetCode/leetcode.png";
import DonutChart from "./DonutChart";
import { fetchLeetCodeStats } from "./leetcodeService";

const Stats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchLeetCodeStats("safiiiii", setStats);
  }, []);

  if (!stats) {
    return (
      <StatsContainer>
        <LoadingPaper elevation={2}>
          <h3 style={{ margin: 0 }}>LeetCode Status is Loading</h3>
          <CircularProgress sx={{ color: "#d63200" }} />
        </LoadingPaper>
      </StatsContainer>
    );
  }

  // prepare data for DonutChart
  const chartData = {
    easy: stats.easySolved,
    medium: stats.mediumSolved,
    hard: stats.hardSolved,
  };

  return (
    <StatsContainer>
      {/* Header */}
      <Header elevation={2}>
        <HeaderLeft>
          <Logo src={leetcode} alt="LeetCode Logo" />
          <div>
            <Title>Safiul's LeetCode Journey</Title>
            <Subtitle style={{ marginTop: "5px" }}>@safiiiii</Subtitle>
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            size="small"
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              backgroundColor: "#F44800",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#d63200", // darker shade on hover
              },
            }}
            onClick={() => window.open("https://leetcode.com/safiiiii/", "_blank")}
          >
            Profile
          </Button>
        </HeaderRight>
      </Header>

      {/* Content */}
      <Content>
        {/* Left Box */}
        <LeftBox elevation={2}>
          <SectionTitle>Progress Overview</SectionTitle>

          <ChartWrapper>
            <DonutChart data={chartData} />
          </ChartWrapper>

          <StatsSummary>
            <StatBox>
              <StatValue>{stats.totalSolved}</StatValue>
              <StatLabel>Problems Solved</StatLabel>
            </StatBox>
            <StatBox>
              <StatValue>{stats.ranking.toLocaleString()}</StatValue>
              <StatLabel>Rank</StatLabel>
            </StatBox>
          </StatsSummary>
        </LeftBox>

        {/* Right Box */}
        <RightBox elevation={2}>
          <SectionTitle>By Difficulty</SectionTitle>

          <StatRow bg="rgba(76, 175, 80, 0.2)">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FiberManualRecordIcon fontSize="small" style={{ color: "#4caf50" }} />
              <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Easy</div>
            </div>
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>{stats.easySolved}</div>
          </StatRow>

          <StatRow bg="rgba(255, 235, 59, 0.3)">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FiberManualRecordIcon fontSize="small" style={{ color: "#ffeb3b" }} />
              <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Medium</div>
            </div>
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>{stats.mediumSolved}</div>
          </StatRow>

          <StatRow bg="rgba(244, 67, 54, 0.3)">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FiberManualRecordIcon fontSize="small" style={{ color: "#f44336" }} />
              <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Hard</div>
            </div>
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>{stats.hardSolved}</div>
          </StatRow>
        </RightBox>
      </Content>
    </StatsContainer>
  );
};

export default Stats;
