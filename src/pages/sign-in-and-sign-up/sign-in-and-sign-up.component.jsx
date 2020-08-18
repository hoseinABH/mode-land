import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
  <div className="row container text-right d-flex pl-sm-5">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
