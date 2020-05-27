import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './index.module.css';
export default function Loader() {
  return (
    <Link to="/">
      <div className={Styles.logo}></div>
    </Link>
  );
}
