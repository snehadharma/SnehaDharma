import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import RetroModal from './RetroModal';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(120px, auto);
  gap: 0.5rem;
  margin-top: 0.5rem;
  width: 100%;
  height: 100%;
`;

const Box = styled(motion.div)`
  background: var(--secondary-color);
  border: 4px solid var(--border-color);
  padding: 1.25rem;
  class-name: pixel-corners;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  /* Different grid areas for different boxes */
  &:nth-child(1) {
    grid-column: span 6;
    grid-row: span 2;
    min-height: 300px;
  }

  &:nth-child(2) {
    grid-column: span 4;
    grid-row: span 2;
    min-height: 300px;
  }

  &:nth-child(3) {
    grid-column: span 2;
    grid-row: span 2;
    min-height: 300px;
  }

  &:nth-child(4) {
    grid-column: span 4;
    grid-row: span 1;
    min-height: 150px;
  }

  &:nth-child(5) {
    grid-column: span 4;
    grid-row: span 1;
    min-height: 150px;
  }

  &:nth-child(6) {
    grid-column: span 4;
    grid-row: span 1;
    min-height: 150px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--primary-color);
  }

  h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: ${props => props.isLarge ? '1.1rem' : '0.9rem'};
    text-shadow: 1px 1px var(--background-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: ${props => props.isLarge ? '0.75rem' : '0.65rem'};
    line-height: 1.5;
    color: var(--text-color);
    flex-grow: 1;
    overflow-y: auto;
    padding-right: 0.5rem;
    margin-bottom: 0.5rem;

    /* Scrollbar styling */
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      background: var(--secondary-color);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--primary-color);
      border-radius: 2px;
    }
  }

  @media (max-width: 1200px) {
    &:nth-child(n) {
      grid-column: span 6;
      min-height: 200px;
    }
  }

  @media (max-width: 768px) {
    &:nth-child(n) {
      grid-column: span 12;
      min-height: 180px;
    }
  }
`;

const resumeSections = [
  {
    title: "Featured Projects",
    description: "Explore my latest software engineering projects and applications. From web apps to machine learning models, discover my technical portfolio. Each project showcases different skills and technologies I've mastered.",
    link: "/projects",
    isLarge: true
  },
  {
    title: "Experience",
    description: "My professional journey through various software engineering roles. Learn about my contributions to different companies and the impact I've made in the tech industry.",
    link: "/experience",
    isLarge: true
  },
  {
    title: "Uni",
    description: "My academic journey and achievements in Computer Science and related fields.",
    link: "/education",
    isLarge: false
  },
  {
    title: "Skills",
    description: "Programming languages, frameworks, and development tools I specialize in.",
    link: "/skills",
    isLarge: false
  },
  {
    title: "University Activities",
    description: "Leadership roles and extracurricular activities that shaped my collaborative skills.",
    link: "/involvement",
    isLarge: false
  },
  {
    title: "Coursework",
    description: "Specialized courses and professional certifications in software development and computer science.",
    link: "/courses",
    isLarge: false
  }
];

const modalContent = {
  experience: {
    title: "Work Experience",
    content: (
      <>
        <h3 style={{ marginBottom: '1rem' }}>Professional Journey</h3>
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ color: 'var(--primary-color)' }}>Software Engineer</h4>
          <p style={{ fontSize: '0.7rem', marginTop: '0.5rem' }}>
            Company Name • 2022 - Present
          </p>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem', fontSize: '0.7rem' }}>
            <li>Led development of key features</li>
            <li>Collaborated with cross-functional teams</li>
            <li>Improved application performance</li>
          </ul>
        </div>
        {/* Add more experience items as needed */}
      </>
    )
  },
  education: {
    title: "Education",
    content: (
      <>
        <h3 style={{ marginBottom: '1rem' }}>Academic Background</h3>
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ color: 'var(--primary-color)' }}>Bachelor of Science in Computer Science</h4>
          <p style={{ fontSize: '0.7rem', marginTop: '0.5rem' }}>
            University Name • 2018 - 2022
          </p>
          <p style={{ fontSize: '0.7rem', marginTop: '0.5rem' }}>
            GPA: 3.8/4.0
          </p>
        </div>
      </>
    )
  },
  skills: {
    title: "Skills & Technologies",
    content: (
      <>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Programming Languages</h4>
          <p style={{ fontSize: '0.7rem' }}>JavaScript, Python, Java, C++</p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Frameworks & Libraries</h4>
          <p style={{ fontSize: '0.7rem' }}>React, Node.js, Express, Django</p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Tools & Technologies</h4>
          <p style={{ fontSize: '0.7rem' }}>Git, Docker, AWS, MongoDB</p>
        </div>
      </>
    )
  },
  involvement: {
    title: "University Activities",
    content: (
      <>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--primary-color)' }}>Computer Science Club</h4>
          <p style={{ fontSize: '0.7rem', marginTop: '0.5rem' }}>President • 2021-2022</p>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem', fontSize: '0.7rem' }}>
            <li>Organized weekly tech workshops</li>
            <li>Mentored junior students</li>
          </ul>
        </div>
      </>
    )
  },
  courses: {
    title: "Coursework & Certifications",
    content: (
      <>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Key Coursework</h4>
          <ul style={{ paddingLeft: '1rem', fontSize: '0.7rem' }}>
            <li>Advanced Algorithms</li>
            <li>Machine Learning</li>
            <li>Web Development</li>
            <li>Database Systems</li>
          </ul>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Certifications</h4>
          <ul style={{ paddingLeft: '1rem', fontSize: '0.7rem' }}>
            <li>AWS Certified Developer</li>
            <li>Google Cloud Professional</li>
          </ul>
        </div>
      </>
    )
  }
};

const ResumeGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const navigate = useNavigate();

  const handleBoxClick = (section) => {
    if (section === 'projects') {
      navigate('/projects');
    } else {
      setCurrentSection(section);
      setModalOpen(true);
    }
  };

  return (
    <>
      <GridContainer>
        {resumeSections.map((section, index) => (
          <Box
            key={index}
            as={motion.div}
            isLarge={section.isLarge}
            onClick={() => handleBoxClick(section.link.replace('/', ''))}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3,
              delay: index * 0.1
            }}
          >
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </Box>
        ))}
      </GridContainer>

      <RetroModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={currentSection ? modalContent[currentSection]?.title : ''}
      >
        {currentSection && modalContent[currentSection]?.content}
      </RetroModal>
    </>
  );
};

export default ResumeGrid; 