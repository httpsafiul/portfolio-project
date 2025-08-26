import React from "react";
import { Grid, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FunctionsIcon from "@mui/icons-material/Functions";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ScheduleIcon from "@mui/icons-material/Schedule";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
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
        {/* Current Focus */}
        <Grid item xs={12} md={5}>
          <CardWrapper elevation={2}>
            <CardContent>
              <CardHeading sx={{ fontWeight: "bold" }}>
                Current Focus
              </CardHeading>
              <ListItem>
                <IconWrapper>
                  <CheckCircleIcon />
                </IconWrapper>
                <ItemText>Arrays and String manipulation problems</ItemText>
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <FunctionsIcon />
                </IconWrapper>
                <ItemText>Dynamic Programming pattern recognition</ItemText>
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <AccountTreeIcon />
                </IconWrapper>
                <ItemText>Binary Trees and Graph traversal algorithms</ItemText>
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <ScheduleIcon />
                </IconWrapper>
                <ItemText>Maintaining daily coding consistency</ItemText>
              </ListItem>
            </CardContent>
          </CardWrapper>
        </Grid>

        {/* Recent Progress */}
        <Grid item xs={12} md={5}>
          <CardWrapper elevation={2}>
            <CardContent>
              <CardHeading sx={{ fontWeight: "bold" }}>
                Recent Progress
              </CardHeading>
              <ListItem>
                <IconWrapper>
                  <TaskAltIcon />
                </IconWrapper>
                <ItemText>
                  Established consistent daily solving routine
                </ItemText>
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <TrendingUpIcon />
                </IconWrapper>
                <ItemText>Built solid foundation in core algorithms</ItemText>
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <EmojiEventsIcon />
                </IconWrapper>
                <ItemText>Actively participating in weekly contests</ItemText>
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <SpeedIcon />
                </IconWrapper>
                <ItemText>Improved problem-solving efficiency</ItemText>
              </ListItem>
            </CardContent>
          </CardWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Progress;
