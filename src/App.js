import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactUs from './pages/ContactUs';
import Notice from './pages/Notice';
import Register from './pages/Register';
import Schedule from './pages/Schedule';
import { Audio, MutatingDots } from 'react-loader-spinner';
import { Typography } from '@material-ui/core';
// import React, { useEffect } from 'react';

function App() {
  const user = useSelector((state) => state.auth);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, [4000]);
  }, []);

  return (
    <div className="App">
      {loader ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
          }}
        >
          <MutatingDots
            height="100"
            width="100"
            color="grey"
            ariaLabel="loading"
          />
          <Typography style={{ margin: 0, marginTop: ' 1rem' }} variant="h5">
            Loading...
          </Typography>
        </div>
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/notice" element={<Notice />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/schedule" element={<Schedule />} />
            {user ? (
              <Route exact path="/admin-dashboard" element={<Admin />} />
            ) : null}
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
