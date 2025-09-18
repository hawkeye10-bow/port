import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Work,
  CheckCircle,
  TrendingUp,
  Code,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'CodeClause',
      position: 'Machine Learning Intern',
      icon: <TrendingUp />,
      color: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
      achievements: [
        'Developed a house price prediction model using multiple linear regression, improving accuracy by 15%',
        'Created a gold price forecasting tool using time series analysis with Python and Pandas',
        'Applied data visualization and unit testing techniques to validate model outputs',
      ],
    },
    {
      company: 'Bharat Intern',
      position: 'Full Stack Web Development Intern',
      icon: <Code />,
      color: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
      achievements: [
        'Built a content management system (CMS) using MERN stack, improving collaboration and efficiency by 40%',
        'Developed and deployed a responsive portfolio website, leveraging AWS and Git for CI/CD workflows',
        'Applied RESTful API design and Agile development practices',
      ],
    },
  ];

  return (
    <Box id="experience" sx={{ py: 8, backgroundColor: 'background.default' }}>
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
            Experience
          </Typography>
        </motion.div>

        <Stack spacing={4}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card
                sx={{
                  p: 4,
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
                  <Stack direction="row" spacing={3} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: exp.color,
                        color: 'white',
                        flexShrink: 0,
                      }}
                    >
                      {exp.icon}
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          mb: 1,
                          fontWeight: 600,
                          color: 'primary.main',
                        }}
                      >
                        {exp.company}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          mb: 3,
                          color: 'text.primary',
                          fontWeight: 500,
                        }}
                      >
                        {exp.position}
                      </Typography>

                      <List sx={{ p: 0 }}>
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: index * 0.2 + achIndex * 0.1 
                            }}
                            viewport={{ once: true }}
                          >
                            <ListItem sx={{ px: 0, py: 1 }}>
                              <ListItemIcon sx={{ minWidth: 30 }}>
                                <CheckCircle 
                                  sx={{ 
                                    color: 'secondary.main',
                                    fontSize: '1.2rem'
                                  }} 
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={achievement}
                                sx={{
                                  '& .MuiListItemText-primary': {
                                    fontSize: '1.1rem',
                                    lineHeight: 1.6,
                                    color: 'text.secondary',
                                  },
                                }}
                              />
                            </ListItem>
                          </motion.div>
                        ))}
                      </List>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Stack>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: 'primary.main',
              }}
            >
              Technologies Used
            </Typography>
            <Stack 
              direction="row" 
              spacing={1} 
              justifyContent="center" 
              flexWrap="wrap"
              sx={{ gap: 1 }}
            >
              {[
                'Python',
                'JavaScript',
                'React.js',
                'Node.js',
                'MongoDB',
                'Express.js',
                'Pandas',
                'scikit-learn',
                'AWS',
                'Git',
                'RESTful APIs',
                'Machine Learning',
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Chip
                    label={tech}
                    sx={{
                      backgroundColor: 'secondary.main',
                      color: 'white',
                      fontWeight: 500,
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

export default Experience;