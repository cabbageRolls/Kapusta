import React from 'react';
import Styles from './AdditionalButton.module.css';
import BTN from './BTN';
import MyLink from './MyLink';
import { Mobile, Default } from '../../services/mediaQuery';

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
          <MyLink to="/" title="расход" />
          <MyLink to="/Add" title="доход" />
        </div>
      </Default>
    </>
  );
};

export default AdditionalButton;
