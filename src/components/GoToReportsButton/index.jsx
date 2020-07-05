import React from 'react';
import { Link } from 'react-router-dom';
import styles from './goToReportsButton.module.css';
import routes from '../../routes';

import { Mobile, Default } from '../../services/mediaQuery';

const ButtonReports = () => {
  return (
    <Link to={routes.REPORT_PAGE.path} className={styles.link}>
      <div className={styles.container}>
        <Default>
          <p className={styles.text}>Перейти к отчетам</p>
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
          <p className={styles.text}>Перейти к отчетам</p>
        </Mobile>
      </div>
    </Link>
  );
};

export default ButtonReports;
