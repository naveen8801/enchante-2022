import React from 'react';
import { makeStyles, Typography, Card } from '@material-ui/core';
import { Carousel } from 'react-bootstrap';
import i1 from './../assets/1.JPG';
import i2 from './../assets/2.JPG';
import i3 from './../assets/3.JPG';
import i4 from './../assets/4.JPG';
import i5 from './../assets/5.JPG';
import i6 from './../assets/6.JPG';
import { Typewriter } from 'react-simple-typewriter';

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
    // position: 'absolute',
    // zIndex: '2',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontWeight: 800,
    color: '#FF5959',
    position: 'relative',
    padding: '0.3rem',
    fontSize: '5.5rem!important',
    '&::after': {
      content: '" "',
      width: '160px',
      height: '2px',
      backgroundColor: '#95CD41',
      position: 'absolute',
      margin: '2px auto',
      bottom: 0,
      right: 0,
      left: 0,
    },
  },
  btn: {
    backgroundColor: '#78B64D!important',
    borderColor: '#78B64D!important',
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
    position: 'absolute',
    zIndex: '2',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <p className={classes.subText}>Welcome</p>
        <Typography variant="h1" className={classes.heading}>
          <Typewriter
            words={['Enchante ']}
            loop
            typeSpeed={120}
            deleteSpeed={40}
            delaySpeed={2500}
          />{' '}
          <span className={classes.span}>2022</span>
        </Typography>
      </div>
      <div className={classes.gradient}></div>
      <div className={classes.carousel}>
        <Carousel
          indicators={false}
          prevIcon={false}
          nextIcon={false}
          indicatorLabels={false}
          style={{ width: '100%', height: '100vh' }}
          interval={3500}
        >
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '100vh' }}
              className="w-100"
              src={i5}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '100vh' }}
              className="w-100"
              src={i3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '100vh' }}
              className="w-100"
              src={i1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '100vh' }}
              className="w-100"
              src={i2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '100vh' }}
              className="d-block w-100"
              src={i4}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '100vh' }}
              className="w-100"
              src={i6}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={classes.footer}>
        <Typography> © 2020 Copyright: Enchante 2022</Typography>
      </div>
    </div>
  );
}

export default Home;
