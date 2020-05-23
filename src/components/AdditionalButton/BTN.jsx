import React from 'react';
import PropTypes from 'prop-types';
import Styles from './BTN.module.css';

const BTN = ({ title, className, onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className={[Styles.button, className].join(' ')}
  >
    {title}
  </button>
);
BTN.defaultProps = {
  className: '',
  onClick: () => {},
};
BTN.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default BTN;
