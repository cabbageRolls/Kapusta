import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import styles from './MyLink.module.css';
import { isMobile } from '../../services/mediaQuery';

const MyLink = ({ title, to, onClick }) => {
  const Mobile = isMobile(useMediaQuery);
  return (
    <NavLink
      exact
      to={to}
      className={!Mobile ? styles.link : styles.mobileLink}
      activeClassName={styles.activelink}
      onClick={onClick}
    >
      {title}
    </NavLink>
  );
};

MyLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
export default MyLink;
