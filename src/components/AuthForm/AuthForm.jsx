import React from 'react';
import AuthInput from '../AuthInput/AuthInput';
import styles from './AuthForm.module.css';

const AuthForm = () => (
  <div className={styles.AuthForm}>
    <p className={styles.TextGoogle}>Вы можете авторизироваться с помощью google account:</p>

    <p className={styles.TextAuth}>
      Или зайти в приложение с помощью имейла и пароля, сперва
      зарегистрировавшись:
    </p>
    <AuthInput />
  </div>
);

export default AuthForm;
