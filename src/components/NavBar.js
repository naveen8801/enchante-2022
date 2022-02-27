import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
  brand: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    margin: 0,
    color: '#FF5959',
    position: 'relative',
    padding: '0.3rem',
    '&::after': {
      content: '" "',
      width: '60px',
      height: '2px',
      backgroundColor: '#95CD41',
      position: 'absolute',
      margin: '2px auto',
      bottom: 0,
      right: 0,
      left: 0,
    },
  },
  navLink: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    textAlign: 'center',
    color: 'white!important',
    '&:hover': {
      color: '#95CD41!important',
      fontWeight: 500,
    },
  },
  navLinkActive: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    color: '#95CD41!important',
  },
}));

function NavBar() {
  const classes = useStyles();
  const [curr, setCurr] = useState(0);
  return (
    <Navbar fixed="top" collapseOnSelect bg="black" expand="lg">
      <Container>
        <Navbar.Brand href="./">
          <h3 className={classes.brand}>Enchante-22</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span>
            <MenuIcon style={{ color: 'white', fontSize: '35px' }} />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => setCurr(0)}
              className={`${
                curr === 0 ? classes.navLinkActive : classes.navLink
              }`}
              href="#features"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => setCurr(1)}
              className={`${
                curr === 1 ? classes.navLinkActive : classes.navLink
              }`}
              href="#features"
            >
              Notifications
            </Nav.Link>
            <Nav.Link
              onClick={() => setCurr(2)}
              className={`${
                curr === 2 ? classes.navLinkActive : classes.navLink
              }`}
              href="#features"
            >
              Schedule
            </Nav.Link>
            <Nav.Link
              onClick={() => setCurr(3)}
              className={`${
                curr === 3 ? classes.navLinkActive : classes.navLink
              }`}
              href="#pricing"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
