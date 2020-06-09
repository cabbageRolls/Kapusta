import React from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';
import { isMobile } from '../../services/mediaQuery';
import styles from './AuthFormDescription.module.css';

const AuthFormDescription = ({ GoogleAuth = false }) => {
  const Mobile = isMobile(useMediaQuery);

  return GoogleAuth ? (
    <p
      className={Mobile ? styles.TextGoogle_mobile : styles.TextGoogle_default}
    >
      Вы можете авторизироваться с помощью google account:
    </p>
  ) : (
    <p className={Mobile ? styles.TextAuth_mobile : styles.TextAuth_default}>
      Или зайти в приложение с помощью имейла и пароля, сперва
      зарегистрировавшись:
    </p>
  );
};

AuthFormDescription.propTypes = {
  // eslint-disable-next-line react/require-default-props
  GoogleAuth: PropTypes.bool,
};

export default AuthFormDescription;
