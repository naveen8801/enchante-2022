import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Card } from '@material-ui/core';
import { Form, Button } from 'react-bootstrap';
import { Alert } from '@material-ui/lab';
import { contact } from '../api';

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
  contactHeading: {
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

function ContactUs() {
  const [formData, setformData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [error, seterror] = useState({ show: false, text: '' });
  const [success, setsuccess] = useState({ show: false, text: '' });
  const classes = useStyles();

  const handleOnClick = async () => {
    seterror({ show: false, text: '' });
    setsuccess({ show: false, text: '' });
    if (
      formData.email.trim() === '' ||
      formData.name.trim() === '' ||
      formData.message.trim() === ''
    ) {
      seterror({ show: true, text: 'Fields can not be empty' });
      return;
    } else {
      try {
        const res = await contact(formData);
        if (res.data.msg) {
          setsuccess({ show: true, text: res.data.msg });
          setformData({
            email: '',
            name: '',
            message: '',
          });
        }
      } catch (err) {
        console.log(err);
        seterror({ show: true, text: 'Network Error' });
      }
    }
  };
  return (
    <div className={classes.root}>
      <Typography
        className={classes.contactHeading}
        align="center"
        variant="h4"
      >
        For Queries
      </Typography>
      <Card style={{ width: '50%' }} style={{ padding: '2rem' }}>
        <Form>
          {success.show ? (
            <Alert severity="success">{success.text}</Alert>
          ) : null}
          {error.show ? <Alert severity="error">{error.text}</Alert> : null}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={formData.email}
              type="text"
              placeholder="Enter email"
              onChange={(e) => {
                setformData({ ...formData, email: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={formData.name}
              type="text"
              placeholder="Enter Name"
              onChange={(e) => {
                setformData({ ...formData, name: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as={'textarea'}
              value={formData.messages}
              type="text"
              placeholder="Type any message or queries"
              onChange={(e) => {
                setformData({ ...formData, message: e.target.value });
              }}
              size="sm"
            />
          </Form.Group>
          <Button
            className={classes.btn}
            variant="primary"
            type="button"
            onClick={() => handleOnClick()}
          >
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default ContactUs;
