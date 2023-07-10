import React from 'react';
import { useSelector } from 'react-redux';

import ProductBox from '../../common/ProductBox/ProductBox';
import { getPromoted } from '../../../redux/promotedRedux';
import { getProductsById } from '../../../redux/productsRedux';
import styles from './Promoted.module.scss';

const Promoted = () => {
  const promotedData = useSelector(state => getPromoted(state));
  const promotedProducts = useSelector(state =>
    getProductsById(state, promotedData.productsId)
  );

  const getReturnValues = countDown => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };

  const [days, hours, minutes, seconds] = getReturnValues(promotedData.time);

  const dots = [];
  for (let i = 0; i < promotedProducts.length; i++) {
    dots.push(
      <li>
        <a>page {i}</a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className={styles.title}>
              <p>Hot deals</p>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
            <div>
              <ProductBox {...promotedProducts[0]} />
            </div>
            <div className={styles.countdown}>
              <ul>
                <li>
                  <span>{days}</span>
                  <br />
                  days
                </li>
                <li>
                  <span>{hours}</span>
                  <br />
                  hrs
                </li>
                <li>
                  <span>{minutes}</span>
                  <br />
                  mins
                </li>
                <li>
                  <span>{seconds}</span>
                  <br />
                  secs
                </li>
              </ul>
            </div>
          </div>
          <div className='col-8'>
            <div className={styles.img}>
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
  );
};
export default Promoted;
