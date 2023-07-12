/* selectors */
export const getAllCompared = ({ compared }) => compared.products;
export const getCountCompared = ({ compared }) => compared.products.length;

/* action name creator */
const reducerName = 'compared';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const DELETE_PRODUCT = createActionName('DELETE_PRODUCT');

/* action creators */
export const addComparedProduct = payload => ({ payload, type: ADD_PRODUCT });
export const deleteComparedProduct = payload => ({ payload, type: DELETE_PRODUCT });

/* reducer */
export default function reducer(statePart = [], action = {}) {
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
        products: [...statePart.products.filter(product => product !== action.payload)],
      };
    }
    default:
      return statePart;
  }
}
