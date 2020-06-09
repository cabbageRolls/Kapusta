import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthLabel.module.css';

const AuthLabel = ({ htmlFor, children }) => (
  <label className={styles.Label} htmlFor={htmlFor}>
    {children}
  </label>
);

AuthLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AuthLabel;
