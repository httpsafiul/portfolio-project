import React from "react";
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
    Twitter,
    ArrowOutward,
    Send,
} from "@mui/icons-material";

import {
    Box,
    Button,
    TextField,
    Typography,
} from "@mui/material";
import { colour_green, colour_orange, colour_white } from "../../Common/colours";

const ContactCard = () => {
    return (
        <CardContainer>
            {/* LEFT SECTION */}
            <LeftSection>
                <SocialBox>
                    <SocialHeading>
                        <Email fontSize="small" /> Email Me
                    </SocialHeading>
                    <SocialLink
                        href="mailto:mdsafiulhaque4@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Typography variant="body2">mdsafiulhaque4@gmail.com</Typography>
                        <ArrowOutward fontSize="small" />
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
                        <ArrowOutward fontSize="small" />
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
                        <ArrowOutward fontSize="small" />
                    </SocialLink>
                </SocialBox>

                <SocialBox>
                    <SocialHeading>
                        <Instagram fontSize="small" /> Follow on Instagram
                    </SocialHeading>
                    <SocialLink
                        href="https://instagram.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Typography variant="body2">instagram.com/yourusername</Typography>
                        <ArrowOutward fontSize="small" />
                    </SocialLink>
                </SocialBox>

                <SocialBox>
                    <SocialHeading>
                        <Twitter fontSize="small" /> Connect on X
                    </SocialHeading>
                    <SocialLink
                        href="https://x.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Typography variant="body2">x.com/yourusername</Typography>
                        <ArrowOutward fontSize="small" />
                    </SocialLink>
                </SocialBox>
            </LeftSection>

            {/* RIGHT SECTION */}
            <RightSection>
                <Typography variant="h5" color={colour_green} gutterBottom>
                    Get in touch with me
                </Typography>
                <FormContainer>
                    <InputRow>
                        <TextField
                            label="Enter your name"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            label="Enter your email"
                            variant="outlined"
                            fullWidth
                        />
                    </InputRow>

                    <TextField
                        label="Your message"
                        variant="outlined"
                        multiline
                        rows={6}
                        fullWidth
                    />

                    <Box textAlign="right">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: colour_green,
                                color: colour_white,
                                '&:hover': { backgroundColor: colour_orange, color: colour_green },
                                fontWeight: "bold",
                                fontFamily: "Libre Caslon Text",
                            }}
                            startIcon={<Send />}
                        >
                            Send
                        </Button>
                    </Box>
                </FormContainer>
            </RightSection>
        </CardContainer>
    );
};

export default ContactCard;
