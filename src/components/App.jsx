/** @format */

import React from 'react';
import '../CSS/normilize.css';
import '../CSS/index.css';

import MonthSummary from './MonthSummary/Index';

function App() {
  return (
    <div>
      <MonthSummary
        data={[
          { mounth: 'Jun', cost: 300, id: 'Index1' },
          { mounth: 'Feb', cost: 400, id: 'Index2' },
          { mounth: 'Ojest', cost: 100, id: 'Index3' },
          { mounth: 'Jun', cost: 300, id: '4' },
          { mounth: 'Feb', cost: 400, id: 'Index25' },
          { mounth: 'Ojest', cost: 100, id: 'Index63' },
        ]}
      />
    </div>
  );
}

export default App;
