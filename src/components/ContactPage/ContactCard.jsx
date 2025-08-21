import React, { useState } from "react";
import {
    CardContainer,
    LeftSection,
    RightSection,
    SocialBox,
    SocialHeading,
    SocialLink,
    ToggleContainer,
    ToggleButton1,
    ToggleButton2,
    Intro,
} from "./Styles/ContactCard.styled";

import {
    Email,
    LinkedIn,
    GitHub,
    Instagram,
    ContentCopy,
    Message,
} from "@mui/icons-material";
import Face6Icon from "@mui/icons-material/Face6";
import XIcon from '@mui/icons-material/X';

import {
    Typography,
    IconButton,
    Snackbar,
} from "@mui/material";
import { colour_white } from "../../Common/colours";
import MessageForm from "./MessageForm";
import AnonymousMessageForm from "./AnonymousMessageForm";

const ContactCard = () => {
    const [copied, setCopied] = useState(false);
    const [activeForm, setActiveForm] = useState("conversation"); // default active form

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
                            sx={{ cursor: "pointer", fontFamily: "Libre Caslon Text" }}
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
                        <Typography sx={{ fontFamily: "Libre Caslon Text" }} variant="body2">
                            linkedin.com/in/safiulhaque
                        </Typography>
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
                        <Typography sx={{ fontFamily: "Libre Caslon Text" }} variant="body2">
                            github.com/httpsafiul
                        </Typography>
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
                        <Typography sx={{ fontFamily: "Libre Caslon Text" }} variant="body2">
                            instagram.com/httpsafiul
                        </Typography>
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
                        <Typography sx={{ fontFamily: "Libre Caslon Text" }} variant="body2">
                            x.com/23Safiul
                        </Typography>
                    </SocialLink>
                </SocialBox>
            </LeftSection>

            {/* RIGHT SECTION */}
            <RightSection>
                <ToggleContainer>
                    <ToggleButton2
                        active={activeForm === "conversation"}
                        onClick={() => setActiveForm("conversation")}
                    >
                        Start Conversation <Message fontSize="small" style={{ marginLeft: "8px" }} />
                    </ToggleButton2>
                    <ToggleButton1
                        active={activeForm === "anonymous"}
                        onClick={() => setActiveForm("anonymous")}
                    >
                        Anonymous Message <Face6Icon fontSize="small" style={{ marginLeft: "8px" }} />
                    </ToggleButton1>
                </ToggleContainer>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Intro>
                        If you've come this far, please leave a message for me :)
                    </Intro>
                </div>

                {activeForm === "anonymous" ? (
                    <AnonymousMessageForm />
                ) : (
                    <MessageForm />
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
