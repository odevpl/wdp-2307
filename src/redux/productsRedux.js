/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

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
