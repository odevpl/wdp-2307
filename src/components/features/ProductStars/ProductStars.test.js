import React from 'react';
import { shallow } from 'enzyme';
import ProductStars from './ProductStars';

describe('Component ProductStars', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductStars />);
    expect(component).toBeTruthy();
  });
});
