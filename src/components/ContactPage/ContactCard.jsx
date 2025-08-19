import React, { useState } from "react";
import {
    CardContainer,
    LeftSection,
    RightSection,
    SocialBox,
    SocialHeading,
    SocialLink,
    FormContainer,
    InputRow,
} from "./Styles/ContactCard.styled";

import {
    Email,
    LinkedIn,
    GitHub,
    Instagram,
    ContentCopy, // ✅ new icon
    Send,
} from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';

import {
    Box,
    Button,
    TextField,
    Typography,
    IconButton,
    Snackbar,
    Alert,
} from "@mui/material";
import { colour_green, colour_orange, colour_white } from "../../Common/colours";
import sendEmail from "../../Conf/Emailjs.conf";

const ContactCard = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [copied, setCopied] = useState(false);
    const [sending, setSending] = useState(false);
    const [feedback, setFeedback] = useState(0);

    const handleSend = () => {
        if (!name || !email || !message) {
            alert("Please fill in all fields before sending.");
            return;
        }
        sendEmail(name, message, email, setSending, setFeedback);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText("mdsafiulhaque4@gmail.com");
        setCopied(true);
    };

    return (
        <CardContainer>
            {/* LEFT SECTION */}
            <LeftSection>
                <SocialBox>
                    <SocialHeading>
                        <Email fontSize="small" /> Email Me
                    </SocialHeading>
                    <SocialLink as="div" onClick={handleCopy}>
                        <Typography
                            variant="body2"
                            sx={{ cursor: "pointer" }}
                        >
                            mdsafiulhaque4@gmail.com
                        </Typography>
                        <IconButton
                            size="small"
                            onClick={handleCopy}
                            sx={{ color: colour_white }}
                        >
                            <ContentCopy fontSize="small" />
                        </IconButton>
                    </SocialLink>
                </SocialBox>

                <SocialBox>
                    <SocialHeading>
                        <LinkedIn fontSize="small" /> Connect on LinkedIn
                    </SocialHeading>
                    <SocialLink
                        href="https://linkedin.com/in/safiulhaque"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Typography variant="body2">linkedin.com/in/safiulhaque</Typography>
                    </SocialLink>
                </SocialBox>

                <SocialBox>
                    <SocialHeading>
                        <GitHub fontSize="small" /> Explore GitHub
                    </SocialHeading>
                    <SocialLink
                        href="https://github.com/httpsafiul"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Typography variant="body2">github.com/httpsafiul</Typography>
                    </SocialLink>
                </SocialBox>

                <SocialBox>
                    <SocialHeading>
                        <Instagram fontSize="small" /> Follow on Instagram
                    </SocialHeading>
                    <SocialLink
                        href="https://www.instagram.com/httpsafiul/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Typography variant="body2">https://www.instagram.com/httpsafiul</Typography>
                    </SocialLink>
                </SocialBox>

                <SocialBox>
                    <SocialHeading>
                        <XIcon fontSize="small" /> Connect on X
                    </SocialHeading>
                    <SocialLink
                        href="https://x.com/23Safiul"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Typography variant="body2">https://x.com/23Safiul</Typography>
                    </SocialLink>
                </SocialBox>
            </LeftSection>

            {/* RIGHT SECTION */}
            <RightSection>
                <Typography variant="h5" color={colour_green} gutterBottom>
                    If you've come so far, please leave a message for me :)
                </Typography>
                <FormContainer>
                    <InputRow>
                        <TextField
                            label="Enter your name"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <TextField
                            label="Enter your email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </InputRow>

                    <TextField
                        label="Your message"
                        variant="outlined"
                        multiline
                        rows={6}
                        fullWidth
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />

                    <Box textAlign="right">
                        {sending ?
                            <Button loading variant="outlined" loadingPosition="start">
                                Sending
                            </Button>
                            :
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: colour_green,
                                    color: colour_white,
                                    "&:hover": { backgroundColor: colour_orange, color: colour_green },
                                    fontWeight: "bold",
                                    fontFamily: "Libre Caslon Text",
                                }}
                                onClick={handleSend}
                                startIcon={<Send />}
                            >
                                Send
                            </Button>
                        }
                    </Box>
                </FormContainer>
                {feedback === 0 ? (
                    <></>
                ) : (
                    <>
                        {feedback === 1 ? (
                            <Alert sx={{ marginTop: "20px" }} severity="success">
                                Message sent successfully! Check your email for confirmation.
                            </Alert>
                        ) : (
                            <Alert sx={{ marginTop: "20px" }} severity="error">
                                This is an error Alert.
                            </Alert>
                        )}
                    </>
                )}

            </RightSection>

            {/* Snackbar for copy success */}
            <Snackbar
                open={copied}
                autoHideDuration={2000}
                onClose={() => setCopied(false)}
                message="Email copied to clipboard!"
            />
        </CardContainer>
    );
};

export default ContactCard;
