import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import logo from '../assets/jmit.png';

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
        <Navbar.Brand
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
          href="./"
        >
          <img style={{ width: '100px', height: '35px' }} src={logo} />
          <h3 className={classes.brand}>Enchanté-2k22</h3>
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
            >
              <Link
                className={`${
                  curr === 0 ? classes.navLinkActive : classes.navLink
                }`}
                style={{ textDecoration: 'none' }}
                to="/"
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => setCurr(1)}
              className={`${
                curr === 1 ? classes.navLinkActive : classes.navLink
              }`}
            >
              <Link
                className={`${
                  curr === 1 ? classes.navLinkActive : classes.navLink
                }`}
                style={{ textDecoration: 'none' }}
                to="/schedule"
              >
                Schedule
              </Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => setCurr(2)}
              className={`${
                curr === 2 ? classes.navLinkActive : classes.navLink
              }`}
            >
              <Link
                className={`${
                  curr === 2 ? classes.navLinkActive : classes.navLink
                }`}
                style={{ textDecoration: 'none' }}
                to="/notice"
              >
                Notifications
              </Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => setCurr(3)}
              className={`${
                curr === 3 ? classes.navLinkActive : classes.navLink
              }`}
            >
              <Link
                className={`${
                  curr === 3 ? classes.navLinkActive : classes.navLink
                }`}
                style={{ textDecoration: 'none' }}
                to="/gallary"
              >
                Gallary
              </Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => setCurr(4)}
              className={`${
                curr === 4 ? classes.navLinkActive : classes.navLink
              }`}
            >
              <Link
                className={`${
                  curr === 4 ? classes.navLinkActive : classes.navLink
                }`}
                style={{ textDecoration: 'none' }}
                to="/contact"
              >
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
