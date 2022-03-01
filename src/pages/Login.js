import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Form, Button, Card } from 'react-bootstrap';
import { login } from '../api';
import { Alert } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux';
import { userAuth } from '../action';
import { useNavigate } from 'react-router-dom';

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
  btn: {
    backgroundColor: '#78B64D!important',
    borderColor: '#78B64D!important',
  },
}));

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const [formData, setformData] = useState({ username: '', password: '' });
  const [error, seterror] = useState({ show: false, text: '' });
  const [loading, setloading] = useState(false);
  const handleLogin = async () => {
    setloading(true);
    seterror({ show: false, text: '' });
    if (formData.username.trim() === '' || formData.password.trim() === '') {
      seterror({ show: true, text: 'Fields can not be empty' });
      return;
    } else {
      try {
        const res = await login(formData);
        if (res.data.data.auth) {
          seterror({ show: false, text: '' });
          await dispatch(userAuth());
          navigate('/admin-dashboard');
        } else {
          seterror({ show: true, text: 'Invalid Details' });
          return;
        }
      } catch (err) {
        console.log(err);
        seterror({ show: true, text: 'Network Error' });
      }
    }
    setloading(false);
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
          <Button
            className={classes.btn}
            variant="primary"
            type="button"
            onClick={() => handleLogin()}
            disabled={loading}
          >
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
