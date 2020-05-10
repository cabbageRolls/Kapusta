import React from 'react';
import PropTypes from 'prop-types';
import Styles from './MonthSummary.module.css';

const Index = ({ data }) => {
  return (
    <div className={Styles.container}>
      <h4 className={Styles.title}>СВОДКА</h4>
      <ul className={Styles.list}>
        {data.map(item => (
          <li key={item.id} className={Styles.item}>
            <span>{item.mounth}</span>
            <span>{item.cost}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Index.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      mounth: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
    }),
  ),
};

export default Index;
