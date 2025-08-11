import React from "react";
import {
  AchievementsContainer,
  SectionHeading,
  CardsWrapper
} from "./Styles/AchievementsMain.styled";
import AchievementsCard from "./AchievementsCard";
// import { IMAGES as policeHackathonImgs } from "./Images/policeHackathon";
// import { IMAGES as innovateImgs } from "./Images/innovate";
import { RajasthanPoliceHackathon } from "./Images"
import { Innovate } from "./Images"
import { SIH } from "./Images"
import { Hackfest } from "./Images"
import { Webology } from "./Images"
import Navbar from "../Navbar/Navbar";

const AchievementsMain = () => {
  const achievements = [
    {
      id: 1,
      competitionName: "Rajasthan Police Hackathon 1.0",
      date: "Januray 2024",
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
      date: "May 2024",
      position: "Winner",
      team: [
        { name: "Subhradeep Pal", linkedin: "https://www.linkedin.com/in/subhradeep-pal/" },
        { name: "Deblina Mandal", linkedin: "https://www.linkedin.com/in/deblina-mandal-13b990226/" },
        { name: "Devasmita Kundu", linkedin: "https://www.linkedin.com/in/luna-skywalker/" },
        { name: "Samrat Ghosh", linkedin: "https://www.linkedin.com/in/samratghosh490/" },
      ],
      description:
        "Secured first place by developing an innovative solution in the field of smart automation, competing against top teams nationwide.",
      images: Innovate,
      emoji: "🏆"
    },
    {
      id: 3,
      competitionName: "Hackfest by SAP Labs",
      date: "April 2025",
      position: "Winner",
      team: [
        { name: "Devasmita Kundu", linkedin: "https://www.linkedin.com/in/luna-skywalker/" },
        { name: "Poorva Adhikari", linkedin: "https://www.linkedin.com/in/poorva-adhikary0912/" },
        { name: "Sayantika Dey", linkedin: "https://www.linkedin.com/in/sayantika-dey-232b80271/" },
        { name: "Namrata Sinha Roy", linkedin: "https://www.linkedin.com/in/namratasinharoy/" },
      ],
      description:
        "Secured first place by developing an innovative solution in the field of smart automation, competing against top teams nationwide.",
      images: Hackfest,
      emoji: "🏆"
    },
    {
      id: 4,
      competitionName: "Smart India Hackathon Internal (MSIT)",
      date: "September 2024",
      position: "Winner",
      team: [
        { name: "Devasmita Kundu", linkedin: "https://www.linkedin.com/in/luna-skywalker/" },
        { name: "Samrat Ghosh", linkedin: "https://www.linkedin.com/in/samratghosh490/" },
        { name: "Poorva Adhikari", linkedin: "https://www.linkedin.com/in/poorva-adhikary0912/" },
        { name: "Namrata Sinha Roy", linkedin: "https://www.linkedin.com/in/namratasinharoy/" },
        { name: "Pushkar Pan", linkedin: "https://www.linkedin.com/in/pushkar-pan-61b515281/" },
      ],
      description:
        "Secured first place by developing an innovative solution in the field of smart automation, competing against top teams nationwide.",
      images: SIH,
      emoji: "🏆"
    },
    {
      id: 5,
      competitionName: "Web-O-Logy (by BPPIMT)",
      date: "March 2023",
      position: "Winner",
      team: [
        { name: "Subhradeep Pal", linkedin: "https://www.linkedin.com/in/subhradeep-pal/" }
      ],
      description:
        "Secured first place by developing an innovative solution in the field of smart automation, competing against top teams nationwide.",
      images: Webology,
      emoji: "🏆"
    },
  ];

  return (
    <>
    <Navbar active={"achievements"}/>
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
    </>
  );
};

export default AchievementsMain;
