import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { ListSubheader } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';


function Header() {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const anchor = 'left'

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {`logged in as: `}
        </ListSubheader>
      }>
          <ListItemButton component={Link} to={'/'} key={'Home'}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText  primary={'ENTER HERE'} />
          </ListItemButton>
          <ListItemButton component={Link} to={'/custom'} key={'Custom Stacks'}>
            <ListItemIcon>
              <LocalMoviesIcon />
            </ListItemIcon>
            <ListItemText primary={'ENTER HERE'} />
          </ListItemButton>
          <ListItemButton component={Link} to={'/custom'} key={'Custom Stacks'}>
            <ListItemIcon>
              <LocalMoviesIcon />
            </ListItemIcon>
            <ListItemText primary={'ENTER HERE'} />
          </ListItemButton>
          <ListItemButton component={Link} to={'/custom'} key={'Custom Stacks'}>
            <ListItemIcon>
              <LocalMoviesIcon />
            </ListItemIcon>
            <ListItemText primary={'ENTER HERE'} />
          </ListItemButton>
      </List>
    </Box>
  );


  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(anchor, true)}
        >
          <MenuIcon />
        </IconButton >
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
        <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MovieStack
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  );
}

export default Header;