import React from 'react';
import Styles from './AdditionalButton.module.css';
import BTN from './BTN';
import MyLink from './MyLink';
import { Mobile, Default } from '../../services/mediaQuery';
import routes from '../../routes'

const AdditionalButton = () => {
  return (
    <>
      <Mobile>
        <div className={Styles.Mobile_Container}>
          <BTN title="расход" />
          <BTN title="доход" />
        </div>
      </Mobile>
      <Default>
        <div className={Styles.Tablet_Container}>
          <MyLink to={routes.EXPENSES.path} title="расход" />
          <MyLink to={routes.INCOME.path} title="доход" />
        </div>
      </Default>
    </>
  );
};

export default AdditionalButton;
