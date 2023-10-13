import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: { xs: '100px', sm: '150px', md: '200px' }
      }}
    >
      <Typography textAlign="center" variant="body2">
        Terms & Conditions | Privacy Policy
      </Typography>
    </Box>
  );
};

export default Footer;
