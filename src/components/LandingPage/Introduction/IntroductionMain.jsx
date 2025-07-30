import React from 'react';
import {
  IntroductionContainer,
  Heading,
  CardsWrapper
} from './Styles/IntroductionMain.styled';
import AboutCard from './AbuotCard';
import coding from '../../../assets/IntroSection/coding.jpg';
import graduation from '../../../assets/IntroSection/graduation.jpg';
import hackathon from '../../../assets/IntroSection/hackathon.jpg';
import living from '../../../assets/IntroSection/living.jpg';

const IntroductionMain = () => {
  return (
    <IntroductionContainer>
      <Heading>Defining Myself</Heading>
      <CardsWrapper>
        <AboutCard
          frontHeading="Mixing Coffee with Code"
          image_url={coding}
          textHeading="Where logic meets creativity"
          textContent="Fueled by coffee and curiosity, I love solving problems and building impactful solutions through code. Programming isn't just a skill for me—it's my creative outlet to turn ideas into reality. I enjoy exploring new technologies and pushing my limits with every project."
        />
        <AboutCard
          frontHeading="B.Tech '25"
          image_url={graduation}
          textHeading="A strong foundation in tech and problem-solving."
          textContent="Currently pursuing my B.Tech in Electronics and Communication Engineering, graduating in 2025. My academic journey has shaped my analytical and technical skills while exposing me to diverse projects. I focus on blending my education with real-world applications to grow as a developer."
        />
        <AboutCard
          frontHeading="Hunting Hackathons"
          image_url={hackathon}
          textHeading="Thriving on challenges and teamwork"
          textContent="I’ve secured victories in several hackathons, from the Rajasthan Police Hackathon to multiple college competitions. I was the co-founder of the tech team Bengal Tigers in my college and have won several hackathons alongside the team, solving real-world problems through creativity and collaboration."
        />
        <AboutCard
          frontHeading="Beyond the Screen"
          image_url={living}
          textHeading="Living Life One Day at a Time"
          textContent="I cherish time with family and friends, explore new places, and enjoy the little joys of life. From travelling to unwinding with good company, I believe balance fuels creativity and keeps my mind fresh for the next big challenge."
        />
      </CardsWrapper>
    </IntroductionContainer>
  );
};

export default IntroductionMain;
