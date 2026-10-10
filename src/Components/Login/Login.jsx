import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    // invokes the login authentication API to authenticate a user
    const res = await fetch('https://api.example.com/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.authtoken) {
      sessionStorage.setItem('auth-token', data.authtoken);
      window.location.reload();
    }
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
