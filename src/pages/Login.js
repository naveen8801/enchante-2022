import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Form, Button, Card } from 'react-bootstrap';
import { login } from '../api';
import { Alert } from '@material-ui/lab';
const useStyles = makeStyles(() => ({
  root: {
    minHeight: '94vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '3rem',
    height: '100%',
    position: 'relative',
  },
  loginHeading: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    color: 'white',
    marginBottom: '2rem',
  },
}));

function Login() {
  const classes = useStyles();
  const [formData, setformData] = useState({ username: '', password: '' });
  const [error, seterror] = useState({ show: false, text: '' });
  const handleLogin = async () => {
    seterror({ show: false, text: '' });
    if (formData.username.trim() === '' || formData.password.trim() === '') {
      seterror({ show: true, text: 'Fields can not be empty' });
      return;
    } else {
      try {
        const res = await login(formData);
        if (res.data.data.auth) {
          seterror({ show: false, text: '' });
          console.log('in');
        } else {
          seterror({ show: true, text: 'Invalid Details' });
          return;
        }
      } catch (err) {
        seterror({ show: true, text: 'Network Error' });
      }
    }
  };
  return (
    <div className={classes.root}>
      <Typography className={classes.loginHeading} align="center" variant="h4">
        Admin Login
      </Typography>
      <Card style={{ padding: '2rem' }}>
        <Form>
          {error.show ? <Alert severity="error">{error.text}</Alert> : null}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={formData.username}
              type="text"
              placeholder="Enter username"
              onChange={(e) => {
                setformData({ ...formData, username: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={formData.password}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setformData({ ...formData, password: e.target.value });
              }}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={() => handleLogin()}>
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
