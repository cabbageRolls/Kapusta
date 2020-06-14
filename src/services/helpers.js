import axios from 'axios';

export const setAuthToken = token => {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const TwoDigits = value => {
  const result = +value >= 10 ? +value : `0${+value}`;
  return result;
};

export const dataByDate = (data, { year, month }) => {
  return data.filter(item => item.date.includes(`${year}-${TwoDigits(month)}`));
};

const textCategories = [
  {
    id: 'dT0T8Kjr',
    name: 'Продукты',
    text: 'Продукты',
    icon: './images/svg/food.svg',
  },
  {
    id: 'iI5MgGk3',
    name: 'Алкоголь',
    text: 'Алкоголь',
    icon: './images/svg/alcohol.svg',
  },
  {
    id: 'ZYde2bXn',
    name: 'Развлечение',
    text: 'Развлечение',
    icon: './images/svg/kite.svg',
  },
  {
    id: 'OvRz2M4u',
    name: 'Здоровье',
    text: 'Здоровье',
    icon: './images/svg/hart.svg',
  },
  {
    id: 'kHsVMa6X',
    name: 'Транспорт',
    text: 'Транспорт',
    icon: './images/svg/car.svg',
  },
  {
    id: 'CHoRd7LK',
    name: 'Все для дома',
    text: 'Все для дома',
    icon: './images/svg/couch.svg',
  },
  {
    id: 'ssE3eTug',
    name: 'Техника',
    text: 'Техника',
    icon: './images/svg/tools.svg',
  },
  {
    id: 'Lm1ByxJJ',
    name: 'Коммуналка,Связь',
    text: 'Коммуналка, связь',
    icon: './images/svg/utilities.svg',
  },
  {
    id: 'H3uA9jhf',
    name: 'Хобби',
    text: 'Спорт,  хобби',
    icon: './images/svg/sport.svg',
  },
  {
    id: '1uMBiflR',
    name: 'Образование',
    text: 'Образование',
    icon: './images/svg/book.svg',
  },
  {
    id: '96A4opSK',
    name: 'Прочее',
    text: 'Прочее',
    icon: './images/svg/others.svg',
  },
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
