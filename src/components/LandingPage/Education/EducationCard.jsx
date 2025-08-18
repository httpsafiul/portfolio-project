import React from "react";
import {
  CardWrapper,
  CardImage,
  CardText,
  CardHoverContent
} from "./Styles/EducationCard.styled";
import { colour_orange } from "../../../Common/colours";
import { Typography } from "@mui/material";

const EducationCard = ({ image, institute, university, year, marks, frontHeading }) => {
  return (
    <CardWrapper>
      <CardImage img={image} />
      <CardText>{frontHeading}</CardText>
      <CardHoverContent>
        <Typography
          variant="h5"
          sx={{
            color: colour_orange,
            fontWeight: 600,
            textAlign: "center",
            mb: 1,
            fontSize: { xs: "0.9rem", sm: "1.3rem", md: "1.5rem" }
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
            fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.3rem" }
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
            fontSize: { xs: "0.75rem", sm: "1.1rem", md: "1.2rem" }
          }}
        >
          {year}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            textAlign: "center",
            fontSize: { xs: "0.75rem", sm: "1.1rem", md: "1.2rem" }
          }}
        >
          {marks}
        </Typography>
      </CardHoverContent>
    </CardWrapper>
  );
};

export default EducationCard;
