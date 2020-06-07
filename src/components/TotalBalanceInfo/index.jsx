import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isMobile } from '../../services/mediaQuery';
import Styles from './TotalBalanceInfo.module.css';

const TotalBalance = ({ data = '11.11.2020', cost = '45,000.00' }) => {
  const Mobile = isMobile(useMediaQuery);

  return (
    <div className={Mobile ? Styles.MobileContainer : Styles.TabletContainer}>
      <div
        className={
          Mobile ? Styles.MobileBalanceOnDay : Styles.TabletBalanceOnDay
        }
      >
        <span>Баланс на </span>
        <span>{data}:</span>
      </div>
      <div className={Mobile ? Styles.MobileBalance : Styles.TabletBalance}>
        <span className={Styles.BalanceCost}>{cost} </span>
        <span className={Styles.BalanceCost}>UAH</span>
      </div>
    </div>
  );
};

TotalBalance.propTypes = {
  data: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
};

export default TotalBalance;
