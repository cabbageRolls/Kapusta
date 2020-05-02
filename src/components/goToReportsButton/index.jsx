import React from "react";
import Styles from "./goToReportsButton.module.css";
export default function ButtonReports() {
  return (
    <button className={Styles.button}>
      <div className={Styles.container}>
        <div className={Styles.reports}></div>
        Перейти к отчетам
      </div>
    </button>
  );
}
