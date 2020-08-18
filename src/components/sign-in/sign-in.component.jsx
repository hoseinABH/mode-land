import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div style={{ direction: 'rtl' }} className="col-lg-5 offset-lg-1">
        <h2>من حساب کاربری دارم</h2>
        <span>با ایمیل و کلمه عبور خود وارد شوید</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="ایمیل"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="کلمه عبور"
            required
          />
          <div className="d-flex">
            <CustomButton className="mx-2" type="submit">
              {' '}
              ورود{' '}
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              ورود از طریق گوگل
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
