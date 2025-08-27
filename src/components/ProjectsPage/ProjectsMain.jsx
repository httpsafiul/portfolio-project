import React from 'react';
import { Heading, Intro, ProjectsContainer } from './Styles/ProjectsMain.styled';
import ProjectSection from './ProjectSection';
import policeintel from '../../assets/Projects/Banner/policeintel.png';
import ayurdehi from '../../assets/Projects/Banner/ayurdehi.png';
import leatherdefect from '../../assets/Projects/Banner/leatherdefect.png';
import plantdisease from '../../assets/Projects/Banner/plantdisease.png';
import policefeedback from '../../assets/Projects/Banner/policefeedback.png';

import springBoot from '../../assets/Projects/TechLogo/springbootIcon.png';
import react from '../../assets/Projects/TechLogo/reactIcon.png';
import es from '../../assets/Projects/TechLogo/ElasticSearch.png';
import websocket from '../../assets/Projects/TechLogo/Socket.io.png';
import pytorch from '../../assets/Projects/TechLogo/pytorch.png';
import huggingface from '../../assets/Projects/TechLogo/huggingface.png';
import tensorflow from '../../assets/Projects/TechLogo/tensorflow.png';
import Keras from '../../assets/Projects/TechLogo/Keras.png';
import mysqlIcon from '../../assets/Projects/TechLogo/mysqlIcon.png';
import AndroidStudio from '../../assets/Projects/TechLogo/AndroidStudio.png';
import mongoIcon from '../../assets/Projects/TechLogo/mongoIcon.png';
import FastAPI from '../../assets/Projects/TechLogo/FastAPI.png';
import OpenCV from '../../assets/Projects/TechLogo/OpenCV.png';

import Navbar from '../Navbar/Navbar';

const ProjectsMain = () => {
    const projects = [
        {
            image: policeintel,
            imageHash: "LaSFw-kWxun$%2kCWBjs.TjYM{WX",
            name: 'PoliceIntel',
            description: 'AI-powered police resource optimization and data-driven crime management platform. Features include automatic FIR categorization based on updated BNS, BNSS, and BSA laws; multilingual sentiment analysis of community feedback; WhatsApp FIR updates; SMS-based feedback tool; performance analytics; and a multi-level admin portal. Built for the Rajasthan Police Hackathon, the system streamlines police operations and decision-making with real-time data visualization.',
            highlights: 'AI-powered FIR categorization, multilingual sentiment analysis, real-time analytics, and multi-level admin portal.',
            recognition: 'Won Innovate 1.0, SIH Internal Hackathon 2024, finalist in Karnataka State Police Hackathon',
            tech: [
                { name: "Spring Boot", icon: springBoot },
                { name: "React.js", icon: react },
                { name: "ElasticSearch", icon: es },
                { name: "WebSockets", icon: websocket },
                { name: "PyTorch", icon: pytorch },
                { name: "Huggingface", icon: huggingface },
                { name: "TensorFlow", icon: tensorflow },
                { name: "Keras", icon: Keras },
                { name: "MySQL", icon: mysqlIcon }
            ]
        },
        {
            image: ayurdehi,
            imageHash: "LURCuajYxu%gnhRktSxa?wbIflV?",
            name: 'Ayurdehi',
            description: 'A holistic Ayurvedic health and wellness platform providing personalized remedies and lifestyle recommendations based on user health profiles. The platform integrates a chatbot for quick consultations, a product marketplace for Ayurvedic items, and a symptom-checker for recommending natural treatments. It also educates users on herbal remedies, yoga routines, and dietary plans to improve well-being.',
            highlights: 'Designed for easy access to authentic Ayurvedic knowledge, with personalized health insights.',
            recognition: 'PIWOT Imagine Hackathon finalist, SAP Innovate winner',
            tech: [
                { name: "React.js", icon: react },
                { name: "Spring Boot", icon: springBoot },
                { name: "ElasticSearch", icon: es },
                { name: "PyTorch", icon: pytorch },
                { name: "Huggingface", icon: huggingface },
                { name: "TensorFlow", icon: tensorflow },
                { name: "Keras", icon: Keras },
                { name: "MySQL", icon: mysqlIcon }
            ]
        },
        {
            image: policefeedback,
            imageHash: "LOSr[kR.%%$|x]oLV?WX.As.MvNI",
            name: 'Police Feedback System',
            description: 'A public feedback and grievance redressal platform for police stations, allowing citizens to share experiences, complaints, and suggestions directly with relevant authorities. The system uses multilingual sentiment analysis to classify feedback, provides an admin dashboard for monitoring station performance, and supports SMS-based submission for users without internet access.',
            highlights: 'Empowers citizens, improves transparency, and helps police prioritize issues using data analytics.',
            recognition: 'Rajasthan Police Hackathon winner',
            tech: [
                { name: "Spring Boot", icon: springBoot },
                { name: "React.js", icon: react },
                { name: "MongoDB", icon: mongoIcon },
                { name: "ElasticSearch", icon: es },
                { name: "PyTorch", icon: pytorch },
                { name: "TensorFlow", icon: tensorflow },
                { name: "Keras", icon: Keras },
                { name: "Huggingface", icon: huggingface }
            ],
            link: '#'
        },
        {
            image: plantdisease,
            imageHash: "LQQT1DS5?vRP-;RkRjn%~qayM{xu",
            name: 'Plant Disease Detection',
            description: 'A CNN-based crop disease detection application that analyzes plant leaf images and provides instant disease identification with prevention suggestions. The system includes a mobile app for farmers, offline image submission for low-connectivity areas, and integration with government agricultural databases for verified cure information. Designed to help farmers act quickly and minimize crop loss.',
            highlights: 'AI model trained on diverse agricultural datasets for high detection accuracy; prevention guide included.',
            recognition: 'B.Tech final project',
            tech: [
                { name: "Android Studio", icon: AndroidStudio },
                { name: "FastAPI", icon: FastAPI },
                { name: "TensorFlow", icon: tensorflow },
                { name: "Keras", icon: Keras },
                { name: "MySQL", icon: mysqlIcon }
            ],
            link: '#'
        },
        {
            image: leatherdefect,
            imageHash: "LPSFz]x]%hjE-pRkogjZ?wWAMwbI",
            name: 'Leather Defect Detection',
            description: 'An AI-powered defect detection system for the leather industry that uses computer vision to identify imperfections in leather sheets during production. The platform provides visual defect mapping, defect classification (e.g., scratches, wrinkles, stains), and integrates with factory management systems to improve quality control and reduce wastage.',
            highlights: 'Automates defect detection, reducing manual inspection time and increasing accuracy.',
            recognition: 'College curriculum project presentation',
            tech: [
                { name: "OpenCV", icon: OpenCV },
                { name: "TensorFlow", icon: tensorflow },
                { name: "Flask", icon: FastAPI }, // ⚠️ placeholder, replace with Flask logo if available
                { name: "MongoDB", icon: mongoIcon }
            ],
            link: '#'
        }
    ];

    return (
        <>
            <Navbar active={"projects"} />

            <ProjectsContainer>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', width: "100%" }}>
                    <Heading>Projects Showcase</Heading>
                    <Intro>
                        A collection of innovative solutions and real-world applications — reflecting my passion for problem-solving, technology, and building impactful products.
                    </Intro>
                </div>
                {projects.map((project, index) => (
                    <ProjectSection key={index} project={project} />
                ))}
            </ProjectsContainer>
        </>
    );
};

export default ProjectsMain;
