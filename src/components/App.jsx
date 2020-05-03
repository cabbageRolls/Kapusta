/** @format */

import React from 'react';
import '../CSS/normilize.css';
import '../CSS/index.css';

import ProjectTitle from './ProjectTitle/ProjectTitle.jsx';
import AuthInput from './AuthInput/AuthInput';
import List from './ExpensesListByCategory/ExpensesListByCategory';
function App() {
  return (
    <div>
      <List />
    </div>
  );
}

export default App;
