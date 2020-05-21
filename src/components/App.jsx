import React from 'react';
import '../CSS/normilize.css';
import '../CSS/index.css';
import ExpensesList from './ExpensesList';
import expensesData from './ExpensesList/expensesData.json';

function App() {
  return (
    <div>
      <ExpensesList expenses={expensesData} />
    </div>
  );
}

export default App;
