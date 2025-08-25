import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { Blurhash } from "react-blurhash";
import {
    CardContainer,
    LeftSection,
    TrophyIcon,
    Title,
    Description,
    RightSection
} from "./Styles/AchievementCard.styled";
import { Box, Typography, Chip, Stack } from "@mui/material";
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
    const [imageLoaded, setImageLoaded] = useState(false);

    const swipeToImage = swipeDirection => {
        setImageCount([imageCount + swipeDirection, swipeDirection]);
        setImageLoaded(false);
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
        <CardContainer elevation={2}>
            <LeftSection>
                <TrophyIcon>{emoji}</TrophyIcon>

                <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: "bold",
                        color: "var(--colour_primary)",
                        fontSize: "1.1rem",
                        marginBottom: "0px",
                        fontFamily: "Libre Caslon Text",
                    }}
                >
                    {position}
                </Typography>

                <Title>{competitionName}</Title>

                <Typography
                    variant="body2"
                    sx={{
                        color: "#888",
                        fontStyle: "italic",
                        marginBottom: "8px",
                        fontSize: "1.1rem",
                        fontFamily: "Libre Caslon Text",
                    }}
                >
                    {date}
                </Typography>

                {/* My Team Section */}
                <Box sx={{ marginBottom: "12px", width: "100%", textAlign: "center" }}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: "1.1rem",
                            fontWeight: "bold",
                            marginBottom: "8px",
                            fontFamily: "Libre Caslon Text",
                        }}
                    >
                        My Team:
                    </Typography>

                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="center"
                        gap={"10px"}
                    >
                        {team.map((member, index) => (
                            <Chip
                                key={index}
                                label={member.name}
                                icon={<LinkedInIcon />}
                                variant="outlined"
                                color="primary"
                                clickable
                                component="a"
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="medium"
                                sx={{
                                    fontFamily: "Libre Caslon Text",
                                    fontSize: "0.95rem",
                                }}
                            />
                        ))}
                    </Stack>
                </Box>

                <Description>{description}</Description>
            </LeftSection>

            {/* Carousel */}
            <RightSection>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={imageCount}
                        style={{
                            height: "100%",
                            width: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
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
                    >
                        {!imageLoaded && (
                            <Blurhash
                                hash={images[activeImageIndex].imageHash}
                                width={"100%"}
                                height={"100%"}
                                resolutionX={32}
                                resolutionY={32}
                                punch={1}
                            />
                        )}
                        <img
                            src={images[activeImageIndex].imageSrc}
                            alt={`slide-${activeImageIndex}`}
                            style={{
                                objectFit: "cover",
                                height: "100%",
                                width: "100%",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                opacity: imageLoaded ? 1 : 0,
                                transition: "opacity 0.5s ease-in-out",
                            }}
                            onLoad={() => setImageLoaded(true)}
                        />
                    </motion.div>
                </AnimatePresence>
            </RightSection>
        </CardContainer>
    );
};

export default AchievementsCard;
