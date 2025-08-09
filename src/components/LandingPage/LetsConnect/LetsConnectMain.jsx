import React from 'react';
import {
    ConnectSection,
    SectionHeading,
    ContentWrapper,
    ProfilePhoto,
    LinksWrapper,
    LinkItem,
    LinkHeading,
    LinkText,
} from './Styles/LetsConnectMain.styled';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; // Icon for external link
import { Email, LinkedIn, Instagram } from '@mui/icons-material';
import safi from '../../../assets/LetsConnect/safi.jpg';
import { IconButton } from '@mui/material';

const LetsConnectMain = () => {
    const handleCopy = () => {
        navigator.clipboard.writeText('mdsafiul@gmail.com');
        alert('Email copied to clipboard!');
    };

    return (
        <ConnectSection>
            <SectionHeading>Let's Connect?</SectionHeading>
            <ContentWrapper>
                {/* Profile Photo */}
                <ProfilePhoto src={safi} alt="Md Safiul Haque" />

                {/* Social Links */}
                <LinksWrapper>
                    {/* Email Section */}
                    <LinkItem>
                        <LinkHeading>
                            <Email fontSize="medium" /> &nbsp; Email Me
                        </LinkHeading>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <LinkText>mdsafiulhaque4@gmail.com</LinkText>
                            <IconButton onClick={handleCopy} aria-label="copy email">
                                <ContentCopyIcon />
                            </IconButton>
                        </div>
                    </LinkItem>

                    {/* LinkedIn Section */}
                    <LinkItem>
                        <LinkHeading>
                            <LinkedIn fontSize="medium" /> &nbsp; Connect on LinkedIn
                        </LinkHeading>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <LinkText>
                                <a
                                    href="https://www.linkedin.com/in/safiulhaque/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    linkedin.com/in/safiulhaque/
                                </a>
                            </LinkText>
                            <IconButton
                                component="a"
                                href="https://www.linkedin.com/in/safiulhaque/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="visit linkedin"
                                size="small"
                            >
                                <OpenInNewIcon fontSize="small" />
                            </IconButton>
                        </div>
                    </LinkItem>

                    {/* Instagram Section */}
                    <LinkItem>
                        <LinkHeading>
                            <Instagram fontSize="medium" /> &nbsp; DM on Instagram
                        </LinkHeading>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <LinkText>
                                <a
                                    href="https://www.instagram.com/httpsafiul"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    instagram.com/httpsafiul
                                </a>
                            </LinkText>
                            <IconButton
                                component="a"
                                href="https://www.instagram.com/httpsafiul"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="visit instagram"
                                size="small"
                            >
                                <OpenInNewIcon fontSize="small" />
                            </IconButton>
                        </div>
                    </LinkItem>
                </LinksWrapper>
            </ContentWrapper>
        </ConnectSection>
    );
};

export default LetsConnectMain;
