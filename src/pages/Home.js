import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Card } from '@material-ui/core';
import { Carousel } from 'react-bootstrap';
import i1 from './../assets/1-new.jpg';
import i2 from './../assets/2-new.jpg';
import i3 from './../assets/3-new.jpg';
import i4 from './../assets/4-new.jpg';
import i5 from './../assets/5-new.jpg';
import i6 from './../assets/6-new.jpg';
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
    fontSize: '7.5vw!important',
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
    margin: 0,
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: '2vw',
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
  const [show, setshow] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setshow((show) => (show = false));
    }, 8000);
  }, []);
  return (
    <div className={classes.root}>
      {show ? (
        <div className={classes.content}>
          <p className={classes.subText}>Welcome</p>
          <Typography variant="h1" className={classes.heading}>
            <Typewriter
              words={['Enchanté ']}
              loop
              typeSpeed={120}
              deleteSpeed={40}
              delaySpeed={4000}
            />
            <span className={classes.span}>2k22</span>
          </Typography>
          <p
            style={{ fontWeight: 400, marginTop: '2vw' }}
            className={classes.subText}
          >
            Seth Jai Parkash Mukand Lal Institute of Engineering and Technology,
            Radaur
          </p>
        </div>
      ) : null}
      {show ? <div className={classes.gradient}></div> : null}
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
      {/* <div className={classes.footer}>
        <Typography> © 2020 Copyright: Enchante 2022</Typography>
      </div> */}
    </div>
  );
}

export default Home;
