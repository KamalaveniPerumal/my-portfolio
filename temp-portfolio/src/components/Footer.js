import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <TopSection>
          <LogoSection>
            <Logo>
              <span className="highlight">K</span>amalaveni
            </Logo>
            <Tagline>Junior Software Engineer</Tagline>
          </LogoSection>
          
          <QuickLinks>
            <LinkTitle>Quick Links</LinkTitle>
            <LinkList>
              <LinkItem>
                <StyledLink
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Home
                </StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Skills
                </StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Projects
                </StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink
                  to="resume"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Resume
                </StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contact
                </StyledLink>
              </LinkItem>
            </LinkList>
          </QuickLinks>
          
          <ContactSection>
            <LinkTitle>Contact Info</LinkTitle>
            <ContactInfo>
              <ContactItem>
                <FaEnvelope /> perumalkamalaveni@gmail.com
              </ContactItem>
              <ContactItem>
                <FaGithub /> GitHub
              </ContactItem>
              <ContactItem>
                <FaLinkedin /> LinkedIn
              </ContactItem>
            </ContactInfo>
          </ContactSection>
        </TopSection>
        
        <Divider />
        
        <BottomSection>
          <Copyright>
            &copy; {currentYear} Kamalaveni Perumal. All rights reserved.
          </Copyright>
          
          <ScrollToTop
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <FaArrowUp />
            </Link>
          </ScrollToTop>
        </BottomSection>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: var(--secondary-color);
  padding: 60px 0 20px;
  position: relative;
`;

const FooterContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const LogoSection = styled.div``;

const Logo = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
  
  .highlight {
    color: var(--primary-color);
  }
`;

const Tagline = styled.p`
  color: var(--text-secondary);
  margin-bottom: 20px;
`;

const QuickLinks = styled.div``;

const LinkTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: var(--primary-color);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--primary-color);
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const LinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LinkItem = styled.li``;

const StyledLink = styled(Link)`
  color: var(--text-secondary);
  transition: var(--transition);
  cursor: pointer;
  
  &:hover {
    color: var(--primary-color);
    padding-left: 5px;
  }
`;

const ContactSection = styled.div``;

const ContactInfo = styled.ul``;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  color: var(--text-secondary);
  
  svg {
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 40px 0 20px;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const ScrollToTop = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: transparent;
    border: 1px solid var(--primary-color);
    
    svg {
      color: var(--primary-color);
    }
  }
  
  svg {
    color: var(--text-color);
  }
`;

export default Footer;