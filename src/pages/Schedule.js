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
    width: '60%',
    padding: '2rem',
    marginTop: '1rem',
    display: ' flex',
    alignItems: 'center',
    justifyContent: 'center',
    ['@media (max-width:780px)']: {
      width: '80%',
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
      date: '12 March 10.30 AM',
    },
    {
      name: 'Duet Dance',
      venue: 'Auditorium',
      date: '12 March 11.00 AM',
    },
    {
      name: 'Group Folk Dance',
      venue: 'Auditorium',
      date: '12 March 11.30 AM',
    },
    {
      name: 'Group Western',
      venue: 'Auditorium',
      date: '12 March 12.30 PM',
    },
    {
      name: 'Choreography',
      venue: 'Auditorium',
      date: '12 March 2.30 PM',
    },
    {
      name: 'Solo Singing Hindi',
      venue: 'PD 202 First Floor',
      date: '12 March 10.30 AM – 11.30 AM',
    },
    {
      name: 'Duet Singing',
      venue: 'PD 202 First Floor',
      date: '12 March 11.30 Am – 12.00PM',
    },
    {
      name: 'Group Singing',
      venue: 'PD 202 First Floor',
      date: '12 March 12.00PM – 1.00 PM',
    },
    {
      name: 'Instrumental',
      venue: 'PD 202 First Floor',
      date: '12 March 2.00PM -2.30 PM',
    },
    {
      name: 'Ragini',
      venue: 'PD 202 First Floor',
      date: '12 March 2.30PM – 3.00PM',
    },
    {
      name: 'Fash P',
      venue: 'Auditorium',
      date: '12 March 11.30 AM – 12.30 PM',
    },
    {
      name: 'Stage Play',
      venue: 'Blood Donation Hall',
      date: '12 March 10.30 AM',
    },
    {
      name: 'Ad Mad Show',
      venue: 'Blood Donation Hall',
      date: '12 March 11.30 AM',
    },
    {
      name: 'Mono Acting',
      venue: 'Blood Donation Hall',
      date: '12 March 12.30 PM',
    },
    {
      name: 'Mime',
      venue: 'Blood Donation Hall',
      date: '12 March 2.00 PM',
    },
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.RegisterationHeading}>
        Audition Schedule
      </Typography>
      <div className={classes.content}>
        <Stepper orientation="vertical">
          {steps.map((step, index) => (
            <Step active={true} key={step.label}>
              <StepLabel>
                <Typography style={{ fontWeight: 700 }} variant="h6">
                  {step.name}
                </Typography>
              </StepLabel>
              <StepContent>
                <Typography>{`At ${step.venue} on ${step.date}`}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
}

export default Schedule;
