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
import { colour_green, colour_orange } from "../../../Common/colours";

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
          <CircularProgress sx={{ color: colour_orange }} />
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
              backgroundColor: colour_green,
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: colour_orange,
                color: colour_green
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
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <SectionTitle>By Difficulty</SectionTitle>
        </div>

          <StatRow bg="rgb(132, 210, 197, 0.3)">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FiberManualRecordIcon fontSize="small" style={{ color: "#186F65" }} />
              <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Easy</div>
            </div>
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>{stats.easySolved}</div>
          </StatRow>

          <StatRow bg="rgb(228, 201, 136, 0.3)">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FiberManualRecordIcon fontSize="small" style={{ color: "#e3b235ff" }} />
              <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Medium</div>
            </div>
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>{stats.mediumSolved}</div>
          </StatRow>

          <StatRow bg="rgb(194, 118, 100, 0.3)">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FiberManualRecordIcon fontSize="small" style={{ color: "#B2533E" }} />
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
