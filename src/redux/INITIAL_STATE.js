import { thisDate } from '../services/helpers';
const date = new Date();

const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

const initState = {
  currentCategory: '',
  session: {
    fullName: '',
    email: '',
    token: '',
    isLogin: false,
  },
  transactions: {
    balance: 0,
    income: [],
    costs: [],
  },
  error: {},
  loader: false,
  products: [],
  realCategories: [],
  costs: null,
  // costsData: [],
  dataPicker: {
    month: currentMonth,
    year: currentYear,
  },
  currentDate: thisDate()._d,
  isExpenses: true,
  income: [],
};
export default initState;
