import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import { 
  FaReact, 
  FaLaravel, 
  FaDatabase, 
  FaCode, 
  FaTools, 
  FaRobot,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaFigma,
  FaServer,
  FaLink
} from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode />,
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> }
      ]
    },
    {
      title: "Backend",
      icon: <FaLaravel />,
      description: "Developing robust server-side applications",
      skills: [
        { name: "Laravel", icon: <FaLaravel /> },
        { name: "MySQL", icon: <SiMysql /> }
      ]
    },
    {
      title: "AI/ML",
      icon: <FaRobot />,
      description: "Creating intelligent systems and applications",
      skills: [
        { name: "Prompt Engineering", icon: <FaRobot /> },
        { name: "Model Fine-Tuning", icon: <FaRobot /> },
        { name: "AI Chatbot Development", icon: <FaRobot /> },
        { name: "Image Analysis using AI Models", icon: <FaRobot /> }
      ]
    },
    {
      title: "Tools",
      icon: <FaTools />,
      description: "Utilizing various tools for efficient development",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "WordPress", icon: <FaWordpress /> },
        { name: "Figma", icon: <FaFigma /> }
      ]
    },
    {
      title: "API Integration",
      icon: <FaLink />,
      description: "Connecting applications with external services",
      skills: [
        { name: "REST APIs", icon: <FaServer /> },
        { name: "Payment Gateway", icon: <FaDatabase /> }
      ]
    }
  ];

  return (
    <SkillsContainer id="skills" ref={ref}>
      <SkillsContent>
        <SectionTitle
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2>My <span className="highlight">Skills</span></h2>
        </SectionTitle>
        
        <SkillsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
            />
          ))}
        </SkillsGrid>
        
        <SkillsDetail>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <CategoryTitle>
                {category.icon} {category.title}
              </CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    as={motion.div}
                    whileHover={{ scale: 1.05 }}
                  >
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsDetail>
      </SkillsContent>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.section`
  background-color: var(--secondary-color);
  padding: 100px 0;
`;

const SkillsContent = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const SkillsDetail = styled.div`
  margin-top: 50px;
`;

const SkillCategory = styled.div`
  margin-bottom: 40px;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--card-background);
  padding: 10px 15px;
  border-radius: 30px;
  transition: var(--transition);
  border: 1px solid rgba(255, 102, 0, 0.2);
  
  &:hover {
    background-color: rgba(255, 102, 0, 0.2);
  }
`;

const SkillIcon = styled.div`
  color: var(--primary-color);
  font-size: 1.2rem;
`;

const SkillName = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

export default Skills;