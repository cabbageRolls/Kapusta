import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ExpensesForm.module.css';
import ExpensesFormInputs from '../ExpensesFormInputs';

export default class ExpensesForm extends Component {
  state = {
    descriptionValue: '',
    amountValue: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleDescriptionChange = e => {
    const { value } = e.target;

    this.setState({
      descriptionValue: value,
    });
  };

  handleAmountChange = e => {
    const { value } = e.target;
    const regexp = /^[0-9?.]*$/;

    if (regexp.test(value)) {
      this.setState({
        amountValue: value,
      });
    } else {
      this.setState(prevState => ({
        amountValue: prevState.amountValue,
      }));
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const { descriptionValue, amountValue } = this.state;
    const { onSubmit } = this.props;

    onSubmit(descriptionValue, amountValue);

    this.setState({
      descriptionValue: '',
      amountValue: '',
    });
  };

  render() {
    const { descriptionValue, amountValue } = this.state;

    return (
      <>
        <form action="" className={styles.Form} onSubmit={this.handleSubmit}>
          <ExpensesFormInputs
            descriptionValue={descriptionValue}
            amountValue={amountValue}
            onDescriptionChange={this.handleDescriptionChange}
            onAmountChange={this.handleAmountChange}
          />
        </form>
      </>
    );
  }
}
