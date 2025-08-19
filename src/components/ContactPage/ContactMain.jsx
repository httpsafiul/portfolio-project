import React from "react";
import { ContactContainer } from "./Styles/ContactMain.styled";
import ContactCard from "./ContactCard";
import Navbar from "../Navbar/Navbar";

const ContactMain = () => {
  return (
    <>
    <Navbar active={"contact"} />
    <ContactContainer id="contact">
      <ContactCard />
    </ContactContainer>
    </>
  );
};

export default ContactMain;
