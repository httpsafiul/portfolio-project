import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const LoadingScreen = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f9f9f9"
      gap={2}
    >
      <Typography variant="h6" color="textPrimary">
        Please wait
      </Typography>
      <Box sx={{ width: "20%" }}>
        <LinearProgress color="success" />
      </Box>
    </Box>
  );
};

export default LoadingScreen;
