export const getBalance = store => {
  return store.transactions.balance;
};

export const getError = store => {
  return store.error;
};

export const isAuthenticated = state => state.session.authenticated;

export const loader = store => {
  return store.loader;
};
export const getCategories = store => {
  return store.categories;
};
export const getCosts = store => {
  return store.transactions.costs;
};
