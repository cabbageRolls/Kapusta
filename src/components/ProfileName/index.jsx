import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isTablet, isMobile, isDesktop } from '../../services/mediaQuery';
import styles from './ProfileName.module.css';
import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors';

const index = ({ userName, isRendered }) => {
  const Tablet = isTablet(useMediaQuery);
  const Mobile = isMobile(useMediaQuery);
  const Desktop = isDesktop(useMediaQuery);
  return isRendered ? (
    <div
      className={[
        Tablet || Mobile ? styles.Tablet_container : styles.Desktop_container,
        styles.wrapper,
      ].join(' ')}
    >
      <div className={styles.firstLetter}>{userName[0]}</div>
      {Tablet || Desktop ? (
        <span className={styles.text}>{userName}</span>
      ) : null}
    </div>
  ) : null;
};

index.propTypes = {
  userName: PropTypes.string,
  isRendered: PropTypes.bool,
};

index.defaultProps = {
  userName: 'User Name',
  isRendered: true,
};

const MSTP = store => ({
  userName: selectors.getUserName(store),
});

export default connect(MSTP)(index);
