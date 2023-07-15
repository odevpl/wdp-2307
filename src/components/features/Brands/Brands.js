import React from 'react';
import styles from './Brands.module.scss';

const Brands = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.brands}>
          <div className={styles.row}>
            <button>&#60;</button>
            <div className={styles.logos}>
              <div className={styles.logoBox}>
                <img
                  className={styles.logo}
                  alt='Logo'
                  src={'/images/logos/logo-1.jpg'}
                ></img>
                <img
                  className={styles.logo}
                  alt='Logo'
                  src={'/images/logos/logo-2.jpg'}
                ></img>
              </div>
              <div className={`d-none d-md-none d-lg-block ${styles.logoBox}`}>
                <img
                  className={styles.logo}
                  alt='Logo'
                  src={'/images/logos/logo-3.jpg'}
                ></img>
                <img
                  className={styles.logo}
                  alt='Logo'
                  src={'/images/logos/logo-4.jpg'}
                ></img>
              </div>
              <div
                className={`d-none d-sm-block d-sm-none d-md-block ${styles.logoBox}`}
              >
                <img
                  className={styles.logo}
                  alt='Logo'
                  src={'/images/logos/logo-6.jpg'}
                ></img>
                <img
                  className={styles.logo}
                  alt='Logo'
                  src={'/images/logos/logo-7.jpg'}
                ></img>
              </div>
            </div>
            <button>&#62;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
