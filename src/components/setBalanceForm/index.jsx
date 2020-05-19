import React from 'react';
import Styles from './setBalanceForm.module.css';
import DatePickerCustom from '../datePicker';
import Notification from '../WelcomeNotification/WelcomeNotification';

export default class setBalanceForm extends React.Component {
  state = {
    balance: false,
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { inputValue } = this.state;

    this.setState(prevState => ({
      balance: prevState.balance + Number(inputValue),
    }));

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      inputValue: '',
    });
  };

  render() {
    const { inputValue, balance } = this.state;

    return (
      <div className={Styles.container}>
        <div className={Styles.balance_container}>
          {/* BALANCE CONTAINER */}

          <p className={Styles.text}>Баланс:</p>
          <form onSubmit={this.handleSubmit} action="" className={Styles.form}>
            <input
              className={Styles.input}
              type="text"
              value={inputValue}
              onChange={this.handleChange}
              placeholder={
                balance ? `${Number(balance).toFixed(2)} UAH` : '00.00 UAH'
              }
              pattern="\d+(\.\d{2})?"
            />
            <button type="submit" className={Styles.button}>
              <div className={Styles.containerBtn}>подтвердить</div>
            </button>
          </form>
        </div>

        {balance ? (
          <div className={Styles.datePicker}>
            <DatePickerCustom />
          </div>
        ) : (
          <div className={Styles.notification}>
            <Notification />
          </div>
        )}
      </div>
    );
  }
}
