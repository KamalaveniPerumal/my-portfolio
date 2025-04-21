import React from 'react';
import styled from 'styled-components';

// A simpler version of the particle background using CSS
const ParticleBackground = () => {
  return (
    <BackgroundContainer>
      <GradientOverlay />
      <Particles>
        {Array.from({ length: 20 }).map((_, index) => (
          <Particle key={index} index={index} />
        ))}
      </Particles>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background-color: var(--secondary-color);
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255, 102, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 70%);
`;

const Particles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Particle = styled.div`
  position: absolute;
  width: ${props => (props.index % 5 === 0 ? '4px' : '2px')};
  height: ${props => (props.index % 5 === 0 ? '4px' : '2px')};
  background-color: ${props => (props.index % 3 === 0 ? 'var(--primary-color)' : '#ffffff')};
  border-radius: 50%;
  opacity: ${props => 0.3 + (props.index % 7) * 0.1};
  top: ${props => (props.index * 5) % 100}%;
  left: ${props => (props.index * 7) % 100}%;
  animation: float-${props => props.index} ${props => 15 + props.index % 10}s linear infinite;
  
  @keyframes float-${props => props.index} {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(${props => 50 + props.index % 100}px, ${props => 30 + props.index % 50}px);
    }
    50% {
      transform: translate(${props => 100 + props.index % 150}px, ${props => -20 - props.index % 40}px);
    }
    75% {
      transform: translate(${props => 50 - props.index % 80}px, ${props => -50 - props.index % 60}px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

export default ParticleBackground;