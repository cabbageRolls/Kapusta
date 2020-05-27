import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';
import styles from './AuthForm.module.css';

import GoogleButton from '../googleAuthButton/GoogleButton';
import AuthInput from '../AuthInput';
import ActionButton from '../ActionButton/ActionButton';

const AuthForm = () => {
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);

  const signIn = 'войти';
  const signUp = 'регистрация';

  return (
    <div
      className={
        Mobile
          ? styles.AuthForm_mobile
          : Tablet
          ? styles.AuthForm_tablet
          : styles.AuthForm_desktop
      }
    >
      <p
        className={
          Mobile ? styles.TextGoogle_mobile : styles.TextGoogle_default
        }
      >
        Вы можете авторизироваться с помощью google account:
      </p>
      <GoogleButton />

      <p className={Mobile ? styles.TextAuth_mobile : styles.TextAuth_default}>
        Или зайти в приложение с помощью имейла и пароля, сперва
        зарегистрировавшись:
      </p>
      <AuthInput />
      <ActionButton firstButtonText={signIn} secondButtonText={signUp} />
    </div>
  );
};

export default AuthForm;
