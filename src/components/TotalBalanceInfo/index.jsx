import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isMobile } from '../../services/mediaQuery';
import Styles from './TotalBalanceInfo.module.css';
import { connect } from 'react-redux';
import * as balanceSelectors from '../../redux/selectors';

const TotalBalance = ({ date = '11.11.2020', balance }) => {
  const Mobile = isMobile(useMediaQuery);

  return (
    <div className={Mobile ? Styles.MobileContainer : Styles.TabletContainer}>
      <div
        className={
          Mobile ? Styles.MobileBalanceOnDay : Styles.TabletBalanceOnDay
        }
      >
        <span>Баланс на </span>
        <span>{date}:</span>
      </div>
      <div className={Mobile ? Styles.MobileBalance : Styles.TabletBalance}>
        <span className={Styles.BalanceCost}>{balance} </span>
        <span className={Styles.BalanceCost}>UAH</span>
      </div>
    </div>
  );
};
const mapStateToProps = store => ({
  // date: balanceSelectors.getData(store),
  balance: balanceSelectors.getBalance(store),
});

TotalBalance.propTypes = {
  date: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(TotalBalance);
