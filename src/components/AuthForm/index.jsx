import React from 'react';
import styles from './AuthForm.module.css';

import ButtonGoogle from '../googleAuthButton';
import AuthInput from '../AuthInput';
import ActionButton from '../ActionButton';

const AuthForm = () => (
  <div className={styles.AuthForm}>
    <p className={styles.TextGoogle}>
      Вы можете авторизироваться с помощью google account:
    </p>
    <ButtonGoogle />

    <p className={styles.TextAuth}>
      Или зайти в приложение с помощью имейла и пароля, сперва
      зарегистрировавшись:
    </p>
    <AuthInput />
    <ActionButton />
  </div>
);

export default AuthForm;
