const date = new Date();

const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

const initState = {
  realCategories: [],
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
  categories: [],
  realCategories: [],
  costs: null,
  dataPicker: {
    month: currentMonth,
    year: currentYear,
  },
};
export default initState;
