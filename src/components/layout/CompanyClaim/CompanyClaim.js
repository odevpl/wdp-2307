import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './CompanyClaim.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CompanyClaim = () => {
  const cartProducts = useSelector(state => state.cart.products);

  const cartCount = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='rowBanner row align-items-center'>
          <div className={`col-12 col-sm-4 col text-left ${styles.phoneNumber}`}>
            <p>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560
              - 222
            </p>
          </div>
          <div className='col-6 col-sm-4 col text-center'>
            <Link to='/'>
              <img src='/images/logo.png' alt='Bazar' />
            </Link>
          </div>
          <div className={`col-6 col-sm-4 col text-right ${styles.cart}`}>
            <Link to='/cart' className={styles.cartBox}>
              <div className={styles.cartIcon}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
              </div>
              <div className={styles.cartCounter}>{cartCount}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// CompanyClaim.propTypes = {};

export default CompanyClaim;
