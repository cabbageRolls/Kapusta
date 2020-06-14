const date = new Date();

const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

const initState = {
  realCategories: [],
  currentCategory: '',
  public: {},
  session: {
    user: {
      name: {
        fullName: '',
        firstName: '',
        lastName: '',
      },
      email: '',
    },
    authenticated: false,
    token: null,
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
