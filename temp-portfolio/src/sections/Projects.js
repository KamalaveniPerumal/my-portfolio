import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

// Use placeholder colors instead of images
const placeholderColors = {
  matrimony: '#ff6600',
  company: '#ff8533',
  faqBot: '#ffa366',
  imageAnalyzer: '#ffc299'
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projects = [
    {
      title: "Matrimony Web Application",
      description: "Developed using Laravel with features like OTP verification, payment gateway, and user management. Optimized performance with advanced MySQL queries and smooth third-party API integrations. Created a responsive UI using Bootstrap.",
      technologies: ["Laravel", "MySQL", "Bootstrap", "API Integration", "Payment Gateway"],
      image: null, // We'll use a colored div instead
      color: placeholderColors.matrimony,
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Internal Company Website",
      description: "Built a dynamic internal site using React.js + Laravel. Focused on UI/UX, modular architecture, and cross-browser performance.",
      technologies: ["React.js", "Laravel", "MySQL", "Responsive Design"],
      image: null,
      color: placeholderColors.company,
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "AI FAQ Bot (Current Work)",
      description: "Developed an AI-powered chatbot capable of answering document-based and general questions. Built using prompt engineering principles with model fine-tuning for accuracy. Designed to be embedded into any website via a CDN-style script.",
      technologies: ["AI", "Prompt Engineering", "Model Fine-Tuning", "JavaScript"],
      image: null,
      color: placeholderColors.faqBot,
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Image Analyzer Using AI (Current Work)",
      description: "Created an AI tool to analyze shelf images and recognize products. Capable of calculating brand share, detecting multiple product types, and handling dull/blurry image inputs.",
      technologies: ["AI", "Image Analysis", "Computer Vision", "Product Recognition"],
      image: null,
      color: placeholderColors.imageAnalyzer,
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <ProjectsContainer id="projects" ref={ref}>
      <ProjectsContent>
        <SectionTitle
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2>My <span className="highlight">Projects</span></h2>
        </SectionTitle>
        
        <ProjectsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5 } 
                }
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            </motion.div>
          ))}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.section`
  background-color: var(--background-color);
  padding: 100px 0;
`;

const ProjectsContent = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default Projects;