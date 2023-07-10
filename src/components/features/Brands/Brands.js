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
              <img
                className={styles.logo}
                alt='Logo'
                src={'/images/logos/logo-5.jpg'}
              ></img>
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
            <button>&#62;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
