import React from 'react';
import PropTypes from 'prop-types';
import { Mobile, Default } from '../../services/mediaQuery';
import styles from './LogoutButton.module.css';
import svg from './images/logout.svg';

const index = ({ isRendered, onLogOut }) => {
  return isRendered ? (
    <button type="button" className={styles.button} onClick={onLogOut}>
      <Mobile>
        <svg className={styles.icon}>
          <use href={`${svg}#Capa_1`} />
        </svg>
      </Mobile>
      <Default>
        <span className={styles.text}>Выйти</span>
      </Default>
    </button>
  ) : null;
};

index.propTypes = {
  isRendered: PropTypes.bool,
  onLogOut: PropTypes.func.isRequired,
};

index.defaultProps = {
  isRendered: true,
};

export default index;
