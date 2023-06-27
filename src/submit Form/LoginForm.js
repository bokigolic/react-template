import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if username or password is empty
    if (username.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, username: true }));
    }
    if (password.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, password: true }));
    }

    // If both fields are filled, show success message
    if (username.trim() !== '' && password.trim() !== '') {
      alert('Successful login!');
      setUsername('');
      setPassword('');
      setErrors({
        username: false,
        password: false,
      });
    }
  };

  return (
    <div className='container'>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={errors.username ? 'error' : ''}
          />
          {errors.username && <span className="error-message">Username is required</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">Password is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
