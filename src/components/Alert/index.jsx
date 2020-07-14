import React from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { setAlertOffAction } from '../../redux/actions/alert';
import styles from './Alert.module.css';

function AlertComponent(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Alert = ({ alert, setAlertOff }) => {
  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={6000}
      onClose={setAlertOff}
      className={styles.snackbar}
    >
      <AlertComponent onClose={setAlertOff} severity={alert.type}>
        {alert.text}
      </AlertComponent>
    </Snackbar>
  );
};

Alert.propTypes = {
  alert: T.shape({
    type: T.string.isRequired,
    text: T.string.isRequired,
    open: T.bool.isRequired,
  }),
  setAlertOff: T.func.isRequired,
};

const mstp = store => ({
  alert: store.alert,
});

const mdtp = dispatch => ({
  setAlertOff: () => dispatch(setAlertOffAction()),
});

export default connect(mstp, mdtp)(Alert);
