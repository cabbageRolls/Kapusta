import React from 'react';
import food from './svg/food.svg';
import alcohol from './svg/alcohol.svg';
import book from './svg/book.svg';
import kite from './svg/kite.svg';
import tools from './svg/tools.svg';
import others from './svg/others.svg';
import sport from './svg/sport.svg';
import hart from './svg/hart.svg';
import utilities from './svg/utilities.svg';
import car from './svg/car.svg';
import couch from './svg/couch.svg';
import styles from '../ExpensesListByCategory/ExpensesListByCategory.module.css';
import Item from '../ExpensesListItemByCategory/ExpensesListItemByCategory';

const ExpensesListByCategory = () => {
  return (
    <div className={styles.ListBackground}>
      <ul className={styles.ItemList}>
        <li className={styles.Item}>
          <Item name="Продукты" amount={'5,000.00'} icon={food} />
        </li>
        <li className={styles.Item}>
          <Item name="Алкоголь" amount={'200.00'} icon={alcohol} />
        </li>
        <li className={styles.Item}>
          <Item name="Развлечение" amount={'800.00'} icon={kite} />
        </li>
        <li className={styles.Item}>
          <Item name="Здоровье" amount={'900.00'} icon={hart} />
        </li>
        <li className={styles.Item}>
          <Item name="Транспорт" amount={'2,000.00'} icon={car} />
        </li>
        <li className={styles.Item}>
          <Item name="Все для дома" amount={'1,500.00'} icon={couch} />
        </li>
        <li className={styles.Item}>
          <Item name="Техника" amount={'800.00'} icon={tools} />
        </li>
        <li className={styles.Item}>
          <Item name="Коммуналка, связь" amount={'2,200.00'} icon={utilities} />
        </li>
        <li className={styles.Item}>
          <Item name="Спорт,  хобби" amount={'1,800.00'} icon={sport} />
        </li>
        <li className={styles.Item}>
          <Item name="Образование" amount={'2,400.00'} icon={book} />
        </li>
        <li className={styles.Item}>
          <Item name="Прочее" amount={'3,000.00'} icon={others} />
        </li>
      </ul>
    </div>
  );
};
export default ExpensesListByCategory;
