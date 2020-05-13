import React from 'react';
import MediaQuery from 'react-responsive';
import Styles from './setBalanceForm.module.css';
import DatePickerCustom from '../datePicker';
import Notification from '../WelcomeNotification/WelcomeNotification';
import AdditionalButton from '../AdditionalButton/AdditionalButton';
import ReportButton from '../goToReportsButton';
import ExpensesList from '../ExpensesList';
import ExpensesForm from '../ExpensesForm/ExpensesForm';

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
          <ReportButton className={Styles.reportButton} active={balance} />
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
            <button className={Styles.button}>
              <div className={Styles.containerBtn}>подтвердить</div>
            </button>
          </form>
        </div>
        <MediaQuery minDeviceWidth={768}>
          <AdditionalButton active={balance} />
        </MediaQuery>
        <div className={Styles.container_expenses}>
          <MediaQuery maxDeviceWidth={767}>
            {balance ? <DatePickerCustom /> : <Notification />}
          </MediaQuery>

          <MediaQuery minDeviceWidth={768}>
            {!balance && <Notification />}
            <div className={Styles.datePickerExpensesForm_container}>
              <DatePickerCustom />
              <ExpensesForm />
            </div>
          </MediaQuery>

          <ExpensesList />
          <MediaQuery maxDeviceWidth={767}>
            <AdditionalButton active={balance} />
          </MediaQuery>
        </div>
      </div>
    );
  }
}
