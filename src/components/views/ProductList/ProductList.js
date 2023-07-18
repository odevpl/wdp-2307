import React from 'react';
import { useParams } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Brands from '../../features/Brands/Brands';
import Filters from '../Filers/Filters';

import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const ProductList = () => {
  const { categoryId } = useParams();

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>Banner</div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            {categoryId === 'furniture' ? <NewFurniture role='internal' /> : ''}
          </div>
          <div className='col-3'>
            <Filters />
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <Brands />
        </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
