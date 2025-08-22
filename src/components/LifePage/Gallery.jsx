// Gallery.jsx
import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import {
  GalleryContainer,
  GalleryGrid,
  GalleryImageWrapper,
  GalleryImage,
  BlurhashWrapper,
} from "./Styles/Gallery.styled";

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    // Preload all images
    images.forEach((img) => {
      const image = new Image();
      image.src = img.src;
      image.onload = () =>
        setLoadedImages((prev) => ({ ...prev, [img.src]: true }));
    });
  }, [images]);

  return (
    <GalleryContainer>
      <GalleryGrid>
        {images.map((img, index) => {
          const isLoaded = loadedImages[img.src];
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GalleryImageWrapper onClick={() => setSelectedImage(img.src)}>
                <BlurhashWrapper loaded={isLoaded}>
                  {img.hash && (
                    <Blurhash
                      hash={img.hash}
                      width="100%"
                      height="100%"
                      resolutionX={32}
                      resolutionY={32}
                      punch={1}

                    />
                  )}
                </BlurhashWrapper>
                <GalleryImage
                  src={img.src}
                  alt={`gallery-img-${index}`}
                  loaded={isLoaded ? 1 : 0}
                  whileHover={{ borderColor: "var(--colour_green)" }}
                />
              </GalleryImageWrapper>
            </motion.div>
          );
        })}
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
                boxShadow: "0px 0px 20px rgba(0,0,0,0.4)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </Backdrop>
        )}
      </AnimatePresence>
    </GalleryContainer>
  );
};

export default Gallery;
