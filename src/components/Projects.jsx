import React, { useState, useCallback, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  IconButton,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  GitHub,
  Launch,
  TrendingUp,
  Assessment,
  Business,
  Hotel,
  Thermostat,
  Games,
  Movie,
  WbSunny,
  ArrowBackIos,
  ArrowForwardIos,
  Rocket,
  Star,
  Article,
  Code,
} from '@mui/icons-material';
import image from '../assets/temperature-converter.jpg'; 
import rule_engine from '../assets/rule_engine.jpg'; 

// Moved ProjectCard outside for better performance
const ProjectCard = React.memo(({ project }) => (
  <Card
    sx={{
      height: { xs: 'auto', md: '580px' },
      minHeight: { xs: '500px', md: '580px' },
      display: 'flex',
      flexDirection: 'column',
      background: (theme) =>
        theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      border: (theme) =>
        theme.palette.mode === 'dark'
          ? '1px solid rgba(78, 205, 196, 0.2)'
          : '1px solid rgba(0, 0, 0, 0.05)',
      borderRadius: 3,
      overflow: 'hidden',
      position: 'relative',
      '&:hover': {
        boxShadow: '0 20px 40px rgba(78, 205, 196, 0.25)',
        transform: 'translateY(-4px)',
        '& .project-image': {
          transform: 'scale(1.05)',
        },
        '& .project-overlay': {
          opacity: 1,
        },
      },
      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    }}
  >
    <Box sx={{ position: 'relative', overflow: 'hidden', height: { xs: '200px', md: '240px' } }}>
      <CardMedia
        component="img"
        image={project.image}
        alt={project.title}
        className="project-image"
        sx={{
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
          width: '100%',
          height: '100%',
        }}
      />
      
      <Box
        className="project-overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.9), rgba(255, 107, 107, 0.9))',
          opacity: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 0.3s ease',
          backdropFilter: 'blur(2px)',
        }}
      >
        <Stack direction="row" spacing={2}>
          <IconButton
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <GitHub />
          </IconButton>
          {project.hasLiveDemo && (
            <IconButton
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <Launch />
            </IconButton>
          )}
        </Stack>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 12,
          left: 12,
          width: { xs: 48, md: 56 },
          height: { xs: 48, md: 56 },
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: project.gradient,
          color: 'white',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          '& svg': {
            fontSize: { xs: '1.2rem', md: '1.5rem' },
          },
        }}
      >
        {project.icon}
      </Box>
      
      {project.featured && (
        <Chip
          icon={<Star />}
          label="Featured"
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'linear-gradient(45deg, #ffd93d, #e6c200)',
            color: 'white',
            fontWeight: 600,
            fontSize: { xs: '0.7rem', md: '0.8rem' },
            '& .MuiChip-icon': {
              color: 'white',
              fontSize: { xs: '0.9rem', md: '1rem' },
            },
          }}
        />
      )}
      
      <Chip
        label={project.category}
        size="small"
        sx={{
          position: 'absolute',
          bottom: 12,
          right: 12,
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          fontWeight: 600,
          fontSize: { xs: '0.7rem', md: '0.8rem' },
        }}
      />
    </Box>

    <CardContent sx={{ 
      flexGrow: 1, 
      p: { xs: 2, md: 3 },
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{
            mb: { xs: 1, md: 2 },
            fontWeight: 700,
            color: 'primary.main',
            lineHeight: 1.3,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: { xs: 1, md: 2 },
            color: 'text.secondary',
            lineHeight: 1.6,
            fontSize: { xs: '0.85rem', md: '0.95rem' },
            display: '-webkit-box',
            WebkitLineClamp: { xs: 3, md: 4 },
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </Typography>

        <Box sx={{ mb: { xs: 1, md: 2 } }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              color: 'secondary.main',
              fontSize: { xs: '0.8rem', md: '0.9rem' },
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            💡 {project.impact}
          </Typography>
        </Box>

        <Box sx={{ mb: { xs: 1, md: 2 } }}>
          <Stack 
            direction="row" 
            spacing={0.5}
            flexWrap="wrap" 
            sx={{ gap: 0.5 }}
          >
            {project.technologies.slice(0, { xs: 3, md: 4 }[0] || 4).map((tech, techIndex) => (
              <Chip
                key={techIndex}
                label={tech}
                size="small"
                sx={{
                  background: project.gradient,
                  color: 'white',
                  fontSize: { xs: '0.65rem', md: '0.75rem' },
                  fontWeight: 500,
                  height: { xs: '20px', md: '24px' },
                  '& .MuiChip-label': {
                    px: { xs: 1, md: 1.5 },
                  },
                }}
              />
            ))}
            {project.technologies.length > 4 && (
              <Chip
                label={`+${project.technologies.length - 4}`}
                size="small"
                sx={{
                  backgroundColor: 'text.secondary',
                  color: 'white',
                  fontSize: { xs: '0.65rem', md: '0.75rem' },
                  height: { xs: '20px', md: '24px' },
                }}
              />
            )}
          </Stack>
        </Box>
      </Box>

      <Stack 
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1}
        justifyContent="center"
        sx={{ mt: 'auto' }}
      >
        <Button
          variant="outlined"
          startIcon={<GitHub />}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            flex: 1,
            borderColor: 'primary.main',
            color: 'primary.main',
            fontSize: { xs: '0.8rem', md: '0.9rem' },
            py: { xs: 1, md: 1.5 },
            '&:hover': {
              borderColor: 'primary.dark',
              backgroundColor: 'rgba(78, 205, 196, 0.1)',
              transform: 'translateY(-1px)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          Code
        </Button>
        {project.hasLiveDemo && (
          <Button
            variant="contained"
            startIcon={<Launch />}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              flex: 1,
              background: project.gradient,
              fontSize: { xs: '0.8rem', md: '0.9rem' },
              py: { xs: 1, md: 1.5 },
              '&:hover': {
                opacity: 0.9,
                transform: 'translateY(-1px)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            Live Demo
          </Button>
        )}
      </Stack>
    </CardContent>
  </Card>
));

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  const allProjects = useMemo(() => [
    {
      title: 'ATS Resume Builder Web App',
      description: 'Built a resume builder with customizable templates, live preview, PDF export, and JD-based scoring using Gemini API. Enhanced job shortlisting rates by providing real-time AI-powered feedback.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API'],
      icon: <Assessment />,
      github: 'https://github.com/sandeepdara-sd/ATS_Resume_Builder',
      demo: 'https://sd-resume-builder.vercel.app/',
      impact: 'Enhanced job shortlisting rates with AI-powered feedback',
      category: 'Featured',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      featured: true,
      hasLiveDemo: true,
    },
    {
      title: 'Stock Portfolio Tracker',
      description: 'Developed a full-stack app using FinHub API, React for UI, and MongoDB for real-time data. Boosted financial awareness by 40% with interactive dashboards and live portfolio insights.',
      image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'FinHub API'],
      icon: <TrendingUp />,
      github: 'https://github.com/sandeepdara-sd/Stock_Portfolio',
      demo: 'https://sd-stock-portfolio.vercel.app/',
      impact: 'Boosted financial awareness by 40%',
      category: 'Featured',
      gradient: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
      featured: true,
      hasLiveDemo: true,
    },
    {
      title: 'Enterprise Resource Planning (ERP) System',
      description: 'Built ERP with modules for student enrollment, faculty management, and academics using Django & MySQL. Reduced manual workload by 50% and accelerated data access by 30%.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Django', 'MySQL', 'Bootstrap'],
      icon: <Business />,
      github: 'https://github.com/sandeepdara-sd/ERP',
      demo: 'https://erp-system-demo.herokuapp.com',
      impact: 'Reduced manual workload by 50%',
      category: 'Featured',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
      featured: true,
      hasLiveDemo: false,
    },
    {
      title: 'Blog Application',
      description: 'Full-featured blog platform with user authentication, rich text editor, commenting system, and admin dashboard. Built with React, Node.js, Express, and MongoDB with responsive design.',
      image: 'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Rich Text Editor'],
      icon: <Article />,
      github: 'https://github.com/sandeepdara-sd/Blog_App',
      demo: 'https://sd-blogapp.vercel.app/',
      impact: 'Complete blogging solution with modern features',
      category: 'Mern Stack',
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      featured: true,
      hasLiveDemo: true,
    },
    {
      title: 'Hotel Management System',
      description: 'Full-stack hotel management solution with reservation system, room management, and billing features. Built using Java Spring Boot with JSP for frontend.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'Spring Boot', 'JSP', 'MySQL'],
      icon: <Hotel />,
      github: 'https://github.com/sandeepdara-sd/Hotel_Management_Systems_JAVA',
      demo: 'https://hotel-mgmt-demo.herokuapp.com',
      impact: 'Streamlined hotel operations',
      category: 'Java Full Stack',
      gradient: 'linear-gradient(135deg, #ffd93d 0%, #e6c200 100%)',
      hasLiveDemo: false,
    },
    {
      title: 'Movie Library',
      description: 'MERN stack application for browsing and managing movie collections with user authentication, ratings, and reviews functionality.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      icon: <Movie />,
      github: 'https://github.com/sandeepdara-sd/Movie_App',
      demo: 'https://movie-library-app.vercel.app',
      impact: 'Enhanced movie discovery experience',
      category: 'MERN Stack',
      gradient: 'linear-gradient(135deg, #ab47bc 0%, #8e24aa 100%)',
      hasLiveDemo: false,
    },
    {
      title: 'Weather Monitor',
      description: 'Real-time weather monitoring application with location-based forecasts, weather alerts, and historical data visualization using MERN stack.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Weather API'],
      icon: <WbSunny />,
      github: 'https://github.com/sandeepdara-sd/Weather_Monitor',
      demo: 'https://weather-monitor-app.vercel.app',
      impact: 'Accurate weather predictions',
      category: 'MERN Stack',
      gradient: 'linear-gradient(135deg, #26c6da 0%, #00acc1 100%)',
      hasLiveDemo: false,
    },
    {
      title: 'Temperature Converter',
      description: 'Simple yet elegant temperature conversion tool supporting Celsius, Fahrenheit, and Kelvin with instant conversion and responsive design.',
      image: image,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: <Thermostat />,
      github: 'https://github.com/sandeepdara-sd/Temperature_Convertor',
      demo: 'https://sd-tempconverter.netlify.app/',
      impact: 'Easy temperature conversions',
      category: 'Frontend',
      gradient: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)',
      hasLiveDemo: true,
    },
    {
      title: 'Tic Tac Toe Game',
      description: 'Interactive Tic Tac Toe game built with React.js featuring game state management, winner detection, and clean UI design.',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'CSS', 'JavaScript'],
      icon: <Games />,
      github: 'https://github.com/sandeepdara-sd/Tic_Tac_Toe',
      demo: 'https://sd-tictactoe.netlify.app/',
      impact: 'Fun interactive gaming experience',
      category: 'React',
      gradient: 'linear-gradient(135deg, #e91e63 0%, #c2185b 100%)',
      hasLiveDemo: true,
    },
    {
      title: 'Rule Engine',
      description: 'Developed a rule engine with an abstract syntax tree using the MERN stack, enabling dynamic rule creation, merging, and evaluation based on input conditions.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      icon: <Code />,
      github: 'https://github.com/sandeepdara-sd/Rule_Engine',
      impact: 'Simplified complex rule handling for dynamic business logic processing',
      category: 'MERN Stack',
      gradient: 'linear-gradient(135deg, #26c6da 0%, #00acc1 100%)',
      hasLiveDemo: false,
    },
  ]);

  // Responsive items per slide
  const itemsPerSlide = isMobile ? 1 : isTablet ? 2 : 3;
  const totalSlides = Math.ceil(allProjects.length / itemsPerSlide);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, totalSlides]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, totalSlides]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, currentSlide]);

  const getCurrentProjects = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return allProjects.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <Box 
      id="projects" 
      sx={{ 
        py: { xs: 6, md: 10 }, 
        backgroundColor: (theme) => 
          theme.palette.mode === 'dark' ? '#0f0f0f' : '#f8f9fa',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 80%, rgba(78, 205, 196, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl">
        <Stack 
          direction="row" 
          alignItems="center" 
          justifyContent="center" 
          spacing={{ xs: 1, md: 2 }}
          sx={{ mb: 2 }}
        >
          <Box
            sx={{
              animation: 'spin 3s linear infinite',
              '@keyframes spin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              },
            }}
          >
            <Rocket sx={{ 
              color: 'primary.main', 
              fontSize: { xs: '2rem', md: '2.5rem' }
            }} />
          </Box>
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
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            My Projects
          </Typography>
        </Stack>

        <Typography
          variant="h5"
          align="center"
          sx={{
            mb: { xs: 6, md: 8 },
            maxWidth: '800px',
            mx: 'auto',
            color: 'text.secondary',
            fontWeight: 500,
            lineHeight: 1.6,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            px: { xs: 2, md: 0 },
          }}
        >
          Explore my complete portfolio of {allProjects.length} innovative projects that showcase 
          technical excellence, creativity, and real-world impact across various domains.
        </Typography>

        {/* Optimized Carousel Container */}
        <Box sx={{ position: 'relative', mb: 6 }}>
          <Box 
            sx={{ 
              overflow: 'hidden', 
              borderRadius: { xs: 2, md: 4 },
              position: 'relative',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
                transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <Box
                  key={slideIndex}
                  sx={{
                    minWidth: '100%',
                    display: 'flex',
                  }}
                >
                  <Grid container spacing={{ xs: 2, md: 4 }} sx={{ width: '100%' }}>
                    {allProjects
                      .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                      .map((project, projectIndex) => (
                        <Grid 
                          item 
                          xs={12} 
                          md={itemsPerSlide === 1 ? 12 : itemsPerSlide === 2 ? 6 : 4}
                          key={`${slideIndex}-${projectIndex}`}
                        >
                          <ProjectCard project={project} />
                        </Grid>
                      ))}
                  </Grid>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Navigation Controls */}
          {totalSlides > 1 && (
            <>
              <IconButton
                onClick={prevSlide}
                disabled={isTransitioning}
                sx={{
                  position: 'absolute',
                  left: { xs: -15, md: -25 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
                  color: 'white',
                  width: { xs: 45, md: 60 },
                  height: { xs: 45, md: 60 },
                  zIndex: 10,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #26a69a, #2e7d32)',
                    transform: 'translateY(-50%) scale(1.1)',
                  },
                  '&:disabled': {
                    opacity: 0.6,
                    cursor: 'not-allowed',
                  },
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 15px rgba(78, 205, 196, 0.4)',
                }}
              >
                <ArrowBackIos />
              </IconButton>

              <IconButton
                onClick={nextSlide}
                disabled={isTransitioning}
                sx={{
                  position: 'absolute',
                  right: { xs: -15, md: -25 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
                  color: 'white',
                  width: { xs: 45, md: 60 },
                  height: { xs: 45, md: 60 },
                  zIndex: 10,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #26a69a, #2e7d32)',
                    transform: 'translateY(-50%) scale(1.1)',
                  },
                  '&:disabled': {
                    opacity: 0.6,
                    cursor: 'not-allowed',
                  },
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 15px rgba(78, 205, 196, 0.4)',
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            </>
          )}
        </Box>

        {/* Optimized Indicators */}
        {totalSlides > 1 && (
          <Stack 
            direction="row" 
            justifyContent="center" 
            spacing={1} 
            sx={{ mb: { xs: 4, md: 6 } }}
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <Box
                key={index}
                onClick={() => goToSlide(index)}
                sx={{
                  width: currentSlide === index ? { xs: 24, md: 32 } : { xs: 8, md: 12 },
                  height: { xs: 8, md: 12 },
                  borderRadius: { xs: 4, md: 6 },
                  background: currentSlide === index 
                    ? 'linear-gradient(45deg, #4ecdc4, #ff6b6b)' 
                    : 'rgba(78, 205, 196, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    background: currentSlide === index 
                      ? 'linear-gradient(45deg, #4ecdc4, #ff6b6b)' 
                      : 'linear-gradient(45deg, #26a69a, #2e7d32)',
                },
              }}
            />
          ))}
        </Stack>
      )}

      {/* Project Statistics */}
      <Box
        sx={{
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
              : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          border: (theme) =>
            theme.palette.mode === 'dark'
              ? '1px solid rgba(78, 205, 196, 0.2)'
              : '1px solid rgba(0, 0, 0, 0.05)',
          borderRadius: 4,
          p: { xs: 3, md: 6 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 30% 70%, rgba(78, 205, 196, 0.05) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />

        

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {[
            { label: 'Total Projects', value: allProjects.length, color: '#4ecdc4' },
            { label: 'Featured Projects', value: allProjects.filter(p => p.featured).length, color: '#ff6b6b' },
            { label: 'Live Demos', value: allProjects.filter(p => p.hasLiveDemo).length, color: '#ffd93d' },
            { label: 'Technologies Used', value: [...new Set(allProjects.flatMap(p => p.technologies))].length, color: '#ab47bc' },
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: { xs: 2, md: 3 },
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}25)`,
                  border: `1px solid ${stat.color}30`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 10px 30px ${stat.color}40`,
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    color: stat.color,
                    fontSize: { xs: '1rem', md: '2rem' },
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 600,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: { xs: 4, md: 6 } }}>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontWeight: 500,
            }}
          >
            Interested in collaborating or learning more about my work?
          </Typography>
          
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<GitHub />}
              href="https://github.com/sandeepdara-sd"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
                px: 4,
                py: 2,
                fontSize: { xs: '1rem', md: '1.1rem' },
                fontWeight: 600,
                '&:hover': {
                  background: 'linear-gradient(45deg, #26a69a, #2e7d32)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(78, 205, 196, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View All Projects
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<Launch />}
              href="#contact"
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                px: 4,
                py: 2,
                fontSize: { xs: '1rem', md: '1.1rem' },
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'primary.dark',
                  backgroundColor: 'rgba(78, 205, 196, 0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get In Touch
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Floating Action Button for Mobile */}
      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 30 },
          right: { xs: 20, md: 30 },
          zIndex: 1000,
          display: { xs: 'block', md: 'none' },
        }}
      >
        <IconButton
          href="#projects"
          sx={{
            background: 'linear-gradient(45deg, #4ecdc4, #ff6b6b)',
            color: 'white',
            width: 56,
            height: 56,
            boxShadow: '0 4px 20px rgba(78, 205, 196, 0.4)',
            '&:hover': {
              background: 'linear-gradient(45deg, #26a69a, #e53e3e)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <Rocket />
        </IconButton>
      </Box>
    </Container>
  </Box>
);
};

export default Projects;
