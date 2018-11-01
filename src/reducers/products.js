const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.product];
    case "REMOVE_PRODUCT":
      return state.filter(({ id }) => id !== action.id);
    case "SET_PRODUCTS":
      return action.products;
    case "EDIT_PRODUCTS":
      return state.map(products => {
        if (products.id === action.id) {
          return {
            ...products,
            ...action.updates
          };
        } else {
          return products;
        }
      });
    default:
      return state;
  }
};
