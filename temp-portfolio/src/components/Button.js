import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = ({ children, primary, outline, big, onClick, type = 'button' }) => {
  return (
    <StyledButton
      as={motion.button}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      primary={primary}
      outline={outline}
      big={big}
      onClick={onClick}
      type={type}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: ${({ primary, outline }) => 
    outline ? 'transparent' : primary ? 'var(--primary-color)' : 'var(--secondary-color)'};
  color: ${({ outline, primary }) => 
    outline ? (primary ? 'var(--primary-color)' : 'var(--text-color)') : 'var(--text-color)'};
  border: 2px solid ${({ primary }) => 
    primary ? 'var(--primary-color)' : 'var(--secondary-color)'};
  padding: ${({ big }) => (big ? '14px 28px' : '10px 20px')};
  font-size: ${({ big }) => (big ? '1.1rem' : '1rem')};
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  
  &:hover {
    background: ${({ outline, primary }) => 
      outline ? (primary ? 'var(--primary-color)' : 'var(--secondary-color)') : 'transparent'};
    color: ${({ outline, primary }) => 
      outline ? 'var(--text-color)' : (primary ? 'var(--primary-color)' : 'var(--text-color)')};
  }
  
  svg {
    margin-left: 8px;
  }
`;

export default Button;