import React from 'react';
import Styles from './setBalancePageMobile.module.css';
import SetBalanceForm from '../../components/SetBalanceForm';

// eslint-disable-next-line react/prefer-stateless-function
export default class SetBalansePage extends React.Component {
  render() {
    return (
      <div className={Styles.container}>
        <SetBalanceForm />
      </div>
    );
  }
}
