import React from 'react';
import '../CSS/normilize.css';
import '../CSS/index.css';

import { BrowserRouter } from 'react-router-dom';
import Router from '../router';
import GoBackButton from './GoBackButton/GoBackButton';
import ReportButton from './GoToReportsButton';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <ReportButton active pathname="/report" />
    </BrowserRouter>
  );
}

export default App;
