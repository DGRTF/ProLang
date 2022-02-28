import React from 'react';
import './App.scss';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

import {
  registration,
  changePassword,
  forgotPassword,
  login,
} from './api/authorize/authorize';

import Header from './components/Header/Header';
import LogInForm from './components/LogInForm/LogInForm';
import ChangePasswordForm from './components/ChangePassword/ChangePasswordForm';
import ForgotPasswordForm from './components/ForgotPasswordForm/ForgotPasswordForm';

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <RegistrationForm registrationUser={registration} /> */}
      {/* <LogInForm logInUser={login} /> */}
      {/* <ChangePasswordForm changePassword={changePassword} /> */}
      <ForgotPasswordForm forgotPassword={forgotPassword} />
    </div>
  );
}
