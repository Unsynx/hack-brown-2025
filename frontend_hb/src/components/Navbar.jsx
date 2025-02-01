// src/components/Layout.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // For global toasts
import 'react-toastify/dist/ReactToastify.css';   // Toastify CSS
import './Navbar.css';

const Navbar = ({ children, isAuthenticated, handleLogout, username }) => {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <nav className="navbar">
          <NavLink to="/" className="nav-brand">
            <img className='logo' src="src/assets/Logo.svg"/>
          </NavLink>
          <div className="nav-links">
            {/* NavLink 'activeClassName' prop doesn't work in v6. Instead use 'className' function */}
            <NavLink 
              to="/search"
              className={({ isActive }) => (isActive ? 'active-link' : undefined)}
            >
              Challenges
            </NavLink>
            <NavLink 
              to="/placement"
              className={({ isActive }) => (isActive ? 'active-link' : undefined)}
            >
              Placement Test
            </NavLink>
            {isAuthenticated ? (
              <>
                <NavLink 
                  to="/profile"
                  className={({ isActive }) => (isActive ? 'active-link' : undefined)}
                >
                  Profile
                </NavLink>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink 
                  to="/login"
                  className={({ isActive }) => (isActive ? 'active-link' : undefined)}
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        </nav>
      </header>

      <main className="layout-content">
        {/* Global Toast Container */}
        <ToastContainer position="top-center" autoClose={3000} />
        {children}
      </main>

      <footer className="layout-footer">
        <p>© {new Date().getFullYear()} WriteUp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Navbar ;
