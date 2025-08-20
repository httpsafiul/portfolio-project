import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import {
    CardContainer,
    LeftSection,
    TrophyIcon,
    Title,
    Description,
    RightSection
} from "./Styles/AchievementCard.styled";
import { Box, Typography, Link, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const sliderVariants = {
    incoming: direction => ({
        x: direction > 0 ? "100%" : "-100%",
        scale: 1.05,
        opacity: 0
    }),
    active: { x: 0, scale: 1, opacity: 1 },
    exit: direction => ({
        x: direction > 0 ? "-100%" : "100%",
        scale: 1,
        opacity: 0.2
    })
};

const sliderTransition = {
    duration: 0.8,
    ease: [0.56, 0.03, 0.12, 1.04]
};

const AchievementsCard = ({
    competitionName,
    description,
    images,
    emoji,
    team,
    date,
    position
}) => {
    const [[imageCount, direction], setImageCount] = useState([0, 0]);
    const activeImageIndex = wrap(0, images.length, imageCount);

    const swipeToImage = swipeDirection => {
        setImageCount([imageCount + swipeDirection, swipeDirection]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            swipeToImage(1);
        }, 3000);
        return () => clearInterval(interval);
    }, [imageCount]);

    const dragEndHandler = dragInfo => {
        const draggedDistance = dragInfo.offset.x;
        const swipeThreshold = 50;
        if (draggedDistance > swipeThreshold) {
            swipeToImage(-1);
        } else if (draggedDistance < -swipeThreshold) {
            swipeToImage(1);
        }
    };

    return (
        <CardContainer>
            <LeftSection>
                <TrophyIcon>{emoji}</TrophyIcon>

                {/* Position */}
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: "bold",
                        color: "var(--colour_primary)",
                        fontSize: "1.4rem", // increased size
                        marginBottom: "0px",
                        fontFamily: "Libre Caslon Text",
                    }}
                >
                    {position}
                </Typography>

                {/* Competition Title */}
                <Title>{competitionName}</Title>

                {/* Date */}
                <Typography
                    variant="body2"
                    sx={{
                        color: "#888",
                        fontStyle: "italic",
                        marginBottom: "8px",
                        fontSize: "1.2rem",
                        fontFamily: "Libre Caslon Text",
                    }}
                >
                    {date}
                </Typography>

                <Box sx={{ marginBottom: "12px" }}>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "1.1rem",
                                fontWeight: "bold",
                                marginBottom: "4px",
                                fontFamily: "Libre Caslon Text",
                            }}
                        >
                            My Team:
                        </Typography>
                    </div>

                    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "6px" }}>
                        {team.map((member, index) => (
                            <React.Fragment key={index}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    spacing={0.5}
                                >
                                    <Link
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="hover"
                                        sx={{ color: "#0077b5", fontWeight: 500, fontSize: "1.1rem" }}
                                    >
                                        {member.name}
                                    </Link>
                                    <Link
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ color: "#0077b5" }}
                                    >
                                        <LinkedInIcon fontSize="medium" /> {/* bigger icon */}
                                    </Link>
                                </Stack>
                                {index < team.length - 1 && (
                                    <Typography variant="body2" sx={{ color: "#888", fontFamily: "Libre Caslon Text", }}>|</Typography>
                                )}
                            </React.Fragment>
                        ))}
                    </Box>
                </Box>

                {/* Description */}
                <Description>{description}</Description>
            </LeftSection>

            {/* Carousel */}
            <RightSection>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={imageCount}
                        style={{
                            backgroundImage: `url(${images[activeImageIndex].imageSrc})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "100%",
                            width: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0
                        }}
                        custom={direction}
                        variants={sliderVariants}
                        initial="incoming"
                        animate="active"
                        exit="exit"
                        transition={sliderTransition}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                    />
                </AnimatePresence>
            </RightSection>
        </CardContainer>
    );
};

export default AchievementsCard;
