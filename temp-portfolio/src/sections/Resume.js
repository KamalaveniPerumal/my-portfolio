import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaDownload } from 'react-icons/fa';
import Button from '../components/Button';

const Resume = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const education = [
    {
      degree: "B.Sc. in Computer Science",
      institution: "University",
      year: "2021",
      grade: "84%"
    }
  ];

  const certifications = [
    {
      title: "Certified Web Developer",
      issuer: "Certification Authority",
      year: "2022"
    },
    {
      title: "Data Entry Operator Certification",
      issuer: "Certification Authority",
      year: "2021"
    },
    {
      title: "Prompt Engineering Certification",
      issuer: "Certification Authority",
      year: "2024"
    }
  ];

  return (
    <ResumeContainer id="resume" ref={ref}>
      <ResumeContent
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <SectionTitle as={motion.div} variants={itemVariants}>
          <h2>Resume & <span className="highlight">Certifications</span></h2>
        </SectionTitle>
        
        <ResumeGrid>
          <EducationSection as={motion.div} variants={itemVariants}>
            <SectionSubtitle>
              <FaGraduationCap /> Education
            </SectionSubtitle>
            
            {education.map((edu, index) => (
              <ResumeCard key={index} as={motion.div} variants={itemVariants}>
                <ResumeCardHeader>
                  <h3>{edu.degree}</h3>
                  <span>{edu.year}</span>
                </ResumeCardHeader>
                <ResumeCardBody>
                  <p>{edu.institution}</p>
                  <p>Grade: {edu.grade}</p>
                </ResumeCardBody>
              </ResumeCard>
            ))}
          </EducationSection>
          
          <CertificationsSection as={motion.div} variants={itemVariants}>
            <SectionSubtitle>
              <FaCertificate /> Certifications
            </SectionSubtitle>
            
            {certifications.map((cert, index) => (
              <ResumeCard key={index} as={motion.div} variants={itemVariants}>
                <ResumeCardHeader>
                  <h3>{cert.title}</h3>
                  <span>{cert.year}</span>
                </ResumeCardHeader>
                <ResumeCardBody>
                  <p>{cert.issuer}</p>
                </ResumeCardBody>
              </ResumeCard>
            ))}
          </CertificationsSection>
        </ResumeGrid>
        
        <DownloadSection as={motion.div} variants={itemVariants}>
          <p>Download my full resume for more details about my experience and skills.</p>
          <Button primary big>
            <a href="/resume.pdf" download>
              Download Resume <FaDownload />
            </a>
          </Button>
        </DownloadSection>
      </ResumeContent>
    </ResumeContainer>
  );
};

const ResumeContainer = styled.section`
  background-color: var(--secondary-color);
  padding: 100px 0;
`;

const ResumeContent = styled.div`
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

const ResumeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const SectionSubtitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--primary-color);
  
  svg {
    font-size: 1.5rem;
  }
`;

const ResumeSection = styled.div``;

const EducationSection = styled(ResumeSection)``;

const CertificationsSection = styled(ResumeSection)``;

const ResumeCard = styled.div`
  background-color: var(--card-background);
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  border-left: 4px solid var(--primary-color);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 102, 0, 0.2);
  }
`;

const ResumeCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  
  h3 {
    font-size: 1.3rem;
    color: var(--text-color);
  }
  
  span {
    background-color: var(--primary-color);
    color: var(--text-color);
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const ResumeCardBody = styled.div`
  p {
    color: var(--text-secondary);
    margin-bottom: 10px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const DownloadSection = styled.div`
  text-align: center;
  margin-top: 60px;
  
  p {
    margin-bottom: 20px;
    color: var(--text-secondary);
    font-size: 1.1rem;
  }
`;

export default Resume;