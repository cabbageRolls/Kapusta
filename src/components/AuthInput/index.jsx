import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthInput.module.css';

const AuthInput = ({ type, value, name, onChange }) => (
  <input
    className={styles.Input}
    type={type}
    value={value}
    name={name}
    id={name}
    onChange={onChange}
    placeholder={type === 'email' ? 'Your@email.com' : 'Пароль'}
  />
);

AuthInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AuthInput;
