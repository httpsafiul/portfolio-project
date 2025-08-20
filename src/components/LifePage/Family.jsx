import React from "react";

import img1 from '../../assets/Life/Family/one.jpg';
import img5 from '../../assets/Life/Family/two.jpg';
import img4 from '../../assets/Life/Family/three.jpg';
import img3 from '../../assets/Life/Family/four.jpg';
import img2 from '../../assets/Life/Family/five.jpg';
import img6 from '../../assets/Life/Family/six.jpg';

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

const Family = () => {
  const lifeImages = [img1, img2, img3, img4, img5, img6];

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Intro>Abbu & Ammu, the most loving parents in the world.</Intro>
      <Gallery images={lifeImages} />
    </div>
  );
};

export default Family;
