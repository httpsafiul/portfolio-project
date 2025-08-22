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
  const lifeImages = [
    { src: img1, hash: "L5F5v*0.?G5k}M$LEN4=yhdqIS-A" },
    { src: img2, hash: "L6By]Z^}RzJW00IpI[$$~q-WVbVr" },
    { src: img3, hash: "LRH_JSNF57%M~oNGi_WV9Fs;%Mbb" },
    { src: img4, hash: "LNHeXv~q?v.9tMbYR*M{tmt7s8af" },
    { src: img5, hash: "LtIYX_IUx]of%%WDWAa|ozj]V@WB" },
    { src: img6, hash: "L9C~}0xZRik700I;5QsC~qM{9]s;" },
    { src: img7, hash: "LEJ@n6~WxUoI?vXmIpt8-o^*jJ%M" },
    { src: img8, hash: "LIFFy:M{oun+Mut7M_j]?Hjs_4of" },
    { src: img9, hash: "LIDvD=M_IBj[~UoKxbni9Eoz%MWB" },
    { src: img10, hash: "LpKwtc%2SeNa~qW;oLjF%NaeRjof" },
    { src: img11, hash: "LCE:9pb[^t_LH@#t%4=|QlA9sqv~" },
    { src: img12, hash: "LwL}4=WB-:n#~qofM{Rj%2oMM{j]" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Intro>Who are there for me.</Intro>
      <Gallery images={lifeImages} />
    </div>
  );
};

export default Friends;
