import React from 'react';
import '../CSS/normilize.css';
import '../CSS/index.css';
import Logo from '../components/logo';
import Loader from '../components/loader';
import Chart from '../components/ExpensesChartBySpecificCategory';

function App() {
  return (
    <div>
      <Loader />
      <Chart
        data={[
          { name: 'chery', cost: '2500' },
          { name: 'bacon', cost: '4500' },
          { name: 'tomato', cost: '500' },
          { name: 'chery', cost: '5500' },
          { name: 'bacon', cost: '4100' },
          { name: 'tomato', cost: '300' },
          { name: 'chery', cost: '2000' },
          { name: 'bacon', cost: '1500' },
          { name: 'tomato', cost: '500' },
          { name: 'tomato', cost: '200' },
        ]}
      />
      <Logo />
    </div>
  );
}

export default App;
