import {
  Box,
  Button,
  Container,
  Typography,
  Link,
  Stack,
  useTheme,
  Chip,
  Divider,
  Card,
  CardContent,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GitHub,
  GetApp,
  Code,
  Star,
  Visibility,
  TrendingUp,
  FlashOn,
  Security,
  Speed,
} from '@mui/icons-material';

const Contribution = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [hoveredCard, setHoveredCard] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hover: {
      y: -2,
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -2,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const features = [
    { icon: <FlashOn />, label: 'Lightning Fast', color: '#FFD700' },
    { icon: <Security />, label: 'Type Safe', color: '#4CAF50' },
    { icon: <Speed />, label: 'Zero Deps', color: '#2196F3' },
    { icon: <TrendingUp />, label: 'Smart Checks', color: '#FF5722' },
  ];

  const stats = [
    { label: 'Downloads', value: '1K+', icon: <GetApp /> },
    { label: 'Stars', value: '25+', icon: <Star /> },
    { label: 'Issues', value: '0', icon: <Visibility /> },
  ];

  return (
    <Box
      id="contribution"
      sx={{
        py: { xs: 6, md: 10 },
        background: isDark
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDark
            ? 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <Box textAlign="center" mb={6}>
              <Typography
                variant={isMobile ? 'h4' : 'h3'}
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  background: isDark
                    ? 'linear-gradient(45deg, #4ecdc4, #44a08d, #667eea)'
                    : 'linear-gradient(45deg, #ffffff, #f0f0f0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 4s ease-in-out infinite',
                  '@keyframes gradientShift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                  },
                }}
              >
                🧠 Smart Little Things I Built
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                  maxWidth: '600px',
                  margin: '0 auto',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                Crafting developer tools that make coding life easier, one utility at a time
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card
              onMouseEnter={() => setHoveredCard(true)}
              onMouseLeave={() => setHoveredCard(false)}
              sx={{
                maxWidth: '900px',
                margin: '0 auto',
                borderRadius: 4,
                backdropFilter: 'blur(20px)',
                background: isDark
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'rgba(255, 255, 255, 0.95)',
                boxShadow: hoveredCard
                  ? '0 20px 40px rgba(0, 0, 0, 0.3)'
                  : '0 10px 30px rgba(0, 0, 0, 0.2)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.3)'}`,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <motion.div variants={itemVariants}>
                  <Box textAlign="center" mb={4}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 2,
                        p: 2,
                        borderRadius: 3,
                        background: isDark
                          ? 'linear-gradient(45deg, #667eea, #764ba2)'
                          : 'linear-gradient(45deg, #4ecdc4, #44a08d)',
                        color: 'white',
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 'bold',
                      }}
                    >
                      <Code sx={{ fontSize: 'inherit' }} />
                      sd-is
                    </Box>
                    <Typography
                      variant={isMobile ? 'h6' : 'h5'}
                      sx={{
                        fontWeight: 'bold',
                        color: isDark ? '#fff' : '#333',
                        mb: 1,
                      }}
                    >
                      Because Even JavaScript Needs a Reality Check
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
                        fontStyle: 'italic',
                      }}
                    >
                      A lightweight utility library for smart type checking
                    </Typography>
                  </Box>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box mb={4}>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      justifyContent="center"
                      sx={{ mb: 3 }}
                    >
                      {features.map((feature, index) => (
                        <motion.div
                          key={feature.label}
                          variants={featureVariants}
                          initial="hidden"
                          whileInView="visible"
                          whileHover="hover"
                          custom={index}
                          viewport={{ once: true }}
                        >
                          <Chip
                            icon={feature.icon}
                            label={feature.label}
                            sx={{
                              bgcolor: `${feature.color}20`,
                              color: feature.color,
                              border: `1px solid ${feature.color}40`,
                              fontWeight: 'bold',
                              m: 0.5,
                            }}
                          />
                        </motion.div>
                      ))}
                    </Stack>
                  </Box>
                </motion.div>

                {/* Add more content as needed... */}

                <motion.div variants={itemVariants}>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <motion.div
                      variants={buttonVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      whileTap="tap"
                      viewport={{ once: true }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<GetApp />}
                        href="https://www.npmjs.com/package/sd-is"
                        target="_blank"
                        sx={{
                          px: 4,
                          py: 1.5,
                          fontWeight: 'bold',
                          borderRadius: 25,
                          background: 'linear-gradient(45deg, #667eea, #764ba2)',
                          color: 'white',
                        }}
                      >
                        Try on NPM
                      </Button>
                    </motion.div>

                    <motion.div
                      variants={buttonVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      whileTap="tap"
                      viewport={{ once: true }}
                    >
                      <Button
                        variant="outlined"
                        startIcon={<GitHub />}
                        href="https://github.com/sandeepdara-sd/sd-is"
                        target="_blank"
                        sx={{
                          px: 4,
                          py: 1.5,
                          fontWeight: 'bold',
                          borderRadius: 25,
                          borderColor: isDark ? '#4ecdc4' : '#667eea',
                          color: isDark ? '#4ecdc4' : '#667eea',
                        }}
                      >
                        GitHub Repo
                      </Button>
                    </motion.div>
                  </Stack>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contribution;
