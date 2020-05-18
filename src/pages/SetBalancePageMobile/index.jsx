import React from 'react';
import Styles from './setBalancePageMobile.module.css';
import SetBalanceForm from '../../components/setBalanceForm';

export default class SetBalansePage extends React.Component {
  render() {
    return (
      <div className={Styles.container}>
        <SetBalanceForm />
      </div>
    );
  }
}
