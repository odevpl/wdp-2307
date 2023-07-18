import React from 'react';
import { shallow } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Router } from 'express';
import ProductList from './ProductList';

describe('ProductList', () => {
  const BrowseWithRouter = () => {
    const history = createMemoryHistory();
    return (
      <Router history={history}>
        <ProductList />
      </Router>
    );
  };

  it('renders without crashing', () => {
    shallow(<BrowseWithRouter />);
  });
});
