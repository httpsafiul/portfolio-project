import styled from "styled-components";
import { motion } from "framer-motion";

export const GalleryContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 95%;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const GalleryImage = styled(motion.img)`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  /* border: 1px solid; */
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s ease;
`;
