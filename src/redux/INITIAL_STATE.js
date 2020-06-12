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
};
export default initState;
