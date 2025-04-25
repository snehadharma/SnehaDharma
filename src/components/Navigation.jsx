import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background: var(--primary-color);
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 4px solid var(--border-color);
  class-name: pixel-corners;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  gap: 1rem;
`;

const NavItem = styled.li`
  position: relative;
  
  a {
    color: var(--background-color);
    padding: 0.25rem 1rem;
    transition: all 0.3s ease;
    white-space: nowrap;
    display: block;
    font-size: 0.8rem;
    
    &:hover {
      color: var(--accent-color);
      text-shadow: 2px 2px var(--text-color);
    }

    &.active {
      color: var(--accent-color);
      &::before {
        content: "►";
        position: absolute;
        left: -1rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: calc(50% - 0.5rem);
    text-align: center;
  }
`;

const Navigation = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>
            Projects
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/resume" className={location.pathname === "/resume" ? "active" : ""}>
            Resume
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation; 