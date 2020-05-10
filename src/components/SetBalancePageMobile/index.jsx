import React from 'react';
import Styles from './setBalancePageMobile.module.css';
import SetBalanceForm from '../SetBalanceForm';
import { Mobile } from '../../services/mediaQuery';

export default class SetBalansePage extends React.Component {
  render() {
    return (
      <div className={Styles.container}>
        <Mobile>
          <SetBalanceForm />
        </Mobile>
      </div>
    );
  }
}
