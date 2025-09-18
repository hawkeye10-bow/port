import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Code,
  Psychology,
  Web,
  CloudQueue,
  TrendingUp,
  Security,
  Speed,
  EmojiObjects,
  Star,
  Verified,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const highlights = [
  {
    icon: <Code />,
    title: 'Full Stack Development',
    description: 'Hands-on experience with the MERN stack, building and deploying scalable web apps across different domains.',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    stats: '15+ Projects',
    achievements: ['React', 'Node.js', 'MongoDB'],
  },
  {
    icon: <Psychology />,
    title: 'AI & Machine Learning',
    description: 'Built intelligent systems with over 85% accuracy using practical ML models and libraries.',
    color: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
    stats: '85% Accuracy',
    achievements: ['TensorFlow', 'scikit-learn', 'CNNs'],
  },
  {
    icon: <TrendingUp />,
    title: 'Performance Tuning',
    description: 'Implemented optimization techniques to improve system efficiency by up to 40%.',
    color: 'linear-gradient(135deg, #ffd93d 0%, #e6c200 100%)',
    stats: '40% Faster',
    achievements: ['Code Profiling', 'DB Optimization', 'Caching Strategies'],
  },
];


  const achievements = [
    { number: '9.11', label: 'GPA Score', suffix: '/10', icon: <Star /> },
    { number: '10+', label: 'Projects Built', suffix: '', icon: <Code /> },
    { number: '3', label: 'Certifications', suffix: '', icon: <Verified /> },
    { number: '2', label: 'Internships', suffix: '', icon: <TrendingUp /> },
  ];

  return (
    <Box 
      id="about" 
      ref={ref}
      sx={{ 
        py: { xs: 10, md: 16 }, 
        backgroundColor: (theme) => 
          theme.palette.mode === 'dark' ? '#0f0f0f' : '#f8f9fa',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Enhanced background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '60%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(78, 205, 196, 0.08) 0%, transparent 70%)',
          clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      />

      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={3} sx={{ mb: 3 }}>
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <EmojiObjects sx={{ color: 'primary.main', fontSize: '3rem' }} />
            </motion.div>
            <Typography
              variant="h2"
              align="center"
              sx={{
                background: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(45deg, #4ecdc4, #ff6b6b)'
                    : 'linear-gradient(45deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 900,
              }}
            >
              About Me
            </Typography>
          </Stack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 10,
              maxWidth: '1000px',
              mx: 'auto',
              color: 'text.primary',
              fontWeight: 500,
              lineHeight: 1.6,
              fontSize: { xs: '1.3rem', md: '1.6rem' },
            }}
          >
            Passionate Computer Science student at KL University, crafting innovative digital solutions 
            with a perfect blend of technical expertise, creative problem-solving, and industry best practices.
          </Typography>
        </motion.div>

        {/* Enhanced Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Grid container spacing={4} sx={{ mb: 12 }}>
            {achievements.map((achievement, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                >
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: 4,
                      background: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
                          : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                      border: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '1px solid rgba(78, 205, 196, 0.2)'
                          : '1px solid rgba(0, 0, 0, 0.05)',
                      '&:hover': {
                        boxShadow: '0 25px 50px rgba(78, 205, 196, 0.25)',
                        '& .achievement-icon': {
                          transform: 'scale(1.2) rotate(10deg)',
                        },
                      },
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <Box
                      className="achievement-icon"
                      sx={{
                        mb: 2,
                        color: 'primary.main',
                        fontSize: '2.5rem',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      {achievement.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 900,
                        background: 'linear-gradient(45deg, #4ecdc4, #ff6b6b)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        mb: 1,
                      }}
                    >
                      {achievement.number}
                      <Typography component="span" variant="h6" sx={{ color: 'text.secondary' }}>
                        {achievement.suffix}
                      </Typography>
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                      {achievement.label}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Main Content */}
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              <Box sx={{ position: 'relative' }}>
                <motion.div
                  whileHover={{ scale: 1.03, rotateY: 8 }}
                  transition={{ duration: 0.4 }}
                >
                  <Avatar
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    sx={{
                      width: { xs: 320, md: 450 },
                      height: { xs: 320, md: 450 },
                      mx: 'auto',
                      mb: 4,
                      border: '8px solid',
                      borderColor: 'primary.main',
                      boxShadow: '0 25px 80px rgba(78, 205, 196, 0.4)',
                      filter: 'brightness(1.1) contrast(1.05) saturate(1.1)',
                    }}
                  />
                </motion.div>

                {/* Enhanced floating elements */}
                {[Speed, Security, Web].map((Icon, index) => (
                  <motion.div
                    key={index}
                    style={{
                      position: 'absolute',
                      top: `${15 + index * 35}%`,
                      right: index % 2 === 0 ? '-15%' : 'auto',
                      left: index % 2 === 1 ? '-15%' : 'auto',
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 8, 0, -8, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.7,
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #4ecdc4, #ff6b6b)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
                        border: '3px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      <Icon sx={{ fontSize: '2rem' }} />
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 5,
                  fontWeight: 800,
                  color: 'primary.main',
                }}
              >
                Transforming Ideas Into Reality
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 5,
                  fontSize: '1.3rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                With a stellar GPA of 9.11/10 and hands-on experience across multiple internships, 
                I specialize in building scalable applications that solve real-world problems. 
                My journey spans from creating ATS-optimized resume builders to developing 
                sophisticated machine learning models that drive business growth.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 6,
                  fontSize: '1.3rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                I believe in the power of technology to create meaningful impact. Whether it's 
                improving job search efficiency by 40% or building enterprise solutions that 
                reduce manual workload by 50%, I'm driven by results that matter and innovation that inspires.
              </Typography>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  sx={{
                    p: 5,
                    background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)',
                    border: '1px solid rgba(78, 205, 196, 0.2)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      fontWeight: 700,
                      color: 'primary.main',
                      fontSize: '1.4rem',
                    }}
                  >
                    🎯 Current Focus
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      fontSize: '1.1rem',
                    }}
                  >
                    Exploring advanced AI/ML techniques, cloud-native architectures, and 
                    contributing to open-source projects while preparing for my next big opportunity 
                    in the tech industry. Always learning, always growing, always innovating.
                  </Typography>
                </Card>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>

        {/* Enhanced Expertise Cards */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              mt: 16,
              mb: 10,
              fontWeight: 800,
              color: 'text.primary',
            }}
          >
            Core Expertise
          </Typography>

          <Grid container spacing={5} justifyContent="center">
            {highlights.map((item, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                lg={3} 
                key={index} 
                display="flex" 
                justifyContent="center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.7 + index * 0.15 }}
                  whileHover={{ y: -20, scale: 1.03 }}
                  style={{ width: '100%', maxWidth: 320 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 5,
                      background: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
                          : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                      border: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '1px solid rgba(255, 255, 255, 0.08)'
                          : '1px solid rgba(0, 0, 0, 0.04)',
                      '&:hover': {
                        boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                        '& .icon-container': {
                          transform: 'scale(1.15) rotate(8deg)',
                        },
                        '& .achievement-chips': {
                          transform: 'translateY(-5px)',
                        },
                      },
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <CardContent>
                      <Box
                        className="icon-container"
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: item.color,
                          margin: '0 auto 32px',
                          color: 'white',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
                        }}
                      >
                        {React.cloneElement(item.icon, { fontSize: 'large' })}
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          mb: 3,
                          fontWeight: 800,
                          color: 'text.primary',
                          fontSize: '1.4rem',
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        
                        sx={{
                          mb: 4,
                          color: 'text.secondary',
                          lineHeight: 1.7,
                          fontSize: '1rem',
                        }}
                      >
                        {item.description}
                      </Typography>

                      <Box
                        className="achievement-chips"
                        sx={{
                          mb: 4,
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        <Chip
                          label={item.stats}
                          sx={{
                            background: item.color,
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '1rem',
                            py: 1,
                            px: 2,
                            mb: 2,
                          }}
                        />
                        <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" sx={{ gap: 0.5 }}>
                          {item.achievements.map((achievement, achIndex) => (
                            <Chip
                              key={achIndex}
                              label={achievement}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(78, 205, 196, 0.1)',
                                color: 'primary.main',
                                fontSize: '0.8rem',
                                fontWeight: 500,
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
