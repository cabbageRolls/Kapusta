import React from 'react';
import PropTypes from 'prop-types';
import { Mobile, Default } from '../../services/mediaQuery';
import styles from './LogoutButton.module.css';
import svg from './images/logout.svg';

const index = ({ isRendered }) => {
  return isRendered ? (
    <button type="button" className={styles.button}>
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
};

index.defaultProps = {
  isRendered: true,
};

export default index;
