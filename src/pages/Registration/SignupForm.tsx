import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './authSlice';

const SignupForm: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic here, e.g., call an API or use Auth0
    // Once the signup is successful, dispatch the loginSuccess action
    const user = { email }; // Modify the user object based on your user data structure
    dispatch(loginSuccess(user));
  };

  return (
    <div>
      <h2>Signup</h2>
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
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupForm;