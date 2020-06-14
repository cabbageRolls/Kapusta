import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Styles from './MyLink.module.css';

const MyLink = ({ title, to, onClick }) => (
  <NavLink
    exact
    to={to}
    className={Styles.className}
    activeClassName={Styles.activeClassName}
    onClick={onClick}
  >
    {title}
  </NavLink>
);

MyLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
export default MyLink;
