// Gallery.styled.js
import styled from "styled-components";
import { motion } from "framer-motion";

export const GalleryContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 1350px) {
    width: 90%;
    padding: 1rem 0;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: 1350px) {
    gap: 0.8rem;
  }

  @media (max-width: 600px) {
    gap: 0.4rem;
  }
`;

export const GalleryImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 3px;
  cursor: pointer;
`;

export const GalleryImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
`;

export const BlurhashWrapper = styled.div`
  position: absolute;
  inset: 0;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.loaded ? 0 : 1)};
`;
