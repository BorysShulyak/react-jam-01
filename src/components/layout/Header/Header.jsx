import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import logo from '../../../assets/logo.png';

const NAVIGATION_ITEMS = ['About us', 'What we do', 'Our stuff', 'Contact us'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              aria-label="navigation menu"
              color="inherit"
              size="large"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              keepMounted
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              id="menu-appbar"
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              onClose={handleCloseNavMenu}
            >
              {NAVIGATION_ITEMS.map((navigationItem) => (
                <MenuItem key={navigationItem} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{navigationItem}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              flexGrow: 1
            }}
          >
            <img alt="Logo" height={50} src={logo} width={75} />
          </Box>

          <Box component="nav">
            <Box component="ul" sx={{ display: { xs: 'none', md: 'flex' } }}>
              {NAVIGATION_ITEMS.map((navigationItem) => (
                <Button
                  key={navigationItem}
                  component="li"
                  sx={{ my: 2, display: 'block', color: 'white' }}
                  variant="text"
                  onClick={handleCloseNavMenu}
                >
                  {navigationItem}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
