import React from 'react';
import {
  makeStyles,
  Typography,
  Card,
  Divider,
  Button,
} from '@material-ui/core';

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

function Schedule() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.RegisterationHeading}>
        Schedule
      </Typography>
      <p className={classes.subText}>Soon...</p>
    </div>
  );
}

export default Schedule;
