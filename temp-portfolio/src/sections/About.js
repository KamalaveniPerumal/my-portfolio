import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUserGraduate, FaCode, FaRobot, FaLanguage } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <AboutContainer id="about" ref={ref}>
      <AboutContent
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <SectionTitle as={motion.div} variants={itemVariants}>
          <h2>About <span className="highlight">Me</span></h2>
        </SectionTitle>
        
        <AboutGrid>
          <AboutText as={motion.div} variants={itemVariants}>
            <p>
              Jr. Software Engineer with 1.6+ years of professional experience in building scalable web applications using Laravel, React.js, MySQL, and other modern web tools.
            </p>
            <p>
              Currently working on AI-focused projects, contributing to AI-powered tools such as chatbots and image analysis systems.
            </p>
            <p>
              Recently completed a Prompt Engineering certification, applying that knowledge in real-time AI model fine-tuning and smart chatbot systems.
            </p>
            <p>
              Passionate about blending full stack skills with the power of AI to create next-gen applications.
            </p>
          </AboutText>
          
          <AboutCards>
            <AboutCard as={motion.div} variants={itemVariants}>
              <CardIcon>
                <FaCode />
              </CardIcon>
              <CardTitle>Full Stack Developer</CardTitle>
              <CardText>
                Experienced in building web applications using Laravel, React.js, and MySQL.
              </CardText>
            </AboutCard>
            
            <AboutCard as={motion.div} variants={itemVariants}>
              <CardIcon>
                <FaRobot />
              </CardIcon>
              <CardTitle>AI Enthusiast</CardTitle>
              <CardText>
                Working on AI-powered tools including chatbots and image analysis systems.
              </CardText>
            </AboutCard>
            
            <AboutCard as={motion.div} variants={itemVariants}>
              <CardIcon>
                <FaUserGraduate />
              </CardIcon>
              <CardTitle>Continuous Learner</CardTitle>
              <CardText>
                Recently completed Prompt Engineering certification for AI model fine-tuning.
              </CardText>
            </AboutCard>
            
            <AboutCard as={motion.div} variants={itemVariants}>
              <CardIcon>
                <FaLanguage />
              </CardIcon>
              <CardTitle>Multilingual</CardTitle>
              <CardText>
                Native Tamil speaker, fluent in English.
              </CardText>
            </AboutCard>
          </AboutCards>
        </AboutGrid>
      </AboutContent>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  background-color: var(--background-color);
  padding: 100px 0;
`;

const AboutContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  h2 {
    font-size: 2.5rem;
    display: inline-block;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--primary-color);
    }
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 20px;
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-secondary);
  }
`;

const AboutCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const AboutCard = styled.div`
  background-color: var(--card-background);
  border-radius: 10px;
  padding: 25px;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  border: 1px solid rgba(255, 102, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 102, 0, 0.2);
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--text-color);
`;

const CardText = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

export default About;