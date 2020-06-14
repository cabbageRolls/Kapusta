import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as selectors from '../../redux/selectors';

import Header from '../../components/Header';
import AuthPageModule from '../../components/AuthPageModule';

import Decoration from '../../components/Decoration';
import Background from '../../components/Background';

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
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              zIndex: '-1',
              top: 56,
              width: '100%',
            }}
          >
            <Decoration />
          </div>
          <div
            style={{
              position: 'absolute',
              zIndex: '-2',
              top: 56,
              width: '100%',
            }}
          >
            <Background />
          </div>
          <Header />
          <AuthPageModule />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: selectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AuthPage);
