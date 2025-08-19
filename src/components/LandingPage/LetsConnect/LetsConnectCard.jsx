import React from "react";
import {
    CardContainer,
    Heading,
    Description,
    ConnectButton
} from "./Styles/LetsConnectCard.styled";
import { colour_green, colour_orange, colour_white } from "../../../Common/colours";
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate } from "react-router-dom";

const LetsConnectCard = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/contact"); // navigates to your contact page
    };

    return (
        <CardContainer>
            <Heading>
                Are You Ready to Kickstart Your Project with a Touch of Magic?
            </Heading>
            <Description>
                Reach out and let’s bring your ideas to life ✨.
                I’m open to full-time and part-time opportunities to innovate, design, and deliver exceptional solutions.
            </Description>
            <ConnectButton
                variant="contained"
                onClick={handleNavigate}
                endIcon={<ChatIcon />}
                sx={{
                    backgroundColor: colour_white,
                    color: colour_green,
                    '&:hover': { backgroundColor: colour_orange, color: colour_green },
                    fontWeight: "bold",
                    fontFamily: "Libre Caslon Text",
                }}
            >
                Let’s Talk
            </ConnectButton>
        </CardContainer>
    );
};

export default LetsConnectCard;
