import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(111, 122, 231, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 20px;
  backdrop-filter: blur(8px);
`;

const ModalContent = styled(motion.div)`
  background: var(--modal-bg);
  border: 4px solid var(--border-color);
  max-width: 600px;
  width: 100%;
  position: relative;
  class-name: pixel-corners;
  box-shadow: 
    0 8px 32px rgba(111, 122, 231, 0.2),
    0 4px 8px rgba(156, 111, 231, 0.15);
`;

const ModalHeader = styled.div`
  background: var(--primary-color);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid var(--border-color);

  h2 {
    color: white;
    font-size: 1rem;
    margin: 0;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
    letter-spacing: 1px;
  }
`;

const CloseButton = styled.button`
  background: white;
  border: 2px solid var(--border-color);
  color: var(--primary-color);
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  class-name: pixel-corners;
  transition: all 0.2s ease;
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    background: var(--secondary-color);
    color: white;
    transform: translateY(-1px);
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;
  font-size: 0.8rem;
  line-height: 1.6;
  max-height: 70vh;
  overflow-y: auto;
  color: var(--text-color);
  background: white;

  h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.05);
    font-size: 1.1rem;
  }

  h4 {
    color: var(--accent-color);
    margin: 1rem 0 0.5rem;
    font-size: 0.9rem;
  }

  p {
    margin-bottom: 1rem;
  }

  /* Retro scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: var(--background-color);
    border-left: 2px solid var(--border-color);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border: 2px solid var(--border-color);
  }

  ul {
    list-style-type: none;
    padding-left: 1rem;
    margin: 0.5rem 0;
    
    li {
      position: relative;
      margin-bottom: 0.8rem;
      padding-left: 0.5rem;
      
      &:before {
        content: "›";
        position: absolute;
        left: -1rem;
        color: var(--secondary-color);
        font-weight: bold;
        font-size: 1.1rem;
      }
    }
  }
`;

const RetroModal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            onClick={e => e.stopPropagation()}
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <ModalHeader>
              <h2>{title}</h2>
              <CloseButton onClick={onClose}>✕</CloseButton>
            </ModalHeader>
            <ModalBody>
              {children}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default RetroModal; 