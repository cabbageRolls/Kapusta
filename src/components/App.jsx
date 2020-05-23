import React from 'react';
import '../CSS/normilize.css';
import '../CSS/index.css';

import { BrowserRouter } from 'react-router-dom';
import Router from '../router';
import GoBackButton from './GoBackButton/GoBackButton';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
