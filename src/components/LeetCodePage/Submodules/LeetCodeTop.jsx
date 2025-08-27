import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import {
    Container,
    Heading,
    Subheading,
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
        </Container>
    );
};

export default LeetCodeTop;
