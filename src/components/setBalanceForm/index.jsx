import React from 'react';
import Styles from './setBalanceForm.module.css';
import DatePickerCustom from '../datePicker';

export default function setBalanceForm() {
  return (
    <div className={Styles.container}>
      <p className={Styles.text}>Баланс:</p>
      <form action="" className={Styles.form}>
        <input className={Styles.input} type="text" value={'55,000.00 UAH'} />

        <div className={Styles.block}>
          <p>
            Привет! Для начала работы внеси текущий баланс своего счета!
            <span>
              Ты не можешь тратить деньги пока их у тебя нет &#128512;
            </span>
          </p>
        </div>
        <button className={Styles.button}>
          <div className={Styles.containerBtn}>подтвердить</div>
        </button>
      </form>
      <DatePickerCustom />
    </div>
  );
}
