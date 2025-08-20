import React from "react";

import img1 from '../../assets/Life/LoML/img1.jpg';
import img2 from '../../assets/Life/LoML/img2.jpg';
import img3 from '../../assets/Life/LoML/img3.jpg';
import img4 from '../../assets/Life/LoML/img4.jpg';
import img5 from '../../assets/Life/LoML/img5.jpg';
import img6 from '../../assets/Life/LoML/img6.jpg';
import img7 from '../../assets/Life/LoML/img7.jpg';
import img8 from '../../assets/Life/LoML/img8.jpg';
import img9 from '../../assets/Life/LoML/img9.jpg';

import Gallery from "./Gallery";
import styled from "styled-components";

const Intro = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  max-width: 800px;
  font-style: italic;
  text-align: center;
  @media (max-width: 720px) {
    font-size: 0.8rem;
  }
`;

const LoML = () => {
  const lifeImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Intro>The love of my life.</Intro>
      <Gallery images={lifeImages} />
    </div>
  );
};

export default LoML;
