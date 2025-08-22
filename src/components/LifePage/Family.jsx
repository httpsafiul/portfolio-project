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
  const lifeImages = [
    { src: img1, hash: "LlF~w5xaS1I:*0R%s;xax]bIWAV@" },
    { src: img2, hash: "LVI}R,?vkVt6~TxtoJWXxUE2%1xu" },
    { src: img3, hash: "LyIY5:D%t6M{~qM{WCRj%Mj[Rjof" },
    { src: img4, hash: "LXECtXofWAWB_NkCayofogoffQof" },
    { src: img5, hash: "L5Eo-|D40dPX5yBF^m,;9:^}+ZHq" },
    { src: img6, hash: "LMJko%X8s$n$yF%2NMof?wR+-qM{" }
  ];
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
      <Intro>Abbu & Ammu, the most loving parents in the world.</Intro>
      <Gallery images={lifeImages} />
    </div>
  );
};

export default Family;
