import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import Home from './components/Home';
import ResumeGrid from './components/ResumeGrid';

const AppContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 1rem;
  padding: 1.5rem;
  background: var(--primary-color);
  color: var(--background-color);
  border: 4px solid var(--border-color);
  class-name: pixel-corners;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    text-shadow: 3px 3px var(--text-color);
  }

  p {
    font-size: 0.8rem;
    color: var(--accent-color);
  }
`;

const MainContent = styled.main`
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border: 4px solid var(--border-color);
  class-name: pixel-corners;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Header>
          <h1>Welcome to My World</h1>
          <p>Software Engineer & Creative Developer</p>
        </Header>
        <Navigation />
        <MainContent>
          <Routes>
            <Route path="/" element={<ResumeGrid />} />
            <Route path="/projects" element={<div>Projects Content</div>} />
            <Route path="/experience" element={<div>Experience Content</div>} />
            <Route path="/education" element={<div>Education Content</div>} />
            <Route path="/skills" element={<div>Skills Content</div>} />
            <Route path="/involvement" element={<div>University Involvement Content</div>} />
            <Route path="/courses" element={<div>Coursework Content</div>} />
            <Route path="/contact" element={<div>Contact Content</div>} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
