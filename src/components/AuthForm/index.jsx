import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './AuthForm.module.css';
import * as sessionOperations from '../../redux/operations/session';

import Form from '../AuthFormComponent';
import AuthFormDescription from '../AuthFormDescription';
import GoogleButton from '../GoogleAuthButton';
import AuthLabel from '../AuthLabel';
import AuthInput from '../AuthInput';
import ActionButton from '../ActionButton';

const signIn = 'войти';
const signUp = 'регистрация';

class AuthForm extends Component {
  state = {
    email: '',
    password: '',
  };

  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <AuthFormDescription GoogleAuth />
        <GoogleButton />

        <AuthFormDescription />
        <div className={styles.FormLabels}>
          <AuthLabel htmlFor="email">
            Электронная почта
            <AuthInput
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </AuthLabel>
          <AuthLabel htmlFor="password">
            Пароль
            <AuthInput
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </AuthLabel>
        </div>
        <ActionButton firstButtonText={signIn} secondButtonText={signUp} />
      </Form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: sessionOperations.login,
};

export default connect(null, mapDispatchToProps)(AuthForm);
