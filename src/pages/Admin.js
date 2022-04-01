import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  Typography,
  CircularProgress,
  FormControl,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { PostNotifications, getNotifications, deleteNotice } from '../api';
import { Table, thead, tr, th, Card, Button } from 'react-bootstrap';
import moment from 'moment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Form } from 'react-bootstrap';
import { Alert } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    height: '80vh',
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
    marginTop: '5rem',
  },
  btn: {
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    backgroundColor: '#78B64D!important',
    borderColor: '#78B64D!important',
  },
  card: {
    height: '70vh',
    width: '80%',
    textAlign: 'center',
    overflow: 'auto',
  },
}));

function Admin() {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  const [notifications, setNotifications] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setloading] = useState(false);
  const [addDialog, setAddDialog] = useState(false);
  const [deleteDialog, setdeleteDialog] = useState(false);
  const [error, seterror] = useState({ show: false, text: '' });
  const [success, setsuccess] = useState({ show: false, text: '' });
  const [addNoticeData, setAddNoticeData] = useState({
    title: '',
    description: '',
  });

  const [deleteIds, setdeleteIds] = useState([]);

  useEffect(() => {
    getNotice();
  }, []);
  const getNotice = async () => {
    setloading(true);
    try {
      const res = await getNotifications();
      if (res.data.data) {
        let tmp = [];
        let tmpDel = [];
        for (let i = 0; i < res.data.data.length; i++) {
          let obj = res.data.data[i];
          obj.createdAt = moment(res.data.data[i].createdAt).format(
            'DD MMMM YYYY HH:MM:SS'
          );
          // tmpDel.push(false);
          tmp.push(obj);
        }
        tmp.reverse();
        // setdeleteIds(tmpDel);
        setNotifications(tmp);
      }
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };

  const handleAddNotice = async () => {
    setloading(true);
    seterror({ show: false, text: '' });
    setsuccess({ show: false, text: '' });
    if (
      addNoticeData.title.trim() === '' ||
      addNoticeData.description.trim() === ''
    ) {
      seterror({ show: true, text: 'Fields can not be empty' });
      setloading(false);
      return;
    } else {
      try {
        const res = await PostNotifications(addNoticeData);
        if (res.data.msg) {
          setsuccess({ show: true, text: res.data.msg });
          setAddNoticeData({
            title: '',
            description: '',
          });
          getNotice();
          setAddDialog(false);
        }
      } catch (err) {
        console.log(err);
        seterror({ show: true, text: 'Network Error' });
      }
    }
    setloading(false);
  };
  console.log(deleteIds);

  const handleDelete = async () => {
    if (deleteIds.length <= 0) {
      return;
    } else {
      try {
        const res = await deleteNotice({ id: deleteIds });
        if (res.data.msg) {
          console.log(res.data.msg);
          getNotice();
        }
      } catch (err) {
        console.log(err);
      }
    }
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
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {notifications.length > 0
                ? notifications
                    .sort(function (a, b) {
                      return new Date(b.createdAt) - new Date(a.createdAt);
                    })
                    .map((i, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{i.createdAt}</td>
                        <td>{i.title}</td>
                        <td>{i.description}</td>
                        <td>
                          <FormControl margin="normal" size="medium">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={deleteIds.indexOf(i._id) > -1}
                                  onChange={(e) => {
                                    const tmp = [...deleteIds];
                                    if (e.target.checked) {
                                      tmp.push(i._id);
                                      setdeleteIds(tmp);
                                    } else {
                                      const index = tmp.indexOf(i._id);
                                      if (index > -1) {
                                        tmp.splice(index, 1); // 2nd parameter means remove one item only
                                        setdeleteIds(tmp);
                                      }
                                    }
                                  }}
                                />
                              }
                              label="Delete"
                            />
                          </FormControl>
                        </td>
                      </tr>
                    ))
                : 'NO DATA TO SHOW'}
            </tbody>
          </Table>
          <div>
            <Button
              className={classes.btn}
              variant="primary"
              type="button"
              onClick={() => {
                seterror({ show: false, text: '' });
                setsuccess({ show: false, text: '' });
                setAddDialog(true);
              }}
              disabled={loading}
            >
              Add
            </Button>
            <Button
              className={classes.btn}
              variant="primary"
              type="button"
              onClick={() => handleDelete()}
              disabled={loading || deleteIds.length === 0}
            >
              Delete
            </Button>
          </div>
        </Card>
      )}
      {/* Add New Notice */}
      <Dialog
        open={addDialog}
        onClose={() => setAddDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {success.show ? (
              <Alert severity="success">{success.text}</Alert>
            ) : null}
            {error.show ? <Alert severity="error">{error.text}</Alert> : null}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  value={addNoticeData.title}
                  type="text"
                  placeholder="Enter title"
                  onChange={(e) => {
                    setAddNoticeData({
                      ...addNoticeData,
                      title: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  as={'textarea'}
                  value={addNoticeData.description}
                  type="text"
                  placeholder="Description"
                  size="sm"
                  onChange={(e) => {
                    setAddNoticeData({
                      ...addNoticeData,
                      description: e.target.value,
                    });
                  }}
                />
              </Form.Group>
            </Form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={loading}
            onClick={() => handleAddNotice()}
            className={classes.btn}
            color="primary"
            autoFocus
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Admin;
