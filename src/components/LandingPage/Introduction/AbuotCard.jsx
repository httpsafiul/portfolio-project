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
        <p className="title">{title}</p>
        <p className="hoverText">{hoverText}</p>
      </CardHoverContent>
    </CardWrapper>
  );
};

export default AboutCard;
