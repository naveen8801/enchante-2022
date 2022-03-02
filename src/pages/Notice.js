import React, { useEffect, useState } from 'react';
import { makeStyles, Typography, CircularProgress } from '@material-ui/core';
import { getNotifications } from '../api';
import { Table, thead, tr, th, Card } from 'react-bootstrap';
import moment from 'moment';

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
  NoticeHeading: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    color: 'white',
    marginBottom: '2rem',
    marginTop: '3rem',
  },
  btn: {
    backgroundColor: '#78B64D!important',
    borderColor: '#78B64D!important',
  },
  card: {
    width: '80%',
    textAlign: 'center',
  },
}));

function Notice() {
  const classes = useStyles();
  const [notifications, setNotifications] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    getNotice();
  }, []);
  const getNotice = async () => {
    setloading(true);
    try {
      const res = await getNotifications();
      if (res.data.data) {
        let tmp = [];
        for (let i = 0; i < res.data.data.length; i++) {
          let obj = res.data.data[i];
          obj.createdAt = moment(res.data.data[i].createdAt).format(
            'DD MMMM YYYY HH:MM:SS'
          );
          tmp.push(obj);
        }
        setNotifications(tmp);
      }
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.NoticeHeading} align="center" variant="h4">
        Latest Updates
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Card className={classes.card} style={{ padding: '1rem' }}>
          <Table responsive size="lg" bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Date & Time</th>
                <th>Title</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {notifications.length > 0
                ? notifications
                    .sort(function (a, b) {
                      // Turn your strings into dates, and then subtract them
                      // to get a value that is either negative, positive, or zero.
                      return new Date(b.createdAt) - new Date(a.createdAt);
                    })
                    .map((i, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{i.createdAt}</td>
                        <td>{i.title}</td>
                        <td>{i.description}</td>
                      </tr>
                    ))
                : 'NO DATA TO SHOW'}
            </tbody>
          </Table>
        </Card>
      )}
    </div>
  );
}

export default Notice;
