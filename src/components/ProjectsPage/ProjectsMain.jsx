import React from 'react';
import { ProjectsContainer } from './Styles/ProjectsMain.styled';
import ProjectSection from './ProjectSection';
import policeintel from '../../assets/Projects/policeintel.png';
import ayurdehi from '../../assets/Projects/ayurdehi.png';
import leatherdefect from '../../assets/Projects/leatherdefect.png';
import plantdisease from '../../assets/Projects/plantdisease.png';
import policefeedback from '../../assets/Projects/policefeedback.png';
import tictactoe from '../../assets/Projects/tictactoe.jpg';

const ProjectsMain = () => {
    const projects = [
        {
            image: policeintel,
            name: 'PoliceIntel',
            description: 'AI-powered police resource optimization and data-driven crime management platform. Features include automatic FIR categorization based on updated BNS, BNSS, and BSA laws; multilingual sentiment analysis of community feedback; WhatsApp FIR updates; SMS-based feedback tool; performance analytics; and a multi-level admin portal. Built for the Rajasthan Police Hackathon, the system streamlines police operations and decision-making with real-time data visualization.',
            highlights: 'Won Rajasthan Police Hackathon 1.0, implemented real-time analytics and FIR categorization AI models.',
            recognition: 'Featured in Rajasthan Police internal newsletter and recognized by senior police officials.',
            tech: 'React.js, Spring Boot, Python, Elasticsearch, WebSockets, Microservices',
            link: '#'
        },
        {
            image: ayurdehi,
            name: 'Ayurdehi',
            description: 'A holistic Ayurvedic health and wellness platform providing personalized remedies and lifestyle recommendations based on user health profiles. The platform integrates a chatbot for quick consultations, a product marketplace for Ayurvedic items, and a symptom-checker for recommending natural treatments. It also educates users on herbal remedies, yoga routines, and dietary plans to improve well-being.',
            highlights: 'Designed for easy access to authentic Ayurvedic knowledge, with personalized health insights.',
            recognition: 'Appreciated during a wellness startup pitch for its combination of AI and traditional medicine.',
            tech: 'React.js, Django, MySQL, Material UI, REST APIs',
            link: '#'
        },
        {
            image: policefeedback,
            name: 'Police Feedback System',
            description: 'A public feedback and grievance redressal platform for police stations, allowing citizens to share experiences, complaints, and suggestions directly with relevant authorities. The system uses multilingual sentiment analysis to classify feedback, provides an admin dashboard for monitoring station performance, and supports SMS-based submission for users without internet access.',
            highlights: 'Empowers citizens, improves transparency, and helps police prioritize issues using data analytics.',
            recognition: 'Developed in collaboration with law enforcement for enhanced community engagement.',
            tech: 'React.js, Spring Boot, MongoDB, Elasticsearch, NLP Models',
            link: '#'
        },
        {
            image: plantdisease,
            name: 'Plant Disease Detection',
            description: 'A CNN-based crop disease detection application that analyzes plant leaf images and provides instant disease identification with prevention suggestions. The system includes a mobile app for farmers, offline image submission for low-connectivity areas, and integration with government agricultural databases for verified cure information. Designed to help farmers act quickly and minimize crop loss.',
            highlights: 'AI model trained on diverse agricultural datasets for high detection accuracy; prevention guide included.',
            recognition: 'Praised in agricultural innovation competitions for supporting grassroots-level farmers.',
            tech: 'React Native, Django, TensorFlow/Keras, MySQL, Cloud Storage',
            link: '#'
        },
        {
            image: leatherdefect,
            name: 'Leather Defect Detection',
            description: 'An AI-powered defect detection system for the leather industry that uses computer vision to identify imperfections in leather sheets during production. The platform provides visual defect mapping, defect classification (e.g., scratches, wrinkles, stains), and integrates with factory management systems to improve quality control and reduce wastage.',
            highlights: 'Automates defect detection, reducing manual inspection time and increasing accuracy.',
            recognition: 'Adopted as a proof-of-concept by local leather manufacturers for quality assurance.',
            tech: 'Python, OpenCV, TensorFlow, Flask, MongoDB',
            link: '#'
        },
        {
            image: tictactoe,
            name: 'Real-time Tic Tac Toe',
            description: 'A real-time multiplayer Tic Tac Toe game with integrated live chat functionality. Players can challenge each other, chat in real-time during gameplay, and see instant board updates without page refresh. The platform ensures seamless synchronization between clients using WebSockets and offers a clean, responsive UI for both desktop and mobile devices.',
            highlights: 'Fully responsive UI, live game state synchronization using WebSockets, integrated chat system.',
            recognition: 'Showcased at college tech fest as a demonstration of real-time web application capabilities.',
            tech: 'React.js, Node.js, WebSockets, Express.js',
            link: '#'
        }
    ];


    return (
        <ProjectsContainer>
            {projects.map((project, index) => (
                <ProjectSection key={index} project={project} />
            ))}
        </ProjectsContainer>
    );
};

export default ProjectsMain;
