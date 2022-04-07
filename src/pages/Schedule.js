import React, { useState } from 'react';
import {
  makeStyles,
  Typography,
  Card,
  Divider,
  Button,
} from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

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
    marginTop: '8rem',
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
    width: '80%',
    padding: '2rem',
    marginTop: '1rem',
    display: ' flex',
    alignItems: 'center',
    justifyContent: 'center',
    ['@media (max-width:780px)']: {
      width: '90%',
    },
  },
  RegisterationHeading: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    color: 'white',
    marginBottom: '2rem',
    marginTop: '12rem',
  },
}));

function Schedule() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      name: 'Solo Dance',
      venue: 'Auditorium',
      date: '8 April 10.00 AM - 10:30 AM',
      data: [
        'Duet Singing - Main Stage',
        'Musical Chairs - Plaza',
        'Fiction Addiction - ICT Lab',
        'Graffiti',
      ],
    },
    {
      name: 'Duet Dance',
      venue: 'Auditorium',
      date: '8 April 10:30 AM - 11:00 AM',
      data: [
        'Add Mad Show - Main Stage',
        'Musical Chairs - Plaza',
        'Fiction Addiction - ICT Lab',
        'Graffiti',
      ],
    },
    {
      name: 'Group Folk Dance',
      venue: 'Auditorium',
      date: '8 April 11:00 AM - 11:30 AM',
      data: ['Group Singing - Main Stage', 'Stand Up Comedy - Plaza'],
    },
    {
      name: 'Group Western',
      venue: 'Auditorium',
      date: '8 April 11:30 AM - 12:30 PM',
      data: ['Solo Dance - Main Stage', 'Turn Coat - Plaza', 'Mehandi'],
    },
    {
      name: 'Choreography',
      venue: 'Auditorium',
      date: '8 April 12:30 PM - 1:15 PM',
      data: [
        'Skit - Main Stage',
        'Face Off - Plaza',
        'Eco Meme War - ICT LAB',
        'Brushless Painting',
      ],
    },
    {
      name: 'Solo Singing Hindi',
      venue: 'PD 202 First Floor',
      date: '8 April 1:15 PM - 2:00 PM',
      data: ['Meme/Mono Acting - Main Stage', 'E-sports - ICT LAB'],
    },
    {
      name: 'Duet Singing',
      venue: 'PD 202 First Floor',
      date: '8 April 2:45 PM- 3:45 PM',
      data: ['Mandala Art - Mech. Corridor'],
    },
    {
      name: 'Group Singing',
      venue: 'PD 202 First Floor',
      date: '8 April 3:45 PM - 4:30 PM',
      data: ['Short Film Making - ICT-LAB', 'Jump The ball - Informal Pandal'],
    },
    {
      name: 'Instrumental',
      venue: 'PD 202 First Floor',
      date: '8 April 4:30 PM - 5:15 PM',
      data: ['Choreography - Main Stage'],
    },
    {
      name: 'Ragini',
      venue: 'PD 202 First Floor',
      date: '8 April 5:15 PM - 5:45 PM',
      data: ['Group Western - Main Stage'],
    },
    {
      name: 'Ragini',
      venue: 'PD 202 First Floor',
      date: '8 April 5:45 PM - 6:30 PM',
      data: ['Live Singing - Main Stage'],
    },
    {
      name: 'Fash P',
      venue: 'Auditorium',
      date: '8 April 6:30 PM - 7:00 PM',
      data: ['Fash P - Main Stage'],
    },
    {
      name: 'Stage Play',
      venue: 'Blood Donation Hall',
      date: '8 April 7:00 PM - 8:00 PM',
      data: ['Folk Dance - Main Stage'],
    },
    {
      name: 'Solo Dance',
      venue: 'Auditorium',
      date: '9 April 11.00 AM - 11:40 AM',
      data: [
        'Solo Singing - Main Stage',
        'Creating Writing - ICT Lab',
        'Cross The Maze - Main Ground',
        'Tatto Making - Mechanical Corridor',
      ],
    },
    {
      name: 'Duet Dance',
      venue: 'Auditorium',
      date: '9 April 11:40 AM - 12:00 AM',
      data: [
        'Instrumental - Main Stage',
        'Footloose - Plaza',
        'Treasure Hunt - Main Ground',
      ],
    },
    {
      name: 'Group Folk Dance',
      venue: 'Auditorium',
      date: '9 April 12:00 PM - 1:00 PM',
      data: [
        'Stage Play - Main Stage',
        'RAP War - Main Ground',
        'Alfaz - ICT lab',
        'Paint Your Emotion - ME Corridor',
      ],
    },
    {
      name: 'Group Western',
      venue: 'Auditorium',
      date: '9 April 2:30 PM - 3:15 PM',
      data: [
        'Duet Dance - Main Stage',
        'JAM - Plaza',
        'Cooking without Gas - Informal Pandal',
        'Doodling - Mechanical Corridor',
      ],
    },
    {
      name: 'Duet Singing',
      venue: 'PD 202 First Floor',
      date: '9 April 3:15 AM- 4:00 AM',
      data: ['Price Distribution - Main Stage', 'Flash Mob - Main Ground'],
    },
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.RegisterationHeading}>
        Schedule of Enchante 2k22
      </Typography>
      <div className={classes.content}>
        <Stepper
          orientation="vertical"
          style={{
            width: '50%',
          }}
        >
          {steps.map((step, index) => (
            <Step active={true} key={step.label}>
              <StepLabel>
                <Typography style={{ fontWeight: 700 }} variant="h6">
                  {step.date}
                </Typography>
              </StepLabel>
              <StepContent>
                <ul style={{ listStyle: 'none' }}>
                  {step.data.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
}

export default Schedule;
