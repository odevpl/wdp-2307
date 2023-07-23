/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const DELETE_PRODUCT = createActionName('DELETE_PRODUCT');
const UPDATE_PRODUCT_QUANTITY = createActionName('UPDATE_PRODUCT_QUANTITY');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const deleteProduct = payload => ({ payload, type: DELETE_PRODUCT });
export const updateProductQuantity = payload => ({
  payload,
  type: UPDATE_PRODUCT_QUANTITY,
});

/* reducer */
const initialCart = {
  products: [],
};

export default function reducer(statePart = initialCart, action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    case DELETE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(product => product.id !== action.payload),
      };
    }
    case UPDATE_PRODUCT_QUANTITY: {
      const { id, quantity } = action.payload;
      return {
        ...statePart,
        products: statePart.products.map(product =>
          product.id === id ? { ...product, quantity } : product
        ),
      };
    }
    default:
      return statePart;
  }
}
