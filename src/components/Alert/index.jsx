import React from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { setAlertOffAction, setAlertOnAction } from '../../redux/actions/alert';

function AlertComponent(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alert = ({ alert, setAlertOff, setAlertOn }) => {
  return (
    <Snackbar open={alert.open} autoHideDuration={6000} onClose={setAlertOff}>
      <AlertComponent onClose={setAlertOff} severity={alert.type}>
        {alert.message}
      </AlertComponent>
    </Snackbar>
  );
};

Alert.defaultProps = {
  alert: {
    type: 'success',
    message: 'message',
    open: false,
  },
};

Alert.propTypes = {
  alert: {
    type: T.string.isRequired,
    message: T.string.isRequired,
    open: T.bool.isRequired,
  },
  setAlertOff: T.func.isRequired,
  setAlertOn: T.func.isRequired,
};

const STP = state => state;

const ATP = {
  setAlertOn: setAlertOnAction,
  setAlertOff: setAlertOffAction,
};

export default connect(STP, ATP)(Alert);
