import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as selectors from '../../redux/selectors';

import Header from '../../components/Header';
import AuthPageModule from '../../components/AuthPageModule';

class AuthPage extends Component {
  state = {};

  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { authenticated, history } = this.props;

    if (authenticated) {
      history.replace('/expensespage');
    }
  }

  componentDidUpdate(prevProps) {
    const { authenticated, history } = this.props;

    if (authenticated) {
      history.replace('/expensespage');
    }
  }

  render() {
    return (
      <>
        <Header />
        <AuthPageModule />
      </>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: selectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AuthPage);
