import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  Chip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  LightMode,
  DarkMode,
  Rocket,
} from '@mui/icons-material';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/LOGO-1_cleanup.png'

const Header = ({ darkMode, toggleDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  
  // Improved responsive breakpoints
  const isXSmall = useMediaQuery('(max-width:480px)');
  const isSmall = useMediaQuery('(max-width:640px)');
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  
  const { scrollY } = useScroll();
 
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    [
      darkMode ? 'rgba(10, 10, 10, 0)' : 'rgba(255, 255, 255, 0)',
      darkMode ? 'rgba(10, 10, 10, 0.95)' : 'rgba(255, 255, 255, 0.95)'
    ]
  );

  // Simplified and more consistent header height
  const getHeaderHeight = () => {
    if (isXSmall) return 56;
    if (isSmall) return 60;
    if (isMobile) return 64;
    if (isTablet) return 68;
    return 72;
  };

  const headerHeight = getHeaderHeight();

  // Improved body padding management
  useEffect(() => {
    const updateBodyPadding = () => {
      const height = getHeaderHeight();
      document.body.style.paddingTop = `${height}px`;
    };

    updateBodyPadding();
    window.addEventListener('resize', updateBodyPadding);
    
    return () => {
      window.removeEventListener('resize', updateBodyPadding);
      document.body.style.paddingTop = '0';
    };
  }, [isXSmall, isSmall, isMobile, isTablet]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
     
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
     
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
   
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certification', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = headerHeight + 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
  };

  // Improved responsive logo component
  const LogoComponent = ({ size = 'large' }) => {
    const getLogoStyles = () => {
      if (size === 'medium') {
        return {
          height: isXSmall ? 40 : isSmall ? 45 : 50,
          width: 'auto',
          maxWidth: isXSmall ? 120 : isSmall ? 140 : 160,
        };
      }

      return {
        height: isXSmall ? 36 : isSmall ? 40 : isMobile ? 44 : isTablet ? 48 : 52,
        width: 'auto',
        maxWidth: isXSmall ? 100 : isSmall ? 120 : isMobile ? 140 : isTablet ? 160 : 180,
      };
    };

    const logoStyles = getLogoStyles();

    return (
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{
          ...logoStyles,
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 10px rgba(78, 205, 196, 0.6)) drop-shadow(0 0 20px rgba(255, 215, 0, 0.3)) brightness(1.2) contrast(1.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            filter: 'drop-shadow(0 0 15px rgba(78, 205, 196, 0.8)) drop-shadow(0 0 30px rgba(255, 215, 0, 0.5)) brightness(1.3) contrast(1.2)',
            transform: 'scale(1.05)',
          }
        }}
      />
    );
  };

  // Improved drawer width calculation
  const getDrawerWidth = () => {
    if (isXSmall) return 280;
    if (isSmall) return 320;
    return 360;
  };

  const drawer = (
    <Box sx={{
      width: getDrawerWidth(),
      p: 2,
      height: '100%',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      backdropFilter: 'blur(20px)',
      borderLeft: '2px solid rgba(78, 205, 196, 0.3)',
      boxShadow: '0 0 50px rgba(0, 0, 0, 0.8)',
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3,
        height: 60,
        px: 1,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <LogoComponent size="medium" />
        </Box>
        <IconButton
          onClick={() => setMobileOpen(false)}
          sx={{
            color: 'white',
            width: 40,
            height: 40,
            zIndex: 1400,
            position: 'relative',
            '&:hover': {
              color: 'primary.main',
              transform: 'rotate(90deg)',
              backgroundColor: 'rgba(78, 205, 196, 0.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List sx={{ px: 0 }}>
        {menuItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ListItem
              button
              onClick={() => scrollToSection(item.href)}
              sx={{
                borderRadius: 2,
                mb: 1,
                py: 1.5,
                px: 2,
                background: activeSection === item.href.slice(1)
                  ? 'linear-gradient(135deg, rgba(78, 205, 196, 0.2), rgba(255, 107, 107, 0.1))'
                  : 'transparent',
                border: activeSection === item.href.slice(1)
                  ? '1px solid rgba(78, 205, 196, 0.3)'
                  : '1px solid transparent',
                '&:hover': {
                  backgroundColor: 'rgba(78, 205, 196, 0.15)',
                  transform: 'translateX(8px)',
                  boxShadow: '0 4px 15px rgba(78, 205, 196, 0.2)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  color: 'white',
                  '& .MuiTypography-root': {
                    fontWeight: 600,
                    fontSize: isXSmall ? '0.9rem' : '1rem',
                    fontFamily: '"Exo 2", "Rajdhani", sans-serif',
                    letterSpacing: '0.05em',
                  }
                }}
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
     
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 0 20px rgba(78, 205, 196, 0.4)',
              '0 0 30px rgba(78, 205, 196, 0.6)',
              '0 0 20px rgba(78, 205, 196, 0.4)',
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Chip
            label="🚀 Available for Work"
            sx={{
              background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
              color: 'white',
              fontWeight: 700,
              fontSize: isXSmall ? '0.75rem' : '0.85rem',
              py: 1,
              px: 2,
              fontFamily: '"Exo 2", "Rajdhani", sans-serif',
              letterSpacing: '0.05em',
            }}
          />
        </motion.div>
      </Box>
    </Box>
  );

  // Improved responsive button configuration
  const getButtonConfig = () => {
    if (isXSmall) return { px: 1, py: 0.5, fontSize: '0.7rem' };
    if (isSmall) return { px: 1.2, py: 0.6, fontSize: '0.75rem' };
    if (isMobile) return { px: 1.5, py: 0.8, fontSize: '0.8rem' };
    if (isTablet) return { px: 1.8, py: 1, fontSize: '0.85rem' };
    return { px: 2, py: 1, fontSize: '1.0rem' };
  };

  const buttonConfig = getButtonConfig();

  // Improved icon button sizing
  const getIconButtonSize = () => {
    if (isXSmall) return 36;
    if (isSmall) return 40;
    return 44;
  };

  const iconButtonSize = getIconButtonSize();

  return (
    <>
      <motion.div style={{ background: headerBackground }}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: 'transparent',
            backdropFilter: scrolled ? 'blur(100px)' : 'none',
            borderBottom: scrolled ? `1px solid ${darkMode ? 'rgba(78, 205, 196, 0.2)' : 'rgba(0,0,0,0.1)'}` : 'none',
            boxShadow: scrolled
              ? '0 4px 20px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(78, 205, 196, 0.1)'
              : '0 1px 4px rgba(217, 204, 204, 0.4), 0 0 0 1px rgba(176, 216, 213, 0.05)',
            transition: 'all 0.3s ease',
            zIndex: 1300,
            height: headerHeight,
            width: '100%',
          }}
        >
          <Toolbar sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            height: headerHeight,
            minHeight: `${headerHeight}px !important`,
            px: { xs: 1, sm: 2 },
            width: '100%',
            maxWidth: '100vw',
            margin: 0,
            // Remove any container padding that might cause overflow
            '&.MuiToolbar-root': {
              paddingLeft: { xs: 1, sm: 2 },
              paddingRight: { xs: 1, sm: 2 },
            }
          }}>
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  py: 1,
                  marginLeft: 4, // Remove left margin to prevent overflow
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  transform: 'scale(1.6)',
                  flexShrink: 0,
                  '&:hover': {
                    background: 'rgba(78, 205, 196, 0.05)',
                    boxShadow: '0 4px 15px rgba(78, 205, 196, 0.1)',
                  }
                }}
                onClick={() => scrollToSection('#home')}
              >
                <LogoComponent size="large" />
              </Box>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{
                display: 'flex',
                gap: isTablet ? 0.5 : 2,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                mx: 2,
                overflow: 'hidden',
              }}>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <Button
                      onClick={() => scrollToSection(item.href)}
                      sx={{
                        color: 'text.primary',
                        fontWeight: 600,
                        px: buttonConfig.px,
                        py: buttonConfig.py,
                        borderRadius: 2,
                        fontSize: buttonConfig.fontSize,
                        fontFamily: '"Exo 2", "Rajdhani", sans-serif',
                        letterSpacing: '0.05em',
                        textTransform: 'none',
                        position: 'relative',
                        minWidth: 'auto',
                        whiteSpace: 'nowrap',
                        background: activeSection === item.href.slice(1)
                          ? 'linear-gradient(135deg, rgba(78, 205, 196, 0.15), rgba(255, 107, 107, 0.08))'
                          : 'transparent',
                        border: activeSection === item.href.slice(1)
                          ? '1px solid rgba(78, 205, 196, 0.3)'
                          : '1px solid transparent',
                        '&:hover': {
                          backgroundColor: 'rgba(78, 205, 196, 0.1)',
                          transform: 'translateY(-1px)',
                          boxShadow: '0 4px 15px rgba(78, 205, 196, 0.2)',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          width: activeSection === item.href.slice(1) ? '80%' : '0%',
                          height: '2px',
                          background: 'linear-gradient(45deg, #4ecdc4, #ff6b6b)',
                          transform: 'translateX(-50%)',
                          transition: 'width 0.3s ease',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}

            {/* Action Buttons */}
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              flexShrink: 0,
              minWidth: 'auto',
            }}>
              {/* Theme Toggle */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  onClick={toggleDarkMode}
                  sx={{
                    color: 'text.primary',
                    background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.2), rgba(255, 107, 107, 0.1))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(78, 205, 196, 0.3)',
                    width: iconButtonSize,
                    height: iconButtonSize,
                    '&:hover': {
                      background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.3), rgba(255, 107, 107, 0.2))',
                      boxShadow: '0 4px 15px rgba(78, 205, 196, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {darkMode ? <LightMode /> : <DarkMode />}
                </IconButton>
              </motion.div>

              {/* Mobile Menu Toggle */}
              {isMobile && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    onClick={() => setMobileOpen(true)}
                    sx={{
                      color: 'text.primary',
                      background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.2), rgba(255, 107, 107, 0.1))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(78, 205, 196, 0.3)',
                      width: iconButtonSize,
                      height: iconButtonSize,
                      '&:hover': {
                        background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.3), rgba(255, 107, 107, 0.2))',
                        boxShadow: '0 4px 15px rgba(78, 205, 196, 0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </motion.div>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </motion.div>
      
      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            background: 'transparent',
            boxShadow: 'none',
            zIndex: 1300,
          }
        }}
        sx={{
          zIndex: 1300,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;