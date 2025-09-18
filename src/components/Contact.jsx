import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  IconButton,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Email,
  GitHub,
  LinkedIn,
  Send,
  Phone,
  LocationOn,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, type: 'success', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace these with your actual EmailJS service details
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
        {
          sender_name: formData.name,
          sender_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Sandeep Dara',
        },
        import.meta.env.VITE_EMAILJS_USER_ID, // Replace with your EmailJS public key
      );

      setAlert({
        open: true,
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setAlert({
        open: true,
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly.',
      });
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'sandeepdara44@gmail.com',
      href: 'mailto:sandeepdara44@gmail.com',
      color: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
    },
    {
      icon: <GitHub />,
      title: 'GitHub',
      value: 'github.com/sandeepdara-sd',
      href: 'https://github.com/sandeepdara-sd',
      color: 'linear-gradient(45deg, #333, #666)',
    },
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/sandeep-dara-1b0a23242/',
      href: 'https://www.linkedin.com/in/sandeep-dara-1b0a23242/',
      color: 'linear-gradient(45deg, #0077b5, #005885)',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Dammapeta, Telangana, India',
      href: null,
      color: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
    },
  ];

  return (
    <Box id="contact" sx={{ py: 8, backgroundColor: 'background.default' }}>
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
              mb: 2,
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, #4ecdc4, #44a08d)'
                  : 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Get In Touch
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.2rem',
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to say hello, 
            feel free to reach out!
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
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
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{ mb: 4, fontWeight: 600, color: 'primary.main' }}
                  >
                    Send Me a Message
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          name="name"
                          label="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          name="email"
                          label="Your Email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          required
                          name="subject"
                          label="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          required
                          name="message"
                          label="Your Message"
                          multiline
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            startIcon={<Send />}
                            disabled={loading}
                            sx={{
                              background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
                              color: 'white',
                              py: 2,
                              px: 4,
                              fontSize: '1.1rem',
                              '&:hover': {
                                background: 'linear-gradient(45deg, #26a69a, #2e7d32)',
                              },
                              '&:disabled': {
                                background: 'rgba(0, 0, 0, 0.12)',
                              },
                            }}
                          >
                            {loading ? 'Sending...' : 'Send Message'}
                          </Button>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Stack spacing={3}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      sx={{
                        p: 3,
                        background: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
                            : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        border: (theme) =>
                          theme.palette.mode === 'dark'
                            ? '1px solid rgba(255, 255, 255, 0.1)'
                            : '1px solid rgba(0, 0, 0, 0.05)',
                        cursor: info.href ? 'pointer' : 'default',
                        '&:hover': {
                          boxShadow: (theme) =>
                            theme.palette.mode === 'dark'
                              ? '0 15px 30px rgba(0,0,0,0.4)'
                              : '0 15px 30px rgba(0,0,0,0.1)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                      onClick={() => info.href && window.open(info.href, '_blank')}
                    >
                      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: info.color,
                              color: 'white',
                            }}
                          >
                            {info.icon}
                          </Box>
                          <Box>
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: 600, color: 'primary.main' }}
                            >
                              {info.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: 'text.secondary' }}
                            >
                              {info.value}
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setAlert({ ...alert, open: false })}
          severity={alert.type}
          sx={{ width: '100%' }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;