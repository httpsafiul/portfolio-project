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
  const lifeImages = [
    { src: img1, hash: "LDKB2M~q?bV?MH9Gxaxu_N0KD%R-" },
    { src: img2, hash: "LCFr@K0JF,Ip0x~nE2%1%iIo#qRi" },
    { src: img3, hash: "LeG*?9X9M|s9~qs8RjRj?vkBWqfk" },
    { src: img4, hash: "L9HBSkHX00XT={x^-:D$u500?woJ" },
    { src: img5, hash: "LHLWeF8w?FrD|zv}wMv~=z%1a1%M" },
    { src: img6, hash: "LPFN*Z5TRPNG}r9|xDaK=_NdWBr?" },
    { src: img7, hash: "LHKA.:Rk_4F}*0OXRQ=u?drptRS5" },
    { src: img8, hash: "LXDK0$tSbUad%%ozIAad%#ogV=og" },
    { src: img9, hash: "L9I}Cc8x0.~900=s%g0217-5-UIp" }
  ];
  
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Intro>The love of my life.</Intro>
      <Gallery images={lifeImages} />
    </div>
  );
};

export default LoML;
