import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // try {
    //   const response = await axios.post(
    //     'http://afc7a104784594208b12c3474fa3c924-1060237241.us-east-2.elb.amazonaws.com:9002/login',
    //     { email, password }
    //   );

    //   const { token } = response.data;

    //   // Store the JWT token in session storage and application memory
    //   sessionStorage.setItem('token', token);
    //   localStorage.setItem('token', token);

    //   // Redirect to the dashboard
    //   history.push('/dashboard');
    // } catch (error) {
    //   console.error('Login failed', error);
    // }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
