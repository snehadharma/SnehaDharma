import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const PixelCard = styled(motion.div)`
  background: var(--secondary-color);
  padding: 1.5rem;
  border: 4px solid var(--border-color);
  class-name: pixel-corners;
  
  h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.5rem;
    text-shadow: 2px 2px var(--background-color);
  }

  p {
    line-height: 1.6;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;

const PixelButton = styled(motion.button)`
  background: var(--primary-color);
  color: var(--background-color);
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  margin-top: 1rem;
  class-name: pixel-corners;

  &:hover {
    background: var(--accent-color);
    color: var(--text-color);
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <PixelCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Hello, World! 👋</h2>
        <p>
          I'm a Software Engineer passionate about creating beautiful and functional applications.
          Welcome to my pixel-perfect corner of the internet!
        </p>
        <p>
          Here you'll find my projects, experiences, and thoughts on technology.
          Feel free to explore and get in touch!
        </p>
        <PixelButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Projects →
        </PixelButton>
      </PixelCard>
    </HomeContainer>
  );
};

export default Home; 