import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ProductBoxPromoted from '../../common/ProductBoxPromoted/ProductBoxPromoted';
import { getPromoted } from '../../../redux/promotedRedux';
import { getByIdArray } from '../../../redux/productsRedux';
import styles from './Promoted.module.scss';

const Promoted = () => {
  const promotedData = useSelector(state => getPromoted(state));
  const promotedProducts = useSelector(state =>
    getByIdArray(state, promotedData.productsId)
  );

  const [activeItem, setActiveItem] = useState(0);

  const handleActiveItemChange = newActiveItem => {
    setActiveItem(newActiveItem);
  };

  const dots = [];
  for (let i = 0; i < promotedProducts.length; i++) {
    dots.push(
      <li key={i}>
        <a>page {i}</a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.positionPromoted}>
          <div className='row'>
            <div className='col-lg-4'>
              <div className={styles.title}>
                <p>Hot deals</p>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
              <div>
                <ProductBoxPromoted
                  key={promotedProducts[0].id}
                  {...promotedProducts[0]}
                />
              </div>
            </div>
            <div className='col-lg-8'>
              <div className={styles.img}>
                <img
                  className={styles.imageOne}
                  alt='Furniture Sale'
                  src={'/images/sofas/sofa-2.jpg'}
                ></img>
                <div className={styles.banner}>
                  <h2>{promotedData.bannerTitle}</h2>
                  <h3>{promotedData.bannerSubtitle}</h3>
                </div>
              </div>
              <div className={styles.nav}>
                <a>&#10094;</a>
                <a>&#10095;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Promoted;
