/** @format */

import React from 'react';
import '../CSS/normilize.css';
import '../CSS/index.css';

import ProjectTitle from './ProjectTitle/ProjectTitle.jsx';
import AuthInput from './AuthInput/AuthInput';
import ExpensesForm from './ExpensesForm/ExpensesForm';

function App() {
  return (
    <div>
      <ExpensesForm />
    </div>
  );
}

export default App;
