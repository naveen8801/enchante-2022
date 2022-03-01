import React from 'react';
import { makeStyles, Typography, Card } from '@material-ui/core';
const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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

function Home() {
  const classes = useStyles();

  return <div className={classes.root}>Home</div>;
}

export default Home;
