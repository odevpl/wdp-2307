import initialState from './initialState';

const fetchProductData = async () => {
  try {
    const response = await fetch('/public/db/app.json'); // Change the path as needed
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return [];
  }
};

/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getByIdArray = (statePart, idArray) => {
  return statePart.products.filter(product => idArray.includes(product.id));
};

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getProductById = ({ products }, id) => {
  const product = products.find(item => item.id === id);
  if (!product) {
    console.error(`Product with ID "${id}" not found.`);
    // You can return a default value or an empty object here to handle the error gracefully
    return {};
  }
  return product;
};

export const getProductsById = ({ products }, productId) =>
  products.filter(item => item.id === productId);

export const getProductsByCategory = ({ products }, category) =>
  products.filter(item => item.category === category);
/* action creators */

export const toggleFavorite = payload => ({ type: 'TOGGLE_ITEM_FAVORITE', payload });
export const updateProducts = products => ({
  type: 'UPDATE_PRODUCTS',
  payload: products,
});

/* reducer */
export default function reducer(statePart = initialState.products, action = {}) {
  switch (action.type) {
    case 'TOGGLE_ITEM_FAVORITE':
      return statePart.map(item =>
        item.id === action.payload ? { ...item, isFavorite: !item.isFavorite } : item
      );

    case 'LOAD_PRODUCTS':
      return action.payload;

    default:
      return statePart;
  }
}
