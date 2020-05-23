import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isTablet, isMobile } from '../../services/mediaQuery';
import styles from './ProfileName.module.css';

const index = ({ userName }) => {
  const Tablet = isTablet(useMediaQuery);
  const Mobile = isMobile(useMediaQuery);
  return (
    <div
      className={[
        Tablet || Mobile ? styles.Tablet_container : styles.Desktop_container,
        styles.wrapper,
      ].join(' ')}
    >
      <div className={styles.firstLetter}>{userName[0]}</div>
      {Tablet ? <span className={styles.text}>{userName}</span> : null}
    </div>
  );
};

index.propTypes = {
  userName: PropTypes.string,
};

index.defaultProps = {
  userName: 'User Name',
};

export default index;
