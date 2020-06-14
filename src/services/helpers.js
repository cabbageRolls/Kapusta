export const TwoDigits = value => {
  const result = +value >= 10 ? +value : `0${+value}`;
  return result;
};

export const dataByDate = (data, { year, month }) => {
  return data.filter(item => item.date.includes(`${year}-${TwoDigits(month)}`));
};
const textCategories = [
  {
    id: '01',
    name: 'Продукты',
    text: 'Продукты',
    icon: './images/svg/food.svg',
  },
  {
    id: '02',
    name: 'Алкоголь',
    text: 'Алкоголь',
    icon: './images/svg/alcohol.svg',
  },
  {
    id: '03',
    name: 'Развлечение',
    text: 'Развлечение',
    icon: './images/svg/kite.svg',
  },
  {
    id: '04',
    name: 'Здоровье',
    text: 'Здоровье',
    icon: './images/svg/hart.svg',
  },
  {
    id: '05',
    name: 'Транспорт',
    text: 'Транспорт',
    icon: './images/svg/car.svg',
  },
  {
    id: '06',
    name: 'Все для дома',
    text: 'Все для дома',
    icon: './images/svg/couch.svg',
  },
  {
    id: '07',
    name: 'Техника',
    text: 'Техника',
    icon: './images/svg/tools.svg',
  },
  {
    id: '08',
    name: 'Коммуналка,Связь',
    text: 'Коммуналка, связь',
    icon: './images/svg/utilities.svg',
  },
  {
    id: '09',
    name: 'Хобби',
    text: 'Спорт,  хобби',
    icon: './images/svg/sport.svg',
  },
  {
    id: '10',
    name: 'Образование',
    text: 'Образование',
    icon: './images/svg/book.svg',
  },
  { id: '11', name: 'Прочее', text: 'Прочее', icon: './images/svg/others.svg' },
];
export const CostByPeriodAndCategories = (period, costs, categories) => {
  const sum = data =>
    data.reduce((a, { amount }) => {
      return a + amount;
    }, 0);
  const result = categories.reduce((acc, category) => {
    const allCosts = dataByDate(costs, period).filter(cost => {
      if (cost.product.category.name === category.name) {
        return true;
      }
      return false;
    });
    const amount = allCosts.length > 0 ? sum(allCosts) : 0;
    acc.push({
      name: category.name,
      allCosts,
      amount,
    });
    return acc;
  }, []);
  const newResult = textCategories.map(item => ({
    ...item,
    ...result.filter(i => i.name === item.name)[0],
  }));
  return newResult;
};
