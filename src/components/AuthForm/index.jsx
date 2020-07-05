import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { validateAll } from 'indicative/validator';

import styles from './AuthForm.module.css';
import * as sessionOperations from '../../redux/operations/session';

import Form from '../AuthFormComponent';
import AuthFormDescription from '../AuthFormDescription';
import GoogleButton from '../GoogleAuthButton';
import AuthLabel from '../AuthLabel';
import AuthInput from '../AuthInput';
import AuthErrorSpan from '../AuthErrorSpan';
import ActionButton from '../ActionButton';

const signIn = 'войти';
const signUp = 'регистрация';

const rules = {
  email: 'required|email',
  password: 'required|string|min:5|max:20',
};

const messages = {
  'email.required': 'Пожалуйста, введите почту.',
  'email.email': 'Почта невалидна.',
  'password.required': 'Пожалуйста, введите пароль.',
  'password.min': 'Пароль должен быть минимум 5 символов.',
  'password.max': 'Пароль должен быть максимум 20 символов.',
};

class AuthForm extends Component {
  state = {
    email: '',
    password: '',
    errors: null,
  };

  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    onSignup: PropTypes.func.isRequired,
  };

  catchErrors = errors => {
    const formattedErrors = {};

    errors.forEach(error => {
      formattedErrors[error.field] = error.message;
    });

    this.setState({ errors: formattedErrors });
  };

  handleSignup = e => {
    const { email, password } = this.state;

    validateAll({ email, password }, rules, messages)
      .then(data => {
        const credentials = {
          ...data,
          name: {
            fullName: `${email} user`,
            firstName: email,
            lastName: 'user',
          },
        };

        this.props.onSignup(credentials);
        this.setState({ email: '', password: '', errors: null });
      })
      .catch(errors => this.catchErrors(errors));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    validateAll({ email, password }, rules, messages)
      .then(data => {
        this.props.onLogin(data);
        this.setState({ email: '', password: '', errors: null });
      })
      .catch(errors => this.catchErrors(errors));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password, errors } = this.state;

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
            <AuthErrorSpan message="email" errors={errors} />
          </AuthLabel>
          <AuthLabel htmlFor="password">
            Пароль
            <AuthInput
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <AuthErrorSpan message="password" errors={errors} />
          </AuthLabel>
        </div>
        <ActionButton
          firstButtonText={signIn}
          secondButtonText={signUp}
          onSignup={this.handleSignup}
        />
      </Form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: sessionOperations.login,
  onSignup: sessionOperations.signup,
};

export default connect(null, mapDispatchToProps)(AuthForm);
