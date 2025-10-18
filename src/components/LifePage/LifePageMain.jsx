import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import Family from "./Family"; // for now same component for all
import {
  LifeContainer,
  LifeHeading,
  LifeIntro,
  SectionWrapper
} from "./Styles/LifePage.styled";
import Navbar from "../Navbar/Navbar";
import Friends from "./Friends";
import LoML from "./LoML";

const LifePageMain = () => {
  const [activeSection, setActiveSection] = useState("family");

  const renderSection = () => {
    switch (activeSection) {
      case "family":
        return <Family />;
      case "friends":
        return <Friends />;
      case "loml":
        return <LoML />;
      default:
        return <Family />;
    }
  };

  return (
    <>
      <Navbar active={"life"} />
      <LifeContainer>
        <LifeHeading>Life</LifeHeading>
        <LifeIntro>
          Life is a journey filled with memories, bonds, and experiences that
          shape who we are. From family moments that ground us, to friends who
          make life brighter, and to that one special person who completes the
          story — every connection holds a place in my heart. Let me introduce
          some of the people who make me who I am.
        </LifeIntro>

        <SectionWrapper>
          <ButtonGroup variant="outlined">
            <Button
              onClick={() => setActiveSection("family")}
              variant={activeSection === "family" ? "contained" : "outlined"}
            >
              Family
            </Button>
            <Button
              onClick={() => setActiveSection("friends")}
              variant={activeSection === "friends" ? "contained" : "outlined"}
            >
              Friends
            </Button>
            {/* <Button
              onClick={() => setActiveSection("loml")}
              variant={activeSection === "loml" ? "contained" : "outlined"}
            >
              LoML
            </Button> */}
          </ButtonGroup>
        </SectionWrapper>

        {renderSection()}
      </LifeContainer>
    </>
  );
};

export default LifePageMain;
