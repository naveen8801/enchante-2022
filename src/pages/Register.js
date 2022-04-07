import React from 'react';
import {
  makeStyles,
  Typography,
  Card,
  Divider,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

import i1 from './../assets/rules/1.png';
import i2 from './../assets/rules/2.png';
import i3 from './../assets/rules/3.png';
import i4 from './../assets/rules/4.png';
import i5 from './../assets/rules/5.png';
import i6 from './../assets/rules/6.png';
import i7 from './../assets/rules/7.png';
import i8 from './../assets/rules/8.png';
import i9 from './../assets/rules/9.png';
import i10 from './../assets/rules/10.png';
import i11 from './../assets/rules/11.png';
import i12 from './../assets/rules/12.png';
import i13 from './../assets/rules/13.png';

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
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: '17px',
    width: ' 100%',
    textAlign: 'center',
    fontWeight: '300',
  },
  carousel: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '4rem',
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
    marginTop: '6rem',
  },
}));

function Register() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.RegisterationHeading}>
        Gallary
      </Typography>
      {/* <p className={classes.subText}>
        * Please register with your college email IDs
      </p>
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
      </Card> */}
      <div className={classes.carousel}>
        <Carousel
          indicators={false}
          indicatorLabels={false}
          interval={3500}
          style={{ height: '65vh', width: '45%', overflow: 'auto' }}
        >
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '65vh' }}
              className="d-block w-100"
              src={i4}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '65vh' }}
              className="d-block w-100"
              src={i9}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '65vh' }}
              className="d-block w-100"
              src={i10}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '65vh' }}
              className="d-block w-100"
              src={i11}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '65vh' }}
              className="d-block w-100"
              src={i12}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '65vh' }}
              className="w-100"
              src={i13}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '65vh' }}
              className="d-block w-100"
              src={i8}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '65vh' }}
              className="w-100"
              src={i5}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '65vh' }}
              className="w-100"
              src={i3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '65vh' }}
              className="w-100"
              src={i1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '65vh' }}
              className="w-100"
              src={i6}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: '100%', height: '65vh' }}
              className="w-100"
              src={i7}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Register;
