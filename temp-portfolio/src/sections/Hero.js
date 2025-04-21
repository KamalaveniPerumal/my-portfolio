import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Button from '../components/Button';
import ParticleBackground from '../components/ParticleBackground';
import { FaDownload, FaEnvelope, FaCode } from 'react-icons/fa';

const Hero = () => {
  return (
    <HeroContainer id="home">
      <ParticleBackground />
      <HeroContent>
        <TextContainer>
          <Greeting
            as={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </Greeting>
          <Name
            as={motion.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="highlight">Kamalaveni</span> Perumal
          </Name>
          <Title
            as={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Junior Software Engineer
          </Title>
          <Description
            as={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Specializing in full stack development and AI solutions
          </Description>
          <ButtonContainer
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button primary big>
              <a href="/resume.pdf" download>
                Download Resume <FaDownload />
              </a>
            </Button>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <Button outline big>
                Contact Me <FaEnvelope />
              </Button>
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <Button big>
                View Projects <FaCode />
              </Button>
            </Link>
          </ButtonContainer>
        </TextContainer>
      </HeroContent>
      <ScrollIndicator
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ScrollDown />
        </motion.div>
      </ScrollIndicator>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;
  overflow: hidden;
  background-color: var(--secondary-color);
`;

const HeroContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const Greeting = styled.p`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Name = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  
  .highlight {
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 40px;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScrollDown = styled.div`
  width: 30px;
  height: 50px;
  border: 2px solid var(--primary-color);
  border-radius: 25px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    width: 6px;
    height: 6px;
    background-color: var(--primary-color);
    border-radius: 50%;
    transform: translateX(-50%);
    animation: scrollAnim 2s infinite;
  }
  
  @keyframes scrollAnim {
    0% {
      opacity: 1;
      top: 10px;
    }
    100% {
      opacity: 0;
      top: 30px;
    }
  }
`;

export default Hero;