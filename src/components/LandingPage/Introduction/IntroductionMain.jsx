import React, { useState } from 'react';
import {
  IntroductionContainer,
  HeadingWrapper,
  Heading,
  DividerLine,
  CarouselWrapper,
  CarouselInner,
  NavButton
} from './Styles/IntroductionMain.styled';
import AboutCard from './AbuotCard';
import coding from '../../../assets/IntroSection/coding.jpg';
import graduation from '../../../assets/IntroSection/graduation.jpg';
import hackathon from '../../../assets/IntroSection/hackathon.jpg';
import harry from '../../../assets/IntroSection/harry.jpeg';
import office from '../../../assets/IntroSection/office.jpg';
import taylor from '../../../assets/IntroSection/taylor.webp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const cardsData = [
  {
    frontHeading: "Mixing Coffee with Code",
    image: coding,
    title: "Where logic meets creativity",
    hoverText:
      "Fueled by coffee and curiosity, I love solving problems and building impactful solutions through code. Programming isn't just a skill for me—it's my creative outlet to turn ideas into reality. I enjoy exploring new technologies and pushing my limits with every project."
  },
  {
    frontHeading: "B.Tech '25",
    image: graduation,
    title: "A strong foundation in tech and problem-solving.",
    hoverText:
      "Currently pursuing my B.Tech in Electronics and Communication Engineering, graduating in 2025. My academic journey has shaped my analytical and technical skills while exposing me to diverse projects. I focus on blending my education with real-world applications to grow as a developer."
  },
  {
    frontHeading: "Hunting Hackathons",
    image: hackathon,
    title: "Thriving on challenges and teamwork",
    hoverText:
      "I’ve secured victories in several hackathons, from the Rajasthan Police Hackathon to multiple college competitions. I was the co-founder of the tech team Bengal Tigers in my college and have won several hackathons alongside the team, solving real-world problems through creativity and collaboration."
  },
  {
    frontHeading: "Proud Potterhead",
    image: harry, // Add a Harry Potter themed image
    title: "Living in the wizarding world",
    hoverText:
      "The Harry Potter series has been a magical part of my life. From the lessons of friendship and courage to the thrill of spells and Quidditch, it’s a universe I revisit often. Whether it’s re-reading the books or binge-watching the films, the magic never fades."
  },
  {
    frontHeading: "Certified Swiftie",
    image: taylor, // Add an image of Taylor Swift or related aesthetic
    title: "Finding inspiration in music",
    hoverText:
      "Taylor Swift’s music is my constant companion — from her storytelling to her melodies, I find inspiration and motivation in her songs. Being a Swiftie is more than fandom; it's about embracing creativity, emotions, and growth through music."
  },
  {
    frontHeading: "The Office Aficionado",
    image: office, // Add a The Office still or related image
    title: "Laughing through life's chaos",
    hoverText:
      "‘The Office’ is my go-to comfort show. I love its quirky humor, awkward moments, and heartfelt friendships. It's a reminder that even in the most ordinary places, extraordinary stories — and laughs — can be found."
  }
];


const IntroductionMain = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;

  const handleNext = () => {
    if (startIndex + cardsPerPage < cardsData.length) {
      setStartIndex(startIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  const visibleCards = cardsData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <IntroductionContainer>
      <HeadingWrapper>
        <Heading>Defining Myself</Heading>
        <DividerLine />
      </HeadingWrapper>

      <CarouselWrapper>
        <NavButton onClick={handlePrev} disabled={startIndex === 0}>
          <ArrowBackIosNewIcon />
        </NavButton>

        <CarouselInner>
          {visibleCards.map((card, index) => (
            <AboutCard
              key={index}
              frontHeading={card.frontHeading}
              image={card.image}
              title={card.title}
              hoverText={card.hoverText}
            />
          ))}
        </CarouselInner>

        <NavButton
          onClick={handleNext}
          disabled={startIndex + cardsPerPage >= cardsData.length}
        >
          <ArrowForwardIosIcon />
        </NavButton>
      </CarouselWrapper>
    </IntroductionContainer>
  );
};

export default IntroductionMain;
