import React from "react";
import {
  CardWrapper,
  CardImage,
  CardText,
  CardHoverContent
} from "./Styles/AbuotCard.styled";
import { colour_orange } from "../../../Common/colours";

const AboutCard = ({ image, title, hoverText, frontHeading }) => {
  return (
    <CardWrapper>
      <CardImage img={image} />
      <CardText>{frontHeading}</CardText>
      <CardHoverContent>
      <p style={{color: colour_orange, paddingBottom: "10px", fontSize: "1.1rem"}}>{title}</p>
        <p>{hoverText}</p>
      </CardHoverContent>
    </CardWrapper>
  );
};

export default AboutCard;
