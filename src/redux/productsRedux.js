/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getByIdArray = (statePart, idArray) => {
  return statePart.products.filter(product => idArray.includes(product.id));
};

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);
export const getProductById = ({ products }, id) =>
  products.find(item => item.id === id);
export const getProductsById = ({ products }, productId) =>
  products.filter(item => item.id === productId);
export const getProductsByCategory = ({ products }, category) =>
  products.filter(item => item.category === category);
/* action creators */

export const toggleFavorite = payload => ({ type: 'TOGGLE_ITEM_FAVORITE', payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case 'TOGGLE_ITEM_FAVORITE':
      return statePart.map(item =>
        item.id === action.payload ? { ...item, isFavorite: !item.isFavorite } : item
      );
    default:
      return statePart;
  }
}
