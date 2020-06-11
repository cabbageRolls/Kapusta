import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isMobile } from '../../services/mediaQuery';
import Styles from './TotalBalanceInfo.module.css';
import { connect } from 'react-redux';
import * as balanceSelectors from '../../redux/selectors';

const TotalBalance = ({ balance = '45,000.00' }) => {
  const Mobile = isMobile(useMediaQuery);
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  return (
    <div className={Mobile ? Styles.MobileContainer : Styles.TabletContainer}>
      <div
        className={
          Mobile ? Styles.MobileBalanceOnDay : Styles.TabletBalanceOnDay
        }
      >
        <span>Баланс на </span>
        <span>
          {date}.{month}.{year}:
        </span>
      </div>
      <div className={Mobile ? Styles.MobileBalance : Styles.TabletBalance}>
        <span className={Styles.BalanceCost}>{balance} </span>
        <span className={Styles.BalanceCost}>UAH</span>
      </div>
    </div>
  );
};
const mapStateToProps = store => ({
  balance: balanceSelectors.getBalance(store),
});

TotalBalance.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(TotalBalance);
