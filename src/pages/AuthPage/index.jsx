import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { isMobile } from '../../services/mediaQuery';

import Header from '../../components/Header';
import AuthPageModule from '../../components/AuthPageModule';
import Decoration from '../../components/Decoration';
import Background from '../../components/Background';
import Alert from '../../components/Alert';
import { getError, storeIsLogin } from '../../redux/selectors';

import routes from '../../routes';
import { setAlertOnAction, setAlertOffAction } from '../../redux/actions/alert';

const AuthPage = () => {
  const Mobile = isMobile(useMediaQuery);
  const isAuthenticated = useSelector(storeIsLogin);
  const history = useHistory();
  const error = useSelector(getError);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      Mobile
        ? history.replace(routes.SET_BALANCE_PAGE_MOBILE.path)
        : history.replace(routes.EXPENSES.path);
    }
  });
  useEffect(() => {
    if (error?.config.url.includes('register')) {
      dispatch(
        setAlertOnAction({
          type: 'error',
          text: 'Такой пользователь уже существует!',
        }),
      );
    } else if (error?.config.url.includes('login')) {
      dispatch(
        setAlertOnAction({
          type: 'error',
          text: 'Неправильный логин или пароль!',
        }),
      );
    }
  }, [error]);

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
        <Alert />
      </div>
    </>
  );
};

export default AuthPage;
