import React from "react";
import Styles from "./googleAuthButton.module.css";
export default function ButtonGoogle() {
  return (
    <button className={Styles.button}>
      <div className={Styles.container}>
        <div className={Styles.google}></div>
        Google
      </div>
    </button>
  );
}
