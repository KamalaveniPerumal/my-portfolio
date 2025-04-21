import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarContent>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="highlight">K</span>amalaveni
        </Logo>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <NavMenu mobileMenuOpen={mobileMenuOpen}>
          <NavItem
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <NavLink
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <NavLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <NavLink
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={closeMobileMenu}
            >
              Skills
            </NavLink>
          </NavItem>
          <NavItem
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <NavLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={closeMobileMenu}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <NavLink
              to="resume"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={closeMobileMenu}
            >
              Resume
            </NavLink>
          </NavItem>
          <NavItem
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <NavLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavbarContent>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: ${({ scrolled }) => (scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent')};
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(10px)' : 'none')};
  transition: var(--transition);
  z-index: 1000;
  box-shadow: ${({ scrolled }) => (scrolled ? 'var(--box-shadow)' : 'none')};
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;

  .highlight {
    color: var(--primary-color);
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--text-color);
  transition: var(--transition);

  &:hover {
    color: var(--primary-color);
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: ${({ mobileMenuOpen }) => (mobileMenuOpen ? '0' : '-100%')};
    width: 100%;
    height: calc(100vh - 80px);
    background-color: rgba(0, 0, 0, 0.95);
    transition: var(--transition);
    padding: 40px 0;
  }
`;

const NavItem = styled(motion.li)`
  margin-left: 30px;

  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: var(--transition);
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &.active {
    color: var(--primary-color);
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default Navbar;