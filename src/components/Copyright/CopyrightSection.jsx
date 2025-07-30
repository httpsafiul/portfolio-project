import React from 'react';
import { FooterContainer, FooterText } from './Styles/CopyrightSection.styled';

const CopyrightSection = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} Md Safiul Haque. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default CopyrightSection;
