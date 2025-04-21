import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillCard = ({ icon, title, description }) => {
  return (
    <Card
      as={motion.div}
      whileHover={{ 
        y: -10,
        boxShadow: '0 10px 20px rgba(255, 102, 0, 0.2)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <IconContainer>
        {icon}
      </IconContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

const Card = styled.div`
  background-color: var(--card-background);
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: var(--transition);
  box-shadow: var(--box-shadow);
  border: 1px solid rgba(255, 102, 0, 0.1);
  height: 100%;
`;

const IconContainer = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 20px;
  
  svg {
    filter: drop-shadow(0 0 5px rgba(255, 102, 0, 0.5));
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--text-color);
`;

const Description = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

export default SkillCard;