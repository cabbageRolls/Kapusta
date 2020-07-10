import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Styles from './index.module.css';
import { useMediaQuery } from 'react-responsive';
import { isMobile } from '../../services/mediaQuery';
import { useSelector } from 'react-redux';
import { storeIsLogin } from '../../redux/selectors';

export default function Loader() {
  const Mobile = isMobile(useMediaQuery);
  const isAuth = useSelector(storeIsLogin);
  return (
    <Link
      to={
        !isAuth
          ? routes.AUTH_PAGE.path
          : Mobile
          ? routes.SET_BALANCE_PAGE_MOBILE.path
          : routes.EXPENSES.path
      }
    >
      <div className={Styles.logo}></div>
    </Link>
  );
}
