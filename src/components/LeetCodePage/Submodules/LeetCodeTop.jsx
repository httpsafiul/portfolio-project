import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import {
    Container,
    Heading,
    Subheading,
    StatCard,
    StatGreen,
    StatGrey
} from "../Styles/LeetCodeTop.styled";

const LeetCodeTop = () => {
    return (
        <Container>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Heading>LeetCode Dashboard</Heading>
                <Subheading style={{ marginTop: "1rem" }}>
                    A structured pathway to excel in data structures and algorithms with regular practice and smart problem-solving.
                </Subheading>
            </div>
            <Grid container spacing={3} justifyContent="center" sx={{ marginTop: "2rem" }}>
                <Grid item xs={12} sm={4} >
                    <StatCard elevation={2}>
                        <CardContent>
                            <StatGreen>Daily</StatGreen>
                            <StatGrey>Challenges</StatGrey>
                        </CardContent>
                    </StatCard>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <StatCard elevation={2}>
                        <CardContent>
                            <StatGreen>Measured</StatGreen>
                            <StatGrey>Growth</StatGrey>
                        </CardContent>
                    </StatCard>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <StatCard elevation={2}>
                        <CardContent>
                            <StatGreen>Targeted</StatGreen>
                            <StatGrey>Learning</StatGrey>
                        </CardContent>
                    </StatCard>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LeetCodeTop;
