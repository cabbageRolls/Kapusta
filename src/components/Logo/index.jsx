import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Styles from './index.module.css';

export default function Loader() {
  return (
    <Link to={routes.MAIN_PAGE.path}>
      <div className={Styles.logo}></div>
    </Link>
  );
}
