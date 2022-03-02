import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactUs from './pages/ContactUs';
import Notice from './pages/Notice';
import Register from './pages/Register';
import Schedule from './pages/Schedule';
function App() {
  const user = useSelector((state) => state.auth);
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
