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
                <Heading>LeetCode Progress</Heading>
                <Subheading style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
                    Systematic approach to mastering data structures and algorithms through
                    consistent practice and strategic problem-solving.
                </Subheading>
            </div>
            <Grid container spacing={3} justifyContent="center" sx={{ marginTop: "2rem" }}>
                <Grid item xs={12} sm={4}>
                    <StatCard elevation={2}>
                        <CardContent>
                            <StatGreen>Daily</StatGreen>
                            <StatGrey>Practice</StatGrey>
                        </CardContent>
                    </StatCard>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <StatCard elevation={2}>
                        <CardContent>
                            <StatGreen>Tracked</StatGreen>
                            <StatGrey>Progress</StatGrey>
                        </CardContent>
                    </StatCard>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <StatCard elevation={2}>
                        <CardContent>
                            <StatGreen>Focused</StatGreen>
                            <StatGrey>Learning</StatGrey>
                        </CardContent>
                    </StatCard>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LeetCodeTop;
