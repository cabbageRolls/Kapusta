const date = new Date();

const currentMonth = date.getMonth() + 1;
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
  products: [],
  costs: null,
  dataPicker: {
    month: currentMonth,
    year: currentYear,
  },
};
export default initState;
