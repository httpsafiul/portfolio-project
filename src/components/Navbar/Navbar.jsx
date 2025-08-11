import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { colour_background, colour_primary } from '../../Common/colours';

const drawerWidth = 240;
const navItems = ["Home", "Achievements", "Projects", "Life", "Thoughts"];

function Navbar({ active }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavClick = (item) => {
    navigate(`/${item.toLowerCase() === 'contact' ? 'contact' : item.toLowerCase()}`);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        S
      </Typography>
      <Divider />
      <List>
        {[...navItems, 'Contact'].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'center',
                color: String(active || '').toLowerCase() === item.toLowerCase() ? colour_primary : '#000'
              }}
              onClick={() => handleNavClick(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: colour_background, height: "80px" }}>
      <CssBaseline />

      {/* Animated AppBar */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        style={{ width: '100%', position: 'fixed', top: 0, zIndex: 1200 }}
      >
        <AppBar
          component="nav"
          elevation={0}
          sx={{
            backgroundColor: colour_background,
            px: {xs: 3, sm: 16},
            paddingTop: 0.8
          }}
        >
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' }, color: colour_primary }}
            >
              <MenuIcon />
            </IconButton>


            <Box sx={{ width: { xs: '25%', sm: '10%' } }}>
              <Typography
                component="div"
                variant="h6"
                sx={{ fontWeight: 700, fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}
              >
                <span style={{ color: colour_primary }}>SAFI</span>
                <span style={{ color: '#000' }}>UL</span>
              </Typography>
            </Box>

            {/* Nav links */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3, width: '80%', justifyContent: 'center' }}>
              {navItems.map((item) => {
                const isActive = String(active || '').toLowerCase() === item.toLowerCase();
                return (
                  <motion.div key={item} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <Button
                      onClick={() => handleNavClick(item)}
                      sx={{
                        color: isActive ? colour_primary : '#000',
                        fontWeight: '600',
                        fontSize: '1rem',
                      }}
                    >
                      {item}
                    </Button>
                  </motion.div>
                );
              })}
            </Box>

            {/* Contact button */}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Button
                  onClick={() => handleNavClick('Contact')}
                  sx={{
                    color: String(active || '').toLowerCase() === 'contact' ? colour_primary : '#000',
                    fontWeight: '600',
                    fontSize: '1rem',
                    textTransform: 'none',
                  }}
                >
                  CONTACT
                </Button>
              </motion.div>
            </Box>

          </Toolbar>

          <Divider sx={{ backgroundColor: colour_primary, height: '1px' }} />
        </AppBar>
      </motion.div>

      {/* Drawer for mobile */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
