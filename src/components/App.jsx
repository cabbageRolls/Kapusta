import React from 'react';
import '../CSS/normilize.css';
import '../CSS/index.css';
import ProjectTitle from './ProjectTitle/ProjectTitle';
import AuthForm from './AuthForm/AuthForm';
import ExpensesForm from './ExpensesForm/ExpensesForm';
import GoBackButton from './GoBackButton/GoBackButton';
import ExpensesList from './ExpensesList/index';

function App() {
  return (
    <div>
      {/* <ProjectTitle />
      <AuthForm /> */}
      <ExpensesForm />
      {/* <GoBackButton /> */}
      <ExpensesList />
    </div>
  );
}

export default App;
