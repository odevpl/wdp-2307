import styles from './ComparedProductsBox.module.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import { getAllCompared } from '../../../redux/comparedReducer';
import { getByIdArray } from '../../../redux/productsRedux';

import ComparedProduct from '../ComparedProduct/ComparedProduct';
import Button from '../Button/Button';

const ComparedProductsBox = () => {
  const productsId = useSelector(state => getAllCompared(state));
  const products = useSelector(state => getByIdArray(state, productsId));

  return (
    <div className={styles.stickyBar}>
      <h4 className={styles.header}>Products to Compare</h4>
      {products.map(product => (
        <ComparedProduct
          key={product.id}
          id={product.id}
          picture={product.picture}
          name={product.name}
          price={product.price}
          isFavorite={product.isFavorite}
        />
      ))}
      <Button variant='small'>Compare</Button>
    </div>
  );
};

export default ComparedProductsBox;
