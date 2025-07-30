import * as React from 'react';
import { useEffect, useState } from 'react';
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
const navItems = ["Projects", "Achievements", "Life", "Thoughts" ];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [phase, setPhase] = useState('typing');
  const fullText = 'AFIUL';

  useEffect(() => {
    let timeout;

    if (phase === 'typing') {
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 200);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), 1500);
      }
    } else if (phase === 'deleting') {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setPhase('typing'), 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, phase]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        position="static"
        sx={{
          backgroundColor: colour_background,
          px: 16,
          py: 1.5,
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
        <Box sx={{width: "10%"}}>
          <Typography
            component="div"
            variant="h6"
            sx={{ fontWeight: 700, fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}
          >
            <span style={{ color: colour_primary }}>S</span>
            <span style={{ color: colour_primary }}>{displayedText.slice(0, 3)}</span>
            <span style={{ color: '#000' }}>{displayedText.slice(3)}</span>
          </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3, width: "80%", justifyContent: "center" }}>
            {navItems.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Button
                  sx={{
                    color: '#000',
                    fontWeight: '700',
                    fontSize: '1rem',
                    // textTransform: 'none',
                  }}
                >
                  {item}
                </Button>
              </motion.div>
            ))}
          </Box>

          {/* Right: Contact */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Button
                sx={{
                  color: '#000',
                  fontWeight: '700',
                  fontSize: '1rem',
                  textTransform: 'none',
                }}
              >
                CONTACT
              </Button>
            </motion.div>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
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
