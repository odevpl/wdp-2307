import { API_URL } from '../config';

const loadProducts = () => async dispatch => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const products = await response.json();
    dispatch({ type: 'LOAD_PRODUCTS', payload: products });
  } catch (error) {
    console.error('Error loading products:', error);
  }
};

export { loadProducts };
