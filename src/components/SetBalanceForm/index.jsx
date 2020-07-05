import { connect } from 'react-redux';
import postBalance from '../../redux/operations/balance';
import * as selectors from '../../redux/selectors';
import SetBalanceForm from './SetBalanceForm';

const MSTP = store => ({
  balance: selectors.getBalance(store),
  error: selectors.getError(store),
});

const MDTP = {
  sendBalance: postBalance,
};
export default connect(MSTP, MDTP)(SetBalanceForm);
