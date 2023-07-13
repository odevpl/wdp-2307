import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NewFurniture from './NewFurniture';

describe('Component NewFurniture', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should render without crashing', () => {
    const categories = [
      { id: 'bed', name: 'Bed' },
      { id: 'chair', name: 'Chair' },
      { id: 'sofa', name: 'Sofa' },
    ];

    const products = [
      {
        id: 'aenean-ru-bristique-1',
        name: 'Aenean Ru Bristique 1',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        picture: 'images/beds/bed-1.jpg',
      },
      {
        id: 'aenean-ru-bristique-2',
        name: 'Aenean Ru Bristique 2',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        picture: 'images/beds/bed-2.jpg',
      },
      {
        id: 'aenean-ru-bristique-3',
        name: 'Aenean Ru Bristique 3',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        picture: 'images/beds/bed-3.jpg',
      },
    ];

    const component = shallow(
      <Provider store={store}>
        <NewFurniture categories={categories} products={products} />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
