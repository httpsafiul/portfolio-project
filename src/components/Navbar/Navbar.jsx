import * as React from 'react';
import { useEffect, useState } from 'react';
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
import { colour_green, colour_orange, colour_white } from '../../Common/colours';

const drawerWidth = 240;
const navItems = ["Home", "Achievements", "Projects", "Life", "Contact"];

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
    <Typography
      variant="h6"
      sx={{
        my: 2,
        fontWeight: 700,
        fontSize: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <span style={{ color: colour_green }}>SAFIUL</span>
    </Typography>
    <Divider />
    <List>
      {[...navItems].map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemButton
            sx={{
              textAlign: 'center',
              color: String(active || '').toLowerCase() === item.toLowerCase()
                ? colour_orange
                : '#000'
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
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: colour_green, height: "80px" }}>
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
            backgroundColor: colour_green,
            px: { xs: 3, md: 16 },
            paddingTop: 0.8
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
            {/* Logo */}
            <Box sx={{ width: { xs: '25%', sm: '10%' } }}>
              <Typography
                component="div"
                variant="h6"
                sx={{ fontWeight: 700, fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}
              >
                <span style={{ color: colour_white }}>SAFIUL</span>
              </Typography>
            </Box>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2, width: '80%', justifyContent: 'right ' }}>
              {navItems.map((item) => {
                const isActive = String(active || '').toLowerCase() === item.toLowerCase();
                return (
                  <motion.div key={item} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <Button
                      onClick={() => handleNavClick(item)}
                      sx={{
                        color: isActive ? colour_orange : colour_white,
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        fontFamily: "Libre Caslon Text",
                      }}
                    >
                      {item}
                    </Button>
                  </motion.div>
                );
              })}
            </Box>

            {/* Mobile Hamburger Menu */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { lg: 'none' }, color: colour_orange }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>

          <Divider sx={{ backgroundColor: colour_orange, height: '1px' }} />
        </AppBar>
      </motion.div>

      {/* Drawer for mobile */}
      <nav>
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { md: 'block', lg: 'none' },
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
