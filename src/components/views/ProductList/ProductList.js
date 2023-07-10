import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>Banner</div>
      </div>
    </div>

    <div className='container'>
      <div className='row'>
        <div className='col-9'>ProductList</div>
        <div className='col-3'>Filters</div>
      </div>
    </div>

    <div className='container'>
      <div className='row'>
        <div className='col-12'>Brands</div>
      </div>
    </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
