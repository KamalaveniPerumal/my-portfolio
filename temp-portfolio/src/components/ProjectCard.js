import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies, image, color, githubLink, liveLink }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardContainer>
      <Card
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleFlip}
        isFlipped={isFlipped}
      >
        <CardFront isFlipped={isFlipped}>
          {image ? (
            <CardImage src={image} alt={title} />
          ) : (
            <CardImagePlaceholder color={color}>
              <FaCode size={50} />
              <PlaceholderText>{title}</PlaceholderText>
            </CardImagePlaceholder>
          )}
          <CardTitle>{title}</CardTitle>
          <TechList>
            {technologies.map((tech, index) => (
              <TechItem key={index}>{tech}</TechItem>
            ))}
          </TechList>
          <FlipInfo>Click to see details</FlipInfo>
        </CardFront>
        
        <CardBack isFlipped={isFlipped}>
          <BackTitle>{title}</BackTitle>
          <Description>{description}</Description>
          <LinkContainer>
            {githubLink && (
              <LinkButton 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                as={motion.a}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub /> GitHub
              </LinkButton>
            )}
            {liveLink && (
              <LinkButton 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                as={motion.a}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt /> Live Demo
              </LinkButton>
            )}
          </LinkContainer>
          <FlipInfo>Click to flip back</FlipInfo>
        </CardBack>
      </Card>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 400px;
  margin-bottom: 30px;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: var(--card-background);
  border: 1px solid rgba(255, 102, 0, 0.2);
`;

const CardFront = styled(CardSide)`
  transform: rotateY(0deg);
`;

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
  justify-content: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const CardImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ color }) => color || 'var(--primary-color)'};
  border-radius: 5px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const PlaceholderText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--primary-color);
`;

const BackTitle = styled(CardTitle)`
  text-align: center;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  margin-bottom: 15px;
`;

const TechItem = styled.span`
  background-color: rgba(255, 102, 0, 0.2);
  color: var(--primary-color);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Description = styled.p`
  color: var(--text-secondary);
  margin-bottom: 20px;
  text-align: center;
  flex: 1;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: auto;
  margin-bottom: 15px;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 15px;
  background-color: var(--primary-color);
  color: var(--text-color);
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background-color: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }
`;

const FlipInfo = styled.p`
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-align: center;
  font-style: italic;
  margin-top: auto;
`;

export default ProjectCard;