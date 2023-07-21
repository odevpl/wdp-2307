import React from 'react';
// import PropTypes from 'prop-types';
// import ProductData from '../../features/ProductData/ProductData';
// import ProductReview from '../../common/ProductReview/ProductReview';

import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Baner from '../../common/Baner/Baner';

const ProductPage = () => {
  return (
    <div className='container'>
      <Baner />
      <NewFurniture role='product' />
      {/* <ProductReview /> */}
    </div>
  );
};
// ProductPage.propTypes = {};

export default ProductPage;
