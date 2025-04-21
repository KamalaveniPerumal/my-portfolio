import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

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
    <ContactContainer id="contact" ref={ref}>
      <ContactContent
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <SectionTitle as={motion.div} variants={itemVariants}>
          <h2>Contact <span className="highlight">Me</span></h2>
        </SectionTitle>
        
        <ContactGrid>
          <ContactInfo as={motion.div} variants={itemVariants}>
            <ContactInfoTitle>Get In Touch</ContactInfoTitle>
            <ContactInfoText>
              Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </ContactInfoText>
            
            <ContactInfoItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>
                <h4>Email</h4>
                <p>perumalkamalaveni@gmail.com</p>
              </ContactText>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactText>
                <h4>Phone</h4>
                <p>7708250694</p>
              </ContactText>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>
                <h4>Location</h4>
                <p>Cuddalore, Tamil Nadu</p>
              </ContactText>
            </ContactInfoItem>
            
            <SocialLinks>
              <SocialLink 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                as={motion.a}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </SocialLink>
              <SocialLink 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                as={motion.a}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm 
            as={motion.form} 
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                as={motion.input}
                whileFocus={{ borderColor: 'var(--primary-color)' }}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                as={motion.input}
                whileFocus={{ borderColor: 'var(--primary-color)' }}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Subject</FormLabel>
              <FormInput
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                as={motion.input}
                whileFocus={{ borderColor: 'var(--primary-color)' }}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormTextarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                as={motion.textarea}
                whileFocus={{ borderColor: 'var(--primary-color)' }}
              />
            </FormGroup>
            
            <SubmitButton>
              <Button primary big type="submit">
                Send Message
              </Button>
            </SubmitButton>
            
            {formSubmitted && (
              <SubmissionMessage
                as={motion.div}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Thank you for your message! I'll get back to you soon.
              </SubmissionMessage>
            )}
          </ContactForm>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

const ContactContainer = styled.section`
  background-color: var(--background-color);
  padding: 100px 0;
`;

const ContactContent = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: var(--card-background);
  border-radius: 10px;
  padding: 40px;
  box-shadow: var(--box-shadow);
  border-left: 4px solid var(--primary-color);
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: var(--primary-color);
`;

const ContactInfoText = styled.p`
  color: var(--text-secondary);
  margin-bottom: 30px;
  line-height: 1.8;
`;

const ContactInfoItem = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-right: 15px;
`;

const ContactText = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 5px;
  }
  
  p {
    color: var(--text-secondary);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  color: var(--text-color);
  border-radius: 50%;
  font-size: 1.2rem;
  transition: var(--transition);
  
  &:hover {
    background-color: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }
`;

const ContactForm = styled.form`
  background-color: var(--card-background);
  border-radius: 10px;
  padding: 40px;
  box-shadow: var(--box-shadow);
  border-right: 4px solid var(--primary-color);
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  color: var(--text-color);
  font-family: 'Poppins', sans-serif;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  color: var(--text-color);
  font-family: 'Poppins', sans-serif;
  resize: vertical;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const SubmitButton = styled.div`
  text-align: center;
`;

const SubmissionMessage = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: rgba(255, 102, 0, 0.2);
  border-radius: 5px;
  color: var(--primary-color);
  text-align: center;
  font-weight: 500;
`;

export default Contact;