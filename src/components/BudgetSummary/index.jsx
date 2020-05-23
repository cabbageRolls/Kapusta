import React from 'react';

import MonthPicker from '../MonthPicker';
import TotalBalanceInfo from '../TotalBalanceInfo';
import BalanceDetails from '../BalanceDetails';

const BudgetSummary = () => (
  <div>
    <MonthPicker />
    <TotalBalanceInfo />
    <BalanceDetails />
  </div>
);

export default BudgetSummary;
