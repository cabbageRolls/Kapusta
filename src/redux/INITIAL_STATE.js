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
  error: null,
  loader: false,
  products: [],
  realCategories: [],
  costs: null,
  dataPicker: {
    month: currentMonth,
    year: currentYear,
  },
  isExpenses: true,
  income: [],
  alert: { type: 'success', text: 'Message', open: false },
};

export default initState;
