const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

const initState = {
  public: {},
  session: {
    email: '',
    password: '',
    name: {
      fullName: '',
      firstName: '',
      lastName: '',
    },
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
  costs: null,
  dataPicker: {
    month: currentMonth,
    year: currentYear,
  },
};
export default initState;
