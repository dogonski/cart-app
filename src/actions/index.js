export const removeProduct = (id) => ({
  type: 'REMOVE_PRODUCT',
  payload: id,
});

export const addProduct = (id, productContent) => ({
  type: 'ADD_PRODUCT',
  payload: {
    id: { id },
    item: {
      ...productContent,
    },
  },
});
