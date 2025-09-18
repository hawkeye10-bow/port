import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  Stack,
  IconButton,
  Grid,
  Chip,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Download,
  ArrowDownward,
  Code,
  Psychology,
  CloudQueue,
  Star,
  TrendingUp,
} from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
// import resume from '../assets/DARA_SANDEEP.pdf'; 
import dp from '../assets/dp.jpg';

const Hero = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  const achievements = [
    { icon: <Star />, label: '9.11 GPA', color: '#ffd93d' },
    { icon: <Code />, label: '10+ Projects', color: '#4ecdc4' },
    
  ];

  const floatingElements = [
    { icon: '💻', delay: 0, x: 15, y: 20, size: '1.5rem' },
    { icon: '🚀', delay: 0.5, x: 85, y: 15, size: '1.8rem' },
    { icon: '⚡', delay: 1, x: 10, y: 70, size: '1.5rem' },
    { icon: '🎯', delay: 1.5, x: 90, y: 75, size: '1.5rem' },
    { icon: '🌟', delay: 2, x: 20, y: 45, size: '1.3rem' },
    { icon: '💡', delay: 2.5, x: 80, y: 50, size: '1.5rem' },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: (theme) => 
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #1a1a2e 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 8 },
      }}
    >
      {/* Optimized animated background elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            borderRadius: '50%',
            background: `linear-gradient(45deg, rgba(78, 205, 196, ${Math.random() * 0.6 + 0.2}), rgba(255, 107, 107, ${Math.random() * 0.6 + 0.2}))`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 15 - 7.5, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating emoji elements */}
      {floatingElements.map((item, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: item.size,
            zIndex: 1,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 8, -8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 4, md: 6 } }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={7}>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Box sx={{ pl: { xs: 2, sm: 3, md: 4 } }}>
                <motion.div
                  animate={{
                    x: mousePosition.x * 6,
                    y: mousePosition.y * 6,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Typography
                        sx={{
                          fontSize: '1.5rem',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                        }}
                      >
                        👋
                      </Typography>
                    </motion.div>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        background: 'linear-gradient(45deg, #4ecdc4, #ff6b6b)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Hello, I'm
                    </Typography>
                  </Stack>

                  <Typography
                    variant="h1"
                    sx={{
                      color: 'white',
                      mb: 2,
                      fontWeight: 900,
                      background: 'linear-gradient(45deg, #4ecdc4, #ff6b6b, #ffd93d, #26c6da)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      backgroundSize: '300% 300%',
                      animation: 'gradient 4s ease infinite',
                      textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                      '@keyframes gradient': {
                        '0%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                        '100%': { backgroundPosition: '0% 50%' },
                      },
                    }}
                  >
                    SANDEEP DARA
                  </Typography>

                  <Box sx={{ mb: 4, minHeight: { xs: '80px', md: '100px' } }}>
                    <TypeAnimation
                      sequence={[
                        'Full Stack Developer 🚀',
                        2500,
                        'Machine Learning Engineer 🤖',
                        2500,                      
                        'Problem Solver 🎯',
                        2500,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{
                        fontSize: 'clamp(1.3rem, 4vw, 2.5rem)',
                        fontWeight: 700,
                        color: 'rgba(255, 255, 255, 0.95)',
                        fontFamily: '"Inter", "SF Pro Display", sans-serif',
                        lineHeight: 1.2,
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                      }}
                      repeat={Infinity}
                    />
                  </Box>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        mb: 4,
                        maxWidth: '600px',
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        lineHeight: 1.6,
                        fontWeight: 400,
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                      }}
                    >
                      Crafting next-generation digital experiences with cutting-edge technologies. 
                      Specialized in MERN stack, AI/ML, and Java that drive measurable business growth.
                    </Typography>
                  </motion.div>

                  {/* Achievement chips */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <Stack 
                      direction="row" 
                      spacing={1.5} 
                      flexWrap="wrap" 
                      sx={{ mb: 4, gap: 1 }}
                    >
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <Chip
                            icon={React.cloneElement(achievement.icon, { 
                              sx: { color: 'white !important', fontSize: '1rem' } 
                            })}
                            label={achievement.label}
                            sx={{
                              background: `linear-gradient(135deg, ${achievement.color}, ${achievement.color}dd)`,
                              color: 'white',
                              fontWeight: 600,
                              fontSize: '0.85rem',
                              px: 0.5,
                              py: 2,
                              boxShadow: `0 3px 12px ${achievement.color}40`,
                              border: '1px solid rgba(255,255,255,0.2)',
                              '&:hover': {
                                boxShadow: `0 6px 20px ${achievement.color}60`,
                              },
                            }}
                          />
                        </motion.div>
                      ))}
                    </Stack>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.4 }}
                  >
                    <Stack 
                      direction={{ xs: 'column', sm: 'row' }} 
                      spacing={2.5} 
                      sx={{ mb: 4 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="contained"
                          size="large"
                          startIcon={<Download />}
                          sx={{
                            background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
                            px: 4,
                            py: 2,
                            fontSize: '1rem',
                            fontWeight: 700,
                            borderRadius: 3,
                            boxShadow: '0 8px 25px rgba(78, 205, 196, 0.4)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #26a69a 0%, #2e7d32 100%)',
                              boxShadow: '0 12px 35px rgba(78, 205, 196, 0.5)',
                            },
                          }}
                          href="/DARA_SANDEEP.pdf"
                          download="DARA_SANDEEP.pdf"
                        >
                          Download Resume
                        </Button>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outlined"
                          size="large"
                          onClick={scrollToAbout}
                          sx={{
                            color: 'white',
                            borderColor: 'rgba(255, 255, 255, 0.6)',
                            px: 4,
                            py: 2,
                            fontSize: '1rem',
                            fontWeight: 700,
                            borderRadius: 3,
                            borderWidth: 2,
                            backdropFilter: 'blur(10px)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            '&:hover': {
                              borderColor: '#4ecdc4',
                              color: '#4ecdc4',
                              backgroundColor: 'rgba(78, 205, 196, 0.1)',
                              borderWidth: 2,
                              boxShadow: '0 6px 25px rgba(78, 205, 196, 0.3)',
                            },
                          }}
                        >
                          Explore My Work
                        </Button>
                      </motion.div>
                    </Stack>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.6 }}
                  >
                    <Stack direction="row" spacing={2}>
                      {[
                        { icon: <Email />, href: 'mailto:sandeepdara44@gmail.com', color: '#ff6b6b', label: 'Email' },
                        { icon: <GitHub />, href: 'https://github.com/sandeepdara-sd', color: '#333', label: 'GitHub' },
                        { icon: <LinkedIn />, href: 'https://www.linkedin.com/in/sandeep-dara-1b0a23242/', color: '#0077b5', label: 'LinkedIn' },
                      ].map((social, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.15, y: -6, rotate: 3 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.8 + index * 0.1 }}
                        >
                          <IconButton
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            sx={{
                              color: 'white',
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              backdropFilter: 'blur(15px)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              width: 50,
                              height: 50,
                              '&:hover': {
                                backgroundColor: social.color,
                                boxShadow: `0 8px 25px ${social.color}50`,
                                borderColor: social.color,
                              },
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                          >
                            {social.icon}
                          </IconButton>
                        </motion.div>
                      ))}
                    </Stack>
                  </motion.div>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: { xs: 4, lg: 0 },
                  pr: { xs: 2, sm: 3, md: 4 },
                }}
              >
                {/* Optimized rotating rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    style={{
                      position: 'absolute',
                      width: `${180 + ring * 40}px`,
                      height: `${180 + ring * 40}px`,
                      border: `2px solid rgba(78, 205, 196, ${0.3 / ring})`,
                      borderRadius: '50%',
                      borderTop: `2px solid rgba(255, 107, 107, ${0.5 / ring})`,
                      borderRight: `2px solid rgba(255, 215, 61, ${0.4 / ring})`,
                    }}
                    animate={{
                      rotate: ring % 2 === 0 ? 360 : -360,
                    }}
                    transition={{
                      duration: 12 + ring * 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                ))}

                {/* Profile image with enhanced 3D effect */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotateY: [0, 6, 0, -6, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 15,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Avatar
                    src={dp}
                    sx={{
                      width: { xs: 240, md: 280, lg: 400 },
                      height: { xs: 240, md: 280, lg: 400 },
                      border: '6px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
                      filter: 'brightness(1.1) contrast(1.05) saturate(1.05)',
                      background: 'linear-gradient(135deg, #4ecdc4, #ff6b6b)',
                      p: 0.5,
                    }}
                  />
                </motion.div>

                {/* Optimized floating particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    style={{
                      position: 'absolute',
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: `linear-gradient(45deg, #4ecdc4, #ff6b6b)`,
                      left: `${50 + Math.cos((i * Math.PI * 2) / 8) * 35}%`,
                      top: `${50 + Math.sin((i * Math.PI * 2) / 8) * 35}%`,
                      boxShadow: '0 3px 8px rgba(78, 205, 196, 0.6)',
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Optimized scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconButton
            onClick={scrollToAbout}
            sx={{
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(15px)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              width: 56,
              height: 56,
              '&:hover': {
                backgroundColor: 'rgba(78, 205, 196, 0.2)',
                transform: 'translateY(-6px)',
                boxShadow: '0 8px 25px rgba(78, 205, 196, 0.4)',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <ArrowDownward sx={{ fontSize: '1.5rem' }} />
          </IconButton>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Hero;
