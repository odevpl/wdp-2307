import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductList.module.scss';
import Brands from '../../features/Brands/Brands';
import Filters from '../Filters/Filters';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Baner from '../../common/Baner/Baner';

const ProductList = () => {
  const { categoryId } = useParams();

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.root}>
          <div className='row'>
            <div className='col-12'>
              <Baner />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-9'>
              {categoryId !== 'home' && categoryId !== 'blog' && (
                <NewFurniture
                  role='internal'
                  activeCategory={
                    categoryId === 'furniture' || categoryId === 'bedroom'
                      ? 'bed'
                      : categoryId
                  }
                  key={categoryId}
                />
              )}
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
    </div>
  );
};

export default ProductList;
