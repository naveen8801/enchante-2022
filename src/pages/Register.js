import React from 'react';
import underConst from './../assets/OE60SH0.jpg';
import {
  makeStyles,
  Typography,
  Card,
  Divider,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const data = [
  {
    name: 'Dance',
    link: 'https://forms.gle/zdm9LNTmQVvvwC2H6',
  },
  {
    name: 'Fine Arts',
    link: 'https://forms.gle/3ie4ZkQsUNQDzkvBA',
  },
  {
    name: 'Informals',
    link: 'https://forms.gle/HSVQP64QCF1tSK4w9',
  },
  {
    name: 'Literary',
    link: 'https://forms.gle/VtdRKcNF5jMwFr3c9',
  },
  {
    name: 'Dramatics',
    link: 'https://forms.gle/zGyHmk5Moa7wWCCC8',
  },
  {
    name: 'Music',
    link: 'https://forms.gle/JSPft1aQB3hsh3vXA',
  },
];

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
  },
  heading: {
    fontFamily: 'Montserrat',
    fontWeight: 800,
    fontSize: '18px',
  },
  btn: {
    backgroundColor: '#78B64D!important',
    borderColor: '#78B64D!important',
    color: 'white',
  },
  span: {
    color: '#95CD41',
  },
  subText: {
    // marginBottom: '2rem',
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: '28px',
    width: ' 100%',
    textAlign: 'center',
    fontWeight: '500',
  },
  carousel: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '90vh',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    // background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
    backgroundColor: '#000000',
    opacity: '0.8',
    zIndex: '1',
  },
  content: {
    width: '40%',
    padding: '2rem',
    ['@media (max-width:780px)']: {
      width: '80%',
    },
  },
  RegisterationHeading: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    color: 'white',
    marginBottom: '2rem',
  },
}));

function Register() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.RegisterationHeading}>
        Register
      </Typography>
      <Card className={classes.content}>
        <ul style={{ listStyle: 'none' }}>
          {data.map((item, index) => (
            <li style={{ margin: '1rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography className={classes.heading}>{item.name}</Typography>
                <a
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                  href={item.link}
                >
                  <Button className={classes.btn}>Register</Button>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default Register;
