import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import Contribution from './components/Contribution.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
    
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#4ecdc4',
        light: '#7fffd4',
        dark: '#26a69a',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#ff6b6b',
        light: '#ff9999',
        dark: '#cc5555',
        contrastText: '#ffffff',
      },
      accent: {
        main: '#ffd93d',
        light: '#ffed4e',
        dark: '#e6c200',
      },
      background: {
        default: darkMode ? '#0a0a0a' : '#fafafa',
        paper: darkMode ? '#1a1a1a' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#1a1a1a',
        secondary: darkMode ? '#b0b0b0' : '#666666',
      },
    },
    typography: {
      fontFamily: '"Rajdhani", "Exo 2", "Orbitron", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: {
        fontFamily: '"Orbitron", "Audiowide", "Rajdhani", sans-serif',
        fontWeight: 900,
        fontSize: 'clamp(2rem, 5vw, 3.5rem)', // Reduced from 2.5rem-4.5rem
        lineHeight: 1.1,
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        fontFeatureSettings: '"ss01", "ss02", "cv01", "cv02"',
      },
      h2: {
        fontFamily: '"Orbitron", "Exo 2", "Rajdhani", sans-serif',
        fontWeight: 800,
        fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', // Reduced from 2rem-3.5rem
        lineHeight: 1.15,
        letterSpacing: '0.01em',
        textTransform: 'uppercase',
        fontFeatureSettings: '"ss01", "ss02"',
      },
      h3: {
        fontFamily: '"Exo 2", "Rajdhani", "Orbitron", sans-serif',
        fontWeight: 700,
        fontSize: 'clamp(1.2rem, 3vw, 2rem)', // Reduced from 1.5rem-2.5rem
        lineHeight: 1.2,
        letterSpacing: '0.005em',
        textTransform: 'uppercase',
      },
      h4: {
        fontFamily: '"Exo 2", "Rajdhani", sans-serif',
        fontWeight: 700,
        fontSize: 'clamp(1rem, 2vw, 1.6rem)', // Reduced from 1.25rem-2rem
        lineHeight: 1.25,
        letterSpacing: '0.005em',
        textTransform: 'uppercase',
      },
      h5: {
        fontFamily: '"Rajdhani", "Exo 2", sans-serif',
        fontWeight: 600,
        fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)', // Reduced from 1.1rem-1.5rem
        lineHeight: 1.3,
        letterSpacing: '0.01em',
      },
      h6: {
        fontFamily: '"Rajdhani", "Exo 2", sans-serif',
        fontWeight: 600,
        fontSize: 'clamp(0.85rem, 1.3vw, 1rem)', // Reduced from 1rem-1.25rem
        lineHeight: 1.4,
        letterSpacing: '0.01em',
        textTransform: 'uppercase',
      },
      body1: {
        fontFamily: '"Rajdhani", "Exo 2", sans-serif',
        fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)', // Reduced from 1rem-1.1rem
        lineHeight: 1.6,
        fontWeight: 500,
        letterSpacing: '0.01em',
      },
      body2: {
        fontFamily: '"Rajdhani", "Exo 2", sans-serif',
        fontSize: 'clamp(0.8rem, 1.1vw, 0.85rem)', // Reduced from 0.9rem-1rem
        lineHeight: 1.5,
        fontWeight: 500,
        letterSpacing: '0.01em',
      },
      button: {
        fontFamily: '"Exo 2", "Rajdhani", sans-serif',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        fontSize: '0.8rem', // Reduced from 0.95rem
      },
      code: {
        fontFamily: '"JetBrains Mono", "Electrolize", monospace',
        fontFeatureSettings: '"liga", "calt"',
        letterSpacing: '0.02em',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarWidth: 'thin',
            scrollbarColor: darkMode ? '#4ecdc4 #1a1a1a' : '#4ecdc4 #f0f0f0',
            fontFamily: '"Rajdhani", "Exo 2", "Orbitron", sans-serif',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 16, // Reduced from 20
            padding: '10px 28px', // Reduced from 14px 36px
            fontSize: '0.85rem', // Reduced from 1rem
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            boxShadow: 'none',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-3px) scale(1.02)', // Reduced from -4px
              boxShadow: '0 12px 32px rgba(0,0,0,0.2), 0 0 16px rgba(78, 205, 196, 0.4)', // Reduced shadows
            },
            '&:active': {
              transform: 'translateY(-1px) scale(1.01)', // Reduced from -2px
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
              transition: 'left 0.6s ease',
            },
            '&:hover::before': {
              left: '100%',
            },
          },
          contained: {
            background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 50%, #ff6b6b 100%)',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 3s ease infinite',
            '@keyframes gradientShift': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
            '&:hover': {
              background: 'linear-gradient(135deg, #26a69a 0%, #2e7d32 50%, #ff5252 100%)',
              backgroundSize: '200% 200%',
            },
          },
          outlined: {
            borderWidth: '2px',
            borderColor: '#4ecdc4',
            color: '#4ecdc4',
            '&:hover': {
              borderWidth: '2px',
              borderColor: '#26a69a',
              backgroundColor: 'rgba(78, 205, 196, 0.1)',
              boxShadow: '0 0 16px rgba(78, 205, 196, 0.4)', // Reduced from 20px
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20, // Reduced from 24
            backdropFilter: 'blur(16px)', // Reduced from 20px
            border: darkMode 
              ? '1px solid rgba(78, 205, 196, 0.2)' 
              : '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: darkMode 
              ? '0 6px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(78, 205, 196, 0.1)' // Reduced from 8px 32px
              : '0 6px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-12px) scale(1.015)', // Reduced from -15px and 1.02
              boxShadow: darkMode 
                ? '0 24px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(78, 205, 196, 0.3), 0 0 24px rgba(78, 205, 196, 0.2)' // Reduced from 30px 80px and 30px
                : '0 24px 64px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05), 0 0 24px rgba(78, 205, 196, 0.1)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 12, // Reduced from 16
            fontWeight: 600,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            fontSize: '0.7rem', // Reduced from 0.8rem
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'scale(1.06) translateY(-1px)', // Reduced from 1.08 and -2px
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)', // Reduced from 6px 20px
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 16, // Reduced from 20
              fontFamily: '"Rajdhani", "Exo 2", sans-serif',
              fontSize: '0.95rem', // Reduced from 1.1rem
              fontWeight: 500,
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'translateY(-2px)', // Reduced from -3px
                boxShadow: '0 6px 20px rgba(78, 205, 196, 0.2)', // Reduced from 8px 25px
              },
              '&.Mui-focused': {
                transform: 'translateY(-3px)', // Reduced from -4px
                boxShadow: '0 10px 28px rgba(78, 205, 196, 0.3)', // Reduced from 12px 35px
              },
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'scale(1.1) rotate(5deg)', // Reduced from 1.15
              boxShadow: '0 4px 16px rgba(78, 205, 196, 0.3)', // Reduced from 6px 20px
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            textShadow: '0 0 16px rgba(78, 205, 196, 0.5)', // Reduced from 20px
          },
          h2: {
            textShadow: '0 0 12px rgba(78, 205, 196, 0.3)', // Reduced from 15px
          },
          h3: {
            textShadow: '0 0 8px rgba(78, 205, 196, 0.2)', // Reduced from 10px
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    spacing: 6, // Reduced from 8
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  if (loading) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ParticleBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contribution/>
        <Contact />
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
