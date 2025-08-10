import React from "react";
import {
  AchievementsContainer,
  SectionHeading,
  CardsWrapper
} from "./Styles/AchievementsMain.styled";
import AchievementsCard from "./AchievementsCard";
// import { IMAGES as policeHackathonImgs } from "./Images/policeHackathon";
// import { IMAGES as innovateImgs } from "./Images/innovate";
import { IMAGES } from "./Images"
import { RajasthanPoliceHackathon } from "./Images"

const AchievementsMain = () => {
  const achievements = [
    {
      id: 1,
      competitionName: "Rajasthan Police Hackathon 1.0",
      date: "March 2023",
      position: "Winner",
      team: [
        { name: "Subhradeep Pal", linkedin: "https://www.linkedin.com/in/subhradeep-pal/" },
        { name: "Deblina Mandal", linkedin: "https://www.linkedin.com/in/deblina-mandal-13b990226/" },
      ],
      description:
        "Led the winning team in building an AI-powered FIR categorization and analytics system for Rajasthan Police, enhancing operational efficiency.",
      images: RajasthanPoliceHackathon,
      emoji: "🏆"
    },
    {
      id: 2,
      competitionName: "Innovate 2.0",
      date: "October 2022",
      position: "Winner",
      team: [
        { name: "Emily Chen", linkedin: "https://linkedin.com/in/emilychen" },
        { name: "Michael Brown", linkedin: "https://linkedin.com/in/michaelbrown" }
      ],
      description:
        "Secured first place by developing an innovative solution in the field of smart automation, competing against top teams nationwide.",
      images: IMAGES,
      emoji: "🏆"
    }
  ];

  return (
    <AchievementsContainer id="achievements">
      {/* <SectionHeading>My Achievements</SectionHeading> */}
      <CardsWrapper>
        {achievements.map((ach) => (
          <AchievementsCard
            key={ach.id}
            competitionName={ach.competitionName}
            description={ach.description}
            images={ach.images}
            emoji={ach.emoji}
            team={ach.team}
            date={ach.date}
            position={ach.position}
          />
        ))}
      </CardsWrapper>
    </AchievementsContainer>
  );
};

export default AchievementsMain;
