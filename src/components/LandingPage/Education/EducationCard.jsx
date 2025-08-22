// EducationCard.jsx
import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import {
  CardWrapper,
  CardImageWrapper,
  CardImage,
  BlurhashWrapper,
  CardText,
  CardHoverContent,
} from "./Styles/EducationCard.styled";
import { colour_orange } from "../../../Common/colours";
import { Typography } from "@mui/material";

const EducationCard = ({
  image,
  imageHash,
  institute,
  university,
  year,
  marks,
  frontHeading,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!image) return;

    setLoaded(false);
    const img = new Image();
    img.src = image;
    img.onload = () => setLoaded(true);
  }, [image]);

  return (
    <CardWrapper>
      <CardImageWrapper>
        <BlurhashWrapper loaded={loaded}>
          {imageHash && (
            <Blurhash hash={imageHash} width="100%" height="100%" punch={1} />
          )}
        </BlurhashWrapper>

        <CardImage img={image} loaded={loaded} />
      </CardImageWrapper>

      <CardText>{frontHeading}</CardText>

      <CardHoverContent>
        <Typography
          variant="h5"
          sx={{
            color: colour_orange,
            fontWeight: 600,
            textAlign: "center",
            mb: 1,
            fontSize: { xs: "0.9rem", sm: "1.3rem", md: "1.3rem" },
            fontFamily: "Libre Caslon Text",
          }}
        >
          {institute}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            textAlign: "center",
            mb: 0.5,
            fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.1rem" },
            fontFamily: "Libre Caslon Text",
          }}
        >
          {university}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            textAlign: "center",
            mb: 0.5,
            fontSize: { xs: "0.75rem", sm: "1.1rem", md: "1.0rem" },
            fontFamily: "Libre Caslon Text",
          }}
        >
          {year}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            textAlign: "center",
            fontSize: { xs: "0.75rem", sm: "1.1rem", md: "1.0rem" },
            fontFamily: "Libre Caslon Text",
          }}
        >
          {marks}
        </Typography>
      </CardHoverContent>
    </CardWrapper>
  );
};

export default EducationCard;
