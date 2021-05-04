export const removeProduct = (id) => ({
  type: 'REMOVE_PRODUCT',
  payload: id,
});

export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  payload: product,
});
