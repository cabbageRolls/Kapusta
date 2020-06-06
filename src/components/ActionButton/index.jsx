import React from 'react';
import PropTypes from 'prop-types';

import styles from './ActionButton.module.css';

const ActionButton = ({ firstButtonText, secondButtonText }) => (
  <div className={styles.ActionButton}>
    <button className={styles.FirstButton} type="submit">
      {firstButtonText}
    </button>
    <button className={styles.SecondButton} type="button">
      {secondButtonText}
    </button>
  </div>
);

ActionButton.propTypes = {
  firstButtonText: PropTypes.string.isRequired,
  secondButtonText: PropTypes.string.isRequired,
};

export default ActionButton;
