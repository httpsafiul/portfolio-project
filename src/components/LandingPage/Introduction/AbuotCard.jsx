import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import {
  CardWrapper,
  CardImageWrapper,
  CardImageBackground,
  BlurhashWrapper,
  CardText,
  CardHoverContent
} from "./Styles/AbuotCard.styled";

const AboutCard = ({ image, imageHash, title, hoverText, frontHeading }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!image) return;

    setLoaded(false); 
    const img = new Image();
    img.src = image;

    img.onload = () => {
      setLoaded(true);
    };
  }, [image]);


  return (
    <CardWrapper>
      <CardImageWrapper>
        <BlurhashWrapper loaded={loaded}>
          {imageHash && (
            <Blurhash
              hash={imageHash}
              width={"100%"}
              height={"100%"}
              punch={1}
            />
          )}
        </BlurhashWrapper>

        <CardImageBackground img={image} loaded={loaded} />
      </CardImageWrapper>

      <CardText>{frontHeading}</CardText>

      <CardHoverContent>
        <p className="title">{title}</p>
        <p className="hoverText">{hoverText}</p>
      </CardHoverContent>
    </CardWrapper>
  );
};

export default AboutCard;
