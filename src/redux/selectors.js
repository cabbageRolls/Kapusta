export const getBalance = store => {
  return store.transactions.balance;
};
export const getError = store => {
  return store.error;
};
export const getCategories = store => {
  return store.categories;
};
export const getCosts = store => {
  return store.transactions.costs;
};
