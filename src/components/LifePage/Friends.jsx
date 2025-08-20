import React from "react";

import img1 from '../../assets/Life/Friends/img1.jpg';
import img2 from '../../assets/Life/Friends/img2.jpeg';
import img3 from '../../assets/Life/Friends/img3.jpg';
import img4 from '../../assets/Life/Friends/img4.jpg';
import img5 from '../../assets/Life/Friends/img5.jpg';
import img6 from '../../assets/Life/Friends/img6.jpeg';
import img7 from '../../assets/Life/Friends/img7.jpg';
import img8 from '../../assets/Life/Friends/img8.jpg';
import img9 from '../../assets/Life/Friends/img9.jpg';
import img10 from '../../assets/Life/Friends/img10.jpg';
import img11 from '../../assets/Life/Friends/img11.jpg';
import img12 from '../../assets/Life/Friends/img12.jpg';

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

const Friends = () => {
  const lifeImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Intro>Who are there for me.</Intro>
      <Gallery images={lifeImages} />
    </div>
  );
};

export default Friends;
