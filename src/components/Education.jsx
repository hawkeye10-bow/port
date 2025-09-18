import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import {
  School,
  Star,
  LocationOn,
  CalendarToday,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <Box 
      id="education" 
      sx={{ 
        py: 8, 
        backgroundColor: (theme) => 
          theme.palette.mode === 'dark' ? '#0f0f0f' : '#f8f9fa',
      }}
    >
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
            Education
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          <Card
            sx={{
              maxWidth: 800,
              mx: 'auto',
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
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    color: 'white',
                    flexShrink: 0,
                  }}
                >
                  <School fontSize="large" />
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
                    KL University
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      color: 'text.primary',
                      fontWeight: 500,
                    }}
                  >
                    Bachelor of Technology in Computer Science
                  </Typography>

                  <Stack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={2} 
                    sx={{ mb: 3 }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <LocationOn color="secondary" />
                      <Typography color="text.secondary">
                        Vijayawada, Andhra Pradesh
                      </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1}>
                      <CalendarToday color="secondary" />
                      <Typography color="text.secondary">
                        Graduation: May 2025
                      </Typography>
                    </Stack>
                  </Stack>

                  <Box sx={{ mb: 3 }}>
                    <Chip
                      icon={<Star />}
                      label="GPA: 9.11 / 10.00"
                      color="secondary"
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        py: 1,
                        px: 2,
                        background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
                        color: 'white',
                        '& .MuiChip-icon': {
                          color: 'white',
                        },
                      }}
                    />
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      fontSize: '1.1rem',
                    }}
                  >
                    Pursuing a comprehensive Computer Science education with focus on 
                    software engineering, data structures, algorithms, and emerging 
                    technologies. Actively involved in coding competitions and 
                    technical projects while maintaining academic excellence.
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: 'primary.main',
              }}
            >
              Key Coursework
            </Typography>
            <Stack 
              direction="row" 
              spacing={1} 
              justifyContent="center" 
              flexWrap="wrap"
              sx={{ gap: 1 }}
            >
              {[
                'Data Structures & Algorithms',
                'Database Management Systems',
                'Software Engineering',
                'Computer Networks',
                'Operating Systems',
                'Machine Learning',
                'Web Technologies',
                'Object-Oriented Programming',
              ].map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Chip
                    label={course}
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'primary.dark',
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

export default Education;