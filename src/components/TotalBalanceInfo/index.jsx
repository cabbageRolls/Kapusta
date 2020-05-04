/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Styles from './TotalBalanceInfo.module.css';

const index = () => {
  //   const isOther = useMediaQuery({
  //     query: '(min-width: 480px)',
  //   });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  return (
    <div
      className={
        isMobile ? Styles.container : [Styles.container, Styles.row].join(' ')
      }
    >
      <div>
        <span className={Styles.balanceOnDay}>Баланс на </span>
        <span className={Styles.balanceOnDay}>21.11.2019:</span>
      </div>
      <div>
        <span className={Styles.balanceCost}>45000.00 </span>
        <span className={Styles.balanceCost}>UAH</span>
      </div>
    </div>
  );
};

export default index;
