import React from 'react';
import '../CSS/normilize.css';
import '../CSS/index.css';
import { BrowserRouter } from 'react-router-dom';
import Router from '../router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
