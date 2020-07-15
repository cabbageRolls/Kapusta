import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ExpensesListItemByCategory.module.css';
import PropTypes from 'prop-types';
import { getCurrentCategory } from '../../redux/selectors';

const ExpensesListItemByCategory = ({ name, amount, icon }) => {
  const currentCategory = useSelector(getCurrentCategory);
  const isActive = currentCategory.toLowerCase() === name.toLowerCase();

  return (
    <div className={styles.Item}>
      <p className={styles.Amount}>{amount}</p>
      <div className={isActive ? styles.activeIconBack : styles.IconBack}>
        <img className={styles.Icon} src={icon} alt={name} />
      </div>
      <p className={styles.Name}>{name}</p>
    </div>
  );
};

ExpensesListItemByCategory.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ExpensesListItemByCategory;
