import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import AuthPageModule from '../../components/AuthPageModule';

import Decoration from '../../components/Decoration';
import Background from '../../components/Background';

import * as selectors from '../../redux/selectors';

class AuthPage extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.replace('/dashboard/expenses');
    }
  }

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.replace('/dashboard/expenses');
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
  isAuthenticated: selectors.storeIsLogin(state),
});

export default connect(mapStateToProps, null)(AuthPage);
