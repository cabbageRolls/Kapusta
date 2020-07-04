import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import { isMobile } from '../../services/mediaQuery';

import Header from '../../components/Header';
import AuthPageModule from '../../components/AuthPageModule';

import Decoration from '../../components/Decoration';
import Background from '../../components/Background';

import * as selectors from '../../redux/selectors';
import routes from '../../routes';

const AuthPage = () => {
  const Mobile = isMobile(useMediaQuery);
  const isAuthenticated = useSelector(selectors.storeIsLogin);
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      Mobile
        ? history.replace(routes.SET_BALANCE_PAGE_MOBILE.path)
        : history.replace(routes.EXPENSES.path);
    }
  });

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
};

const mapStateToProps = state => ({
  isAuthenticated: selectors.storeIsLogin(state),
});

export default connect(mapStateToProps, null)(AuthPage);
