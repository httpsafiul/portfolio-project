import React from "react";
import { Grid, CardContent } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CodeIcon from "@mui/icons-material/Code";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SpeedIcon from "@mui/icons-material/Speed";

import {
  Container,
  CardWrapper,
  CardHeading,
  ListItem,
  IconWrapper,
  ItemText
} from "../Styles/Progress.styled";

const Progress = () => {
  return (
    <Container>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* Learning Focus */}
        <Grid item xs={12} md={5}>
          <CardWrapper elevation={2}>
            <CardContent>
              <CardHeading sx={{ fontWeight: "bold" }}>
                Learning Focus
              </CardHeading>
              <ListItem>
                <IconWrapper>
                  <LightbulbIcon />
                </IconWrapper>
                <ItemText>Mastering problem-solving strategies</ItemText>
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <PsychologyIcon />
                </IconWrapper>
                <ItemText>Strengthening logical and analytical skills</ItemText>
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <CodeIcon />
                </IconWrapper>
                <ItemText>Deep dive into recursion & backtracking</ItemText>
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <AutoGraphIcon />
                </IconWrapper>
                <ItemText>Exploring advanced data structures</ItemText>
              </ListItem>
            </CardContent>
          </CardWrapper>
        </Grid>

        {/* Achievements */}
        <Grid item xs={12} md={5}>
          <CardWrapper elevation={2}>
            <CardContent>
              <CardHeading sx={{ fontWeight: "bold" }}>
                Achievements
              </CardHeading>
              <ListItem>
                <IconWrapper>
                  <StarIcon />
                </IconWrapper>
                <ItemText>
                  Built solid foundation in core algorithms
                </ItemText>
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <WorkspacePremiumIcon />
                </IconWrapper>
                <ItemText>Earned badges for consistency & skills</ItemText>
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <TrendingUpIcon />
                </IconWrapper>
                <ItemText>Improved ranking in coding contests</ItemText>
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <SpeedIcon />
                </IconWrapper>
                <ItemText>Enhanced speed & accuracy under time</ItemText>
              </ListItem>
            </CardContent>
          </CardWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Progress;
