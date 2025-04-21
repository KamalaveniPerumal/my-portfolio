import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #ff6600; /* Orange */
    --secondary-color: #000000; /* Black */
    --text-color: #ffffff;
    --text-secondary: #cccccc;
    --background-color: #121212;
    --card-background: #1e1e1e;
    --transition: all 0.3s ease-in-out;
    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.7;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
    transition: var(--transition);
  }

  a:hover {
    color: var(--primary-color);
  }

  ul {
    list-style: none;
  }

  button, .btn {
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: 600;
    transition: var(--transition);
    background-color: var(--primary-color);
    color: var(--text-color);
    border: 2px solid var(--primary-color);
    font-family: 'Poppins', sans-serif;
    
    &:hover {
      background-color: transparent;
      color: var(--primary-color);
    }
  }

  .btn-outline {
    background-color: transparent;
    color: var(--primary-color);
    
    &:hover {
      background-color: var(--primary-color);
      color: var(--text-color);
    }
  }

  section {
    padding: 80px 0;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  h1 {
    font-size: 3.5rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
  }

  .section-title {
    text-align: center;
    margin-bottom: 50px;
    
    h2 {
      display: inline-block;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 70%;
        height: 3px;
        background-color: var(--primary-color);
      }
    }
  }

  .highlight {
    color: var(--primary-color);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in {
    animation: fadeIn 0.6s ease-in-out forwards;
  }
`;

export default GlobalStyles;