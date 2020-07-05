import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './index.module.css';
import routes from '../../routes';

export default function Loader() {
  return (
    <Link to={routes.MAIN_PAGE.path}>
      <div className={Styles.logo}></div>
    </Link>
  );
}
