import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Stack,
  Chip,
} from '@mui/material';
import {
  Verified,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Redhat from '../assets/Redhat.png';
import Salesforce from '../assets/Salesforce.png';


const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      imageUrl: 'https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
      color: 'linear-gradient(45deg, #ff9800, #f57c00)',
      description: 'Foundational understanding of AWS Cloud concepts, services, and terminology.',
      skills: ['Cloud Computing', 'AWS Services', 'Security', 'Pricing'],
      credlyUrl: 'https://www.credly.com/badges/a7f27775-2a3d-4072-aefa-c2c56c3ac3b7/public_url', 
    },
    {
      title: 'Red Hat Certified Application Developer',
      issuer: 'Red Hat',
      imageUrl: Redhat,
      color: 'linear-gradient(45deg, #d32f2f, #b71c1c)',
      description: 'Expertise in developing applications using Red Hat technologies and OpenShift.',
      skills: ['Java EE', 'JBoss', 'JPA', 'Mavenn'],
      credlyUrl: 'https://www.credly.com/badges/f849aecd-0a42-44cb-83de-6d7a6d27ac10/public_url', 
    },
    {
      title: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      imageUrl: Salesforce,
      color: 'linear-gradient(45deg, #1976d2, #0d47a1)',
      description: 'Understanding of AI concepts and their application in Salesforce ecosystem.',
      skills: ['Artificial Intelligence', 'Salesforce', 'CRM', 'AI Ethics'],
      credlyUrl: 'https://www.salesforce.com/trailblazer/sandeepdara', 
    },
  ];

  const recreationalInterests = [
    { name: 'Playing Chess ♟️', color: '#8b4513' },
    { name: 'Video Gaming 🎮', color: '#9c27b0' },
    { name: 'Cooking 🍳', color: '#ff5722' },
    { name: 'Watching Movies & Anime 🎥', color: '#3f51b5' },
  ];

  return (
    <Box 
      id="certifications" 
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
            Certifications
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    textAlign: 'center',
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
                    cursor: 'pointer',
                  }}
                  onClick={() => cert.credlyUrl && window.open(cert.credlyUrl, '_blank')}
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: 120,
                        height: 120,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        overflow: 'hidden',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '2px solid transparent',
                        backgroundImage: cert.color,
                        padding: '4px',
                      }}
                    >
                      <Box
                        sx={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '8px',
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '8px',
                        }}
                      >
                        <img
                          src={cert.imageUrl}
                          alt={cert.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <Box
                          sx={{
                            display: 'none',
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: cert.color,
                            borderRadius: '8px',
                            color: 'white',
                            fontSize: '24px',
                            fontWeight: 'bold',
                          }}
                        >
                          {cert.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                        </Box>
                      </Box>
                    </Box>

                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'primary.main',
                        }}
                      >
                        {cert.title}
                      </Typography>
                      <Verified color="secondary" fontSize="small" />
                    </Stack>

                    <Typography
                      variant="subtitle2"
                      sx={{
                        mb: 3,
                        color: 'text.secondary',
                        fontWeight: 500,
                      }}
                    >
                      {cert.issuer}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        mb: 3,
                        color: 'text.secondary',
                        lineHeight: 1.6,
                      }}
                    >
                      {cert.description}
                    </Typography>

                    <Stack 
                      direction="row" 
                      spacing={1} 
                      justifyContent="center" 
                      flexWrap="wrap"
                      sx={{ gap: 0.5 }}
                    >
                      {cert.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: 'primary.main',
                            color: 'white',
                            fontSize: '0.75rem',
                          }}
                        />
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
              Recreational Interests
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                maxWidth: '600px',
                mx: 'auto',
                color: 'text.secondary',
                fontSize: '1.1rem',
                lineHeight: 1.6,
              }}
            >
              Beyond coding and technology, I enjoy various activities that help me 
              maintain a balanced lifestyle and continuous learning mindset.
            </Typography>
            <Stack 
              direction="row" 
              spacing={2} 
              justifyContent="center" 
              flexWrap="wrap"
              sx={{ gap: 2 }}
            >
              {recreationalInterests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Chip
                    label={interest.name}
                    sx={{
                      backgroundColor: interest.color,
                      color: 'white',
                      fontWeight: 500,
                      fontSize: '1rem',
                      padding: '12px 8px',
                      '&:hover': {
                        opacity: 0.8,
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

export default Certifications;