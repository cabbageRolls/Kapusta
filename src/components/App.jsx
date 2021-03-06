import React, { Suspense, useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import routes from '../routes';
import getTransactions from '../redux/operations/transactions';
import getCategories from '../redux/operations/realCategories';
import getProducts from '../redux/operations/products';
import { storeIsLogin, storeToken, getError } from '../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import { isMobile } from '../services/mediaQuery';
import { setAuthToken } from '../services/helpers';
import Loader from './Loader';
import '../CSS/normilize.css';
import '../CSS/index.css';

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector(storeIsLogin);
  const token = useSelector(storeToken);
  const Mobile = isMobile(useMediaQuery);
  const [isAuth, setIsAuth] = useState(false);
  const [headers, setHeaders] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      history.replace(routes.AUTH_PAGE.path);
      return;
    }

    if (!token.length) return;
    if (!isAuth) setIsAuth(true);
    if (!headers) {
      setAuthToken(token);
      setHeaders(true);
    }

    if (isAuth && headers) {
      dispatch(getTransactions());
      dispatch(getCategories());
      dispatch(getProducts());
    }
  }, [dispatch, history, isLogin, token, headers, isAuth]);

  return (
    <>
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route exact path="/">
            {Mobile ? (
              <Redirect to={routes.SET_BALANCE_PAGE_MOBILE.path} />
            ) : (
              <Redirect to={routes.EXPENSES.path} />
            )}
          </Route>
          <Route
            path={routes.MAIN_PAGE.path}
            component={routes.MAIN_PAGE.component}
          />
          <Route
            path={routes.AUTH_PAGE.path}
            component={routes.AUTH_PAGE.component}
          />
          <Route
            path={routes.REPORT_PAGE.path}
            component={routes.REPORT_PAGE.component}
          />
          {Mobile && (
            <>
              <Route
                path={routes.SET_BALANCE_PAGE_MOBILE.path}
                component={routes.SET_BALANCE_PAGE_MOBILE.component}
              />
              <Route
                path={routes.SET_EXPENSES_PAGE_MOBILE.path}
                component={routes.SET_EXPENSES_PAGE_MOBILE.component}
              />
              <Route
                path={routes.SET_INCOME_PAGE_MOBILE.path}
                component={routes.SET_INCOME_PAGE_MOBILE.component}
              />
            </>
          )}
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
