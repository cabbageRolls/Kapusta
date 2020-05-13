/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import Styles from './TotalBalanceInfo.module.css';

const index = ({ data, cost }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  return (
    <div
      className={
        isMobile ? Styles.container : [Styles.container, Styles.row].join(' ')
      }
    >
      <div>
        <span className={Styles.balanceOnDay}>Баланс на </span>
        <span className={Styles.balanceOnDay}>{data}:</span>
      </div>
      <div className={Styles.balance}>
        <span className={Styles.balanceCost}>{cost} </span>
        <span className={Styles.balanceCost}>UAH</span>
      </div>
    </div>
  );
};

index.propTypes = {
  data: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
};

export default index;
