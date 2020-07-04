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
  categories: [],
  realCategories: [],
  costs: null,
  // costsData: [],
  dataPicker: {
    month: currentMonth,
    year: currentYear,
  },
  isExpenses: true,
};
export default initState;
