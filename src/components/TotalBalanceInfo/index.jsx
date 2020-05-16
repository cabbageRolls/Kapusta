import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';
import Styles from './TotalBalanceInfo.module.css';

const TotalBalance = ({ data = '11.11.2020', cost = '45,000.00' }) => {
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);
  return (
    <div
      className={
        Mobile
          ? Styles.Mobile_container
          : Tablet
          ? Styles.Tablet_container
          : Styles.Desktop_container
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

TotalBalance.propTypes = {
  data: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
};

export default TotalBalance;
