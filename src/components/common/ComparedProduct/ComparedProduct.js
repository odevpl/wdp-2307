import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComparedProduct.module.scss';

import { deleteComparedProduct } from '../../../redux/comparedReducer';
import { useDispatch } from 'react-redux';

const ComparedProduct = ({ id, picture, name, price, isFavorite }) => {
  const dispatch = useDispatch();

  const removeProduct = evt => {
    evt.preventDefault();
    dispatch(deleteComparedProduct(id));
  };

  return (
    <div className={styles.comparedProduct}>
      <img className={styles.comparedImage} src={picture} alt={name} />
      <button
        onClick={removeProduct}
        className={styles.closeBtn}
        type='button'
      ></button>
      <h6 className={styles.comparedName}>{name}</h6>
      <h6 className={styles.comparedPrice}>Price: ${price}</h6>
      <h6 className={styles.comparedFavorite}>
        {isFavorite ? 'Favorite ☆' : 'Not Favorite'}
      </h6>
    </div>
  );
};

ComparedProduct.propTypes = {
  id: PropTypes.string,
  picture: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  isFavorite: PropTypes.bool,
};

export default ComparedProduct;
