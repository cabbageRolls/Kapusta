import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from './goToReportsButton.module.css';

import { Mobile, Default } from '../../services/mediaQuery';

const ButtonReports = ({ pathname }) => {
  return (
    <Link
      to={{
        pathname,
      }}
      className={Styles.link}
    >
      <div className={Styles.container}>
        <Default>
          <p className={Styles.text}>Перейти к отчетам</p>
        </Default>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="5 5 14 14"
        >
          <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
          <path fill="none" />
        </svg>

        <Mobile>
          <p className={Styles.text}>Перейти к отчетам</p>
        </Mobile>
      </div>
    </Link>
  );
};

ButtonReports.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default ButtonReports;
