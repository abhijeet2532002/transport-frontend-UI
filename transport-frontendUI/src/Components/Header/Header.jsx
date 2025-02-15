import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom'; // Fix incorrect import
import { jwtDecode } from 'jwt-decode';
import { LogOut } from 'react-feather';
import axios from 'axios';

const Header = () => {
  const nagivate = useNavigate()
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    if (token) {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
    }
  }, [token]); // Add `token` as a dependency to update state when it changes.

  const logout = async () => {
    try {
      await axios.get('http://localhost:9495/api/user/logout', {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.removeItem('authToken'); // Remove token
      nagivate("/")
      setUser(null); // Update state to trigger re-render
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand fs-24" to="/">Destiny</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#">Ride</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Drive</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Business</a></li>
            {user && <li className="nav-item"><Link to={'/dashboard'} className='nav-link'>Dashboard</Link></li>}
          </ul>
          <div className="right">
            <Link to="/en">En</Link>
            <Link to="/help">Help</Link>
            {user ? (
              <div className='d-flex align-items-center'>
                <img className='me-2' width={'40px'} height={'40px'} src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png" alt="user" />
                <span className='text-light fs-14'>{user?.email}</span>
                <LogOut className='text-light ms-3' onClick={logout} style={{ cursor: 'pointer' }} />
              </div>
            ) : (
              <>
                <Link className='me-2' to="/signin">Log in</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
