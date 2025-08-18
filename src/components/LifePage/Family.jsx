import React from "react";

import img1 from '../../assets/Life/Family/one.jpg';
import img5 from '../../assets/Life/Family/two.jpg';
import img4 from '../../assets/Life/Family/three.jpg';
import img3 from '../../assets/Life/Family/four.jpg';
import img2 from '../../assets/Life/Family/five.jpg';
import img6 from '../../assets/Life/Family/six.jpg';

import Gallery from "./Gallery";

const Family = () => {
  const lifeImages = [img1, img2, img3, img4, img5, img6];

  return (
    <div>
      <Gallery images={lifeImages} />
    </div>
  );
};

export default Family;
