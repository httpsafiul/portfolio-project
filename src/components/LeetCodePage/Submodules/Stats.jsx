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
    StatRow
} from "../Styles/Stats.styled";

import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import leetcode from '../../../assets/Leetcode/leetcode.png';
import DonutChart from "./DonutChart";
import { fetchLeetCodeStats } from "./leetcodeService";

const Stats = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        fetchLeetCodeStats("safiiiii", setStats);
    }, []);

    if (!stats) {
        return <div style={{ textAlign: "center", padding: "2rem" }}>Loading stats...</div>;
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
            <Header>
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
                        sx={{
                            borderRadius: "20px",
                            textTransform: "none",
                            backgroundColor: "#F44800",
                            "&:hover": {
                                backgroundColor: "#d63200", // darker shade on hover
                            }
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
                <LeftBox>
                    <SectionTitle>Progress Overview</SectionTitle>
                    <div style={{ height: "220px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <DonutChart data={chartData} />
                    </div>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                        <div style={{ width: "50%", marginRight: "5px", backgroundColor: "#f3f6f9ff", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ fontWeight: "bold", fontSize: "1.3rem" }}>{stats.totalSolved}</div>
                            <div style={{ fontSize: "0.9rem" }}>Problems Solved</div>
                        </div>
                        <div style={{ width: "50%", marginLeft: "5px", backgroundColor: "#f3f6f9ff", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ fontWeight: "bold", fontSize: "1.3rem" }}>{stats.ranking.toLocaleString()}</div>
                            <div style={{ fontSize: "0.9rem" }}>Rank</div>
                        </div>
                    </div>
                </LeftBox>

                {/* Right Box */}
                <RightBox>
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
