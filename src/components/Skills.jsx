import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  Chip,
} from '@mui/material';
import {
  Code,
  Storage,
  Web,
  Cloud,
  Psychology,
  Extension,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code />,
      color: 'linear-gradient(45deg, #667eea, #764ba2)',
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 95 },
        { name: 'C', level: 75 },
      ],
    },
    {
      title: 'Web Development',
      icon: <Web />,
      color: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      title: 'Databases',
      icon: <Storage />,
      color: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 75 },
      ],
    },
    {
      title: 'Frameworks & Technologies',
      icon: <Extension />,
      color: 'linear-gradient(45deg, #ffa726, #fb8c00)',
      skills: [
        { name: 'Spring Boot', level: 80 },
        { name: 'Django', level: 85 },
        { name: 'Flask', level: 75 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud />,
      color: 'linear-gradient(45deg, #ab47bc, #8e24aa)',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
      ],
    },
    {
      title: 'AI/ML',
      icon: <Psychology />,
      color: 'linear-gradient(45deg, #26c6da, #00acc1)',
      skills: [
        { name: 'TensorFlow', level: 80 },
        { name: 'scikit-learn', level: 85 },
        { name: 'Keras', level: 75 },
      ],
    },
  ];

  const coreSkills = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'API Integration',
    'Microservices Architecture',
    'Selenium',
    'RESTful APIs',
    'Agile Development',
    'Unit Testing',
    'CI/CD',
    'Problem Solving',
  ];

  return (
    <Box id="skills" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, #4ecdc4, #44a08d)'
                  : 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Skills & Technologies
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
                        : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    border: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '1px solid rgba(255, 255, 255, 0.1)'
                        : '1px solid rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '0 25px 50px rgba(0,0,0,0.5)'
                          : '0 25px 50px rgba(0,0,0,0.15)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent>
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: category.color,
                          color: 'white',
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'primary.main',
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Stack>

                    <Stack spacing={2}>
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.1 + skillIndex * 0.1 
                          }}
                          viewport={{ once: true }}
                        >
                          <Box>
                            <Stack 
                              direction="row" 
                              justifyContent="space-between" 
                              alignItems="center"
                              sx={{ mb: 1 }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: 500,
                                  color: 'text.primary',
                                }}
                              >
                                {skill.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: 'text.secondary',
                                  fontSize: '0.85rem',
                                }}
                              >
                                {skill.level}%
                              </Typography>
                            </Stack>
                            <LinearProgress
                              variant="determinate"
                              value={skill.level}
                              sx={{
                                height: 6,
                                borderRadius: 3,
                                backgroundColor: (theme) =>
                                  theme.palette.mode === 'dark'
                                    ? 'rgba(255, 255, 255, 0.1)'
                                    : 'rgba(0, 0, 0, 0.1)',
                                '& .MuiLinearProgress-bar': {
                                  borderRadius: 3,
                                  background: category.color,
                                },
                              }}
                            />
                          </Box>
                        </motion.div>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                fontWeight: 600,
                color: 'primary.main',
              }}
            >
              Core Competencies
            </Typography>
            <Stack 
              direction="row" 
              spacing={1} 
              justifyContent="center" 
              flexWrap="wrap"
              sx={{ gap: 1 }}
            >
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Chip
                    label={skill}
                    sx={{
                      backgroundColor: 'secondary.main',
                      color: 'white',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      padding: '8px 4px',
                      '&:hover': {
                        backgroundColor: 'secondary.dark',
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;