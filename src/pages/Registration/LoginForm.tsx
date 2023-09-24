import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './authSlice';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here, e.g., call an API or use Auth0
    // Once the login is successful, dispatch the loginSuccess action
    const user = { email }; // Modify the user object based on your user data structure
    dispatch(loginSuccess(user));
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;