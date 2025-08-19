import styled from "styled-components";
import {
  colour_orange,
  colour_green,
  colour_white
} from "../../../../Common/colours";

export const CardWrapper = styled.div`
  position: relative;
  width: 360px;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${colour_green};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 260px;
  }

  @media (max-width: 480px) {
    width: 240px;
  }
`;

export const CardImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
  transition: opacity 0.3s ease;

  ${CardWrapper}:hover & {
    opacity: 0;
  }
`;

export const CardText = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colour_orange};
  font-size: 1.7rem;
  font-weight: 600;
  text-align: center;
  padding: 0.5rem;
  z-index: 2;
  transition: opacity 0.3s ease;

  ${CardWrapper}:hover & {
    opacity: 0;
  }

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CardHoverContent = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${colour_green};
  color: ${colour_white};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  p {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  ${CardWrapper}:hover & {
    opacity: 1;
  }

  .title{
    color: ${colour_orange};
    padding-bottom: 10px;
    font-size: 1.1rem;
    

  @media (max-width: 720px) {
    font-size: 0.8rem;
  }
}

  @media (max-width: 768px) {
    p {
      font-size: 0.6rem;
    }
  }
`;

