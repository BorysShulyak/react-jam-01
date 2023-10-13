import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import peopleIcon from '../../../assets/peopleIcon.png';

const Footer = () => {
  return (
    <Box component="footer">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: { xs: '100px', sm: '150px', md: '200px' }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img alt="People Icon" src={peopleIcon} />
          <Typography sx={{ ml: '12px' }} textAlign="center" variant="body2">
            Find out more at{' '}
            <Typography
              component="a"
              href="https://people.com"
              sx={{ textDecoration: 'none', color: '#469fcf' }}
            >
              www.people.com
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: { xs: '100px', sm: '150px', md: '200px' },
          bgcolor: '#666050'
        }}
      >
        <Typography sx={{ color: 'white' }} textAlign="center" variant="body2">
          Terms & Conditions | Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
