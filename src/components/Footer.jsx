import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Email,
  GitHub,
  LinkedIn,
  Favorite,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Email />,
      href: 'mailto:sandeepdara44@gmail.com',
      label: 'Email',
    },
    {
      icon: <GitHub />,
      href: 'https://github.com/sandeepdara-sd',
      label: 'GitHub',
    },
    {
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/sandeep-dara-1b0a23242/',
      label: 'LinkedIn',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#0a0a0a' : '#1a1a1a',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
          >
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  cursor: 'pointer',
                }}
                onClick={scrollToTop}
              >
                Sandeep Dara
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '400px',
                  lineHeight: 1.6,
                }}
              >
                Full Stack Developer & ML Engineer passionate about creating 
                innovative solutions that make a difference.
              </Typography>
            </Box>

            <Stack direction="row" spacing={1}>
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: '#4ecdc4',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {link.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Stack>
          </Stack>

          <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              © {currentYear} Sandeep Dara. All rights reserved.
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                variant="body2"
                sx={{ color: 'rgba(255, 255, 255, 0.6)' }}
              >
                Made with
              </Typography>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Favorite sx={{ color: '#ff6b6b', fontSize: '1rem' }} />
              </motion.div>
              <Typography
                variant="body2"
                sx={{ color: 'rgba(255, 255, 255, 0.6)' }}
              >
                using React & Material-UI
              </Typography>
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;