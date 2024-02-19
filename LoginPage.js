// LoginPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Username and password are required');
    } else {
      setError('');
      // Perform authentication if needed
      // For simplicity, let's assume successful login
      history.push('/table');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin} disabled={!username || !password}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;
