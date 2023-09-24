import React from 'react';
import LoginForm from './LoginForm;
import SignupForm from './SignupForm';

const AuthPage: React.FC = () => {
  return (
    <div>
      <LoginForm />
      <SignupForm />
    </div>
  );
};

export default AuthPage;