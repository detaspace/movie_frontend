import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

const Navbar = () => {
  return (
    <AppBar >
      <Container>
        <Toolbar >
          <Logo />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const Logo = () => (
  <>
    <ViewInArIcon/>
    <Typography
      variant="h6"
      noWrap
      component="a"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      Feradox
    </Typography>
  </>
);

export default Navbar;