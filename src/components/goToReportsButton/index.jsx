import React from 'react';
import Styles from './goToReportsButton.module.css';
export default function ButtonReports({ active }) {
  return (
    <button
      className={active ? Styles.button : Styles.disable}
      disabled={!active}
    >
      <div className={Styles.container}>
        <div className={Styles.reports}></div>
        Перейти к отчетам
      </div>
    </button>
  );
}
