import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import {
  GalleryContainer,
  GalleryGrid,
  GalleryImage
} from "./Styles/Gallery.styled";

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <GalleryContainer>
      <GalleryGrid>
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <GalleryImage
              src={img}
              alt={`gallery-img-${index}`}
              onClick={() => setSelectedImage(img)}
              whileHover={{ borderColor: "var(--colour_green)" }}
            />
          </motion.div>
        ))}
      </GalleryGrid>

      <AnimatePresence>
        {selectedImage && (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              key="enlarged"
              src={selectedImage}
              alt="enlarged"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3 }}
              style={{
                maxWidth: "80%",
                maxHeight: "80%",
                borderRadius: "12px",
                boxShadow: "0px 0px 20px rgba(0,0,0,0.4)"
              }}
              onClick={(e) => e.stopPropagation()} // prevent backdrop close on image click
            />
          </Backdrop>
        )}
      </AnimatePresence>
    </GalleryContainer>
  );
};

export default Gallery;
