import React from 'react';

const Navbar = () => {
  const handleLogout = () => {
    sessionStorage.removeItem('auth-token');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    window.location.reload();
  };

  const isLoggedIn = sessionStorage.getItem('auth-token');

  return (
    <nav>
      <div>StayHealthy</div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/appointments">Appointments</a></li>
        {isLoggedIn ? (
          <>
            <li>Welcome {sessionStorage.getItem('name')}</li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><a href="/signup">Sign Up</a></li>
            <li><a href="/login">Login</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
