import React from 'react';
import PropTypes from 'prop-types';

import styles from './ActionButton.module.css';

const ActionButton = ({ firstButtonText, secondButtonText, onSignup }) => (
  <div className={styles.ActionButton}>
    <button className={styles.FirstButton} type="submit">
      {firstButtonText}
    </button>
    <button className={styles.SecondButton} type="button" onClick={onSignup}>
      {secondButtonText}
    </button>
  </div>
);

ActionButton.propTypes = {
  firstButtonText: PropTypes.string.isRequired,
  secondButtonText: PropTypes.string.isRequired,
  onSignup: PropTypes.func.isRequired,
};

export default ActionButton;
