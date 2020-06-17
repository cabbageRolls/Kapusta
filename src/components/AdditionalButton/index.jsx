import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setExpenses from '../../redux/actions/isExpenses';
import Styles from './AdditionalButton.module.css';
import BTN from './BTN';
import MyLink from './MyLink';
import { Mobile, Default } from '../../services/mediaQuery';
import routes from '../../routes';

const AdditionalButton = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Mobile>
        <div className={Styles.Mobile_Container}>
          <BTN title="расход" />
          <BTN title="доход" />
        </div>
      </Mobile>
      <Default>
        <div className={Styles.Tablet_Container}>
          <MyLink
            to={routes.EXPENSES.path}
            title="расход"
            onClick={()=>dispatch(setExpenses(true))}
          />
          <MyLink
            to={routes.INCOME.path}
            title="доход"
            onClick={()=>dispatch(setExpenses(false))}
          />
        </div>
      </Default>
    </>
  );
};

export default AdditionalButton;
