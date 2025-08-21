import styled from "styled-components";
import bg from '../../../../assets/Hero/bg.webp';

export const LetsConnectSection = styled.section`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
    background-image: url(${bg});

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 0;
  }
`;
