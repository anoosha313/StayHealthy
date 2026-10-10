import React, { useState } from 'react';

const Sign_Up = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const register = async (e) => {
    e.preventDefault();
    // invokes the registration API to register a new user
    const response = await fetch('https://api.example.com/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, phone })
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={register}>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default Sign_Up;
