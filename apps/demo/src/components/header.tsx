import {
  AppBar,
  Box,
  Toolbar,
} from '@mui/material';
import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar sx={{ gap: 2 }}>
          <Link to='/'>Index</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
