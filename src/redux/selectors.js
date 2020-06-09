export const getBalance = store => {
  return store.transactions.balance;
};
export const getError = store => {
  return store.error;
};

export const isAuthenticated = state => state.session.authenticated;
export const getCategories = store => {
  return store.categories;
};
