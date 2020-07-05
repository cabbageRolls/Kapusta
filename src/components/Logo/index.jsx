import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Styles from './index.module.css';
import { useMediaQuery } from 'react-responsive';
import { Tablet, Desktop } from '../../services/mediaQuery';
import { isMobile } from '../../services/mediaQuery';

export default function Loader() {
  const Mobile = isMobile(useMediaQuery);
  return (
    <Link
      to={Mobile ? routes.SET_BALANCE_PAGE_MOBILE.path : routes.MAIN_PAGE.path}
    >
      <div className={Styles.logo}></div>
    </Link>
  );
}
