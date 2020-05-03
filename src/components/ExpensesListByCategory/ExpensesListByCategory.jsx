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
import styles from '../ExpensesListByCategory/List.module.css';

const ExpensesListByCategory = () => (
  <ul className={styles.item_list}>
    <li className={styles.item}>
      <Item name="Продукты" amount={'5,000.00'} icon={food} />
    </li>
    <li className={styles.item}>
      <Item name="Алкоголь" amount={'200.00'} icon={alcohol} />
    </li>
    <li className={styles.item}>
      <Item name="Развлечение" amount={'800.00'} icon={kite} />
    </li>
    <li className={styles.item}>
      <Item name="Здоровье" amount={'900.00'} icon={hart} />
    </li>
    <li className={styles.item}>
      <Item name="Транспорт" amount={'2,000.00'} icon={car} />
    </li>
    <li className={styles.item}>
      <Item name="Все для дома" amount={'1,500.00'} icon={couch} />
    </li>
    <li className={styles.item}>
      <Item name="Техника" amount={'800.00'} icon={tools} />
    </li>
    <li className={styles.item}>
      <Item name="Коммуналка, связь" amount={'2,200.00'} icon={utilities} />
    </li>
    <li className={styles.item}>
      <Item name="Спорт,  хобби" amount={'1,800.00'} icon={sport} />
    </li>
    <li className={styles.item}>
      <Item name="Образование" amount={'2,400.00'} icon={book} />
    </li>
    <li className={styles.item}>
      <Item name="Прочее" amount={'3,000.00'} icon={others} />
    </li>
  </ul>
);
export default ExpensesListByCategory;
