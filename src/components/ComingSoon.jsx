import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Button, Paper, Grid, Divider } from "@mui/material";

// Define your custom colors
import { colour_background, colour_primary } from "../Common/colours";
import Navbar from "./Navbar/Navbar";

export default function ComingSoon() {
  const launchDate = new Date(2025, 9, 1, 10, 0, 0);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  function getTimeLeft() {
    const now = new Date();
    const diff = Math.max(0, launchDate - now);
    const sec = Math.floor(diff / 1000) % 60;
    const min = Math.floor(diff / (1000 * 60)) % 60;
    const hr = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return { days, hr, min, sec, finished: diff === 0 };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const re = /^\S+@\S+\.\S+$/;
    if (!re.test(email)) {
      setStatus("error");
      return;
    }
    const saved = JSON.parse(localStorage.getItem("comingSoonSubscribers") || "[]");
    saved.push({ email, at: new Date().toISOString() });
    localStorage.setItem("comingSoonSubscribers", JSON.stringify(saved));
    setStatus("success");
    setEmail("");
  }

  return (
    <>
    <Navbar active={""}/>
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: colour_background, color: "#fff", p: 3 }}>
      <Paper elevation={6} sx={{ p: 5, background: "rgba(255,255,255,0.05)", borderRadius: 3, maxWidth: 700, width: "100%", textAlign: "center" }}>
        <Typography sx={{color: colour_primary}} variant="h3" fontWeight={700} gutterBottom>
          Coming Soon!
        </Typography>
        <Typography variant="body1" color="gray" mb={4}>
          I’m working on something awesome. Launching soon — stay tuned!
        </Typography>

        <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)", mb: 4 }} />

        <Grid container spacing={2} justifyContent="center">
          <TimeCard label="Days" value={timeLeft.days} />
          <TimeCard label="Hours" value={timeLeft.hr} />
          <TimeCard label="Minutes" value={timeLeft.min} />
          <TimeCard label="Seconds" value={timeLeft.sec} />
        </Grid>

        {timeLeft.finished && (
          <Typography mt={2} color="success.main" fontWeight={500}>
            We’re live — refresh to see the site!
          </Typography>
        )}

        {/* <Box component="form" onSubmit={handleSubmit} mt={5}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2, input: { color: "white" }, fieldset: { borderColor: "rgba(255,255,255,0.3)" } }}
          />
          <Button variant="contained" fullWidth type="submit" sx={{ py: 1.5, backgroundColor: colour_primary, '&:hover': { backgroundColor: "#32408f" } }}>
            Notify Me
          </Button>
          {status === "success" && (
            <Typography mt={1} color="success.main" fontSize={14}>
              Thanks — you’ll be notified when the site launches.
            </Typography>
          )}
          {status === "error" && (
            <Typography mt={1} color="error.main" fontSize={14}>
              Please enter a valid email address.
            </Typography>
          )}
        </Box>

        <Typography variant="caption" display="block" mt={5} color="gray">
          © {new Date().getFullYear()} Md Safiul Haque — All rights reserved.
        </Typography> */}
      </Paper>
    </Box>
    </>
  );
}

function TimeCard({ label, value }) {
  return (
    <Grid item>
      <Paper sx={{ p: 2, minWidth: 80, background: "rgba(255,255,255,0.05)", textAlign: "center", borderRadius: 2 }}>
        <Typography variant="h5" fontWeight={600}>
          {String(value).padStart(2, "0")}
        </Typography>
        <Typography variant="caption" color="gray">
          {label}
        </Typography>
      </Paper>
    </Grid>
  );
}
