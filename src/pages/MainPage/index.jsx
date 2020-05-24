import React from 'react';

import SetBalanceForm from '../../components/SetBalanceForm';
import GoToReportsButton from '../../components/GoBackButton/GoBackButton';
import AdditionalButton from '../../components/AdditionalButton/AdditionalButton';

const MainPage = () => (
  <div>
    <SetBalanceForm />
    <GoToReportsButton />
    <AdditionalButton />
  </div>
);

export default MainPage;
