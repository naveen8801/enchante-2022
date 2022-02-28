import React, { useEffect, useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
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
  useEffect(() => {
    getNotice();
  }, []);
  const getNotice = async () => {
    try {
      const res = await getNotifications();
      if (res.data.data) {
        let tmp = [];
        for (let i = 0; i < res.data.data.length; i++) {
          let obj = res.data.data[i];
          obj.createdAt = moment(res.data.data[i].createdAt).format(
            'DD MMMM YYYY hh:mm:ss'
          );
          tmp.push(obj);
        }
        setNotifications(tmp);
      }
    } catch (error) {}
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.NoticeHeading} align="center" variant="h4">
        Latest Updates
      </Typography>
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
              ? notifications.map((i, index) => (
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
    </div>
  );
}

export default Notice;
