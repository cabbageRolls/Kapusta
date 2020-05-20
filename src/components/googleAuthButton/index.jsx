import React from 'react';
import Styles from './googleAuthButton.module.css';

// Button принимает проп href - ссылка на регистрацию

export default function ButtonGoogle({ href = 'https://google.com' }) {
  const handleAuth = href => {
    window.location.href = href;
  };
  return (
    <button
      className={Styles.button}
      type="button"
      onClick={() => {
        handleAuth(href);
      }}
    >
      <div className={Styles.container}>
        <div className={Styles.google}></div>
        Google
      </div>
    </button>
  );
}
