import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthErrorSpan.module.css';

const AuthErrorSpan = ({ errors = null, message }) => (
  <div className={styles.ErrorContainer}>
    {errors && <span className={styles.Message}>{errors[message]}</span>}
  </div>
);

AuthErrorSpan.propTypes = {
  errors: PropTypes.objectOf(PropTypes.string),
  message: PropTypes.string.isRequired,
};

export default AuthErrorSpan;