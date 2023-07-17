import React from 'react';
import styles from './FilterBySize.module.scss';
import clsx from 'clsx';

const FilterBySize = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>FILTER BY SIZE</div>
      <div>
        <button className={styles.categories}>
          <div className={clsx(styles.categoryBox, styles.active)}>
            <div className={styles.categorBoxTwo}>
              <input className='checkbox' type='checkbox' checked='checked' />
              <div className={styles.category}> S</div>
            </div>
            <div className={styles.number}>3</div>
          </div>
        </button>
        <button className={styles.categories}>
          <div className={styles.categoryBox}>
            <div className={styles.categorBoxTwo}>
              <input type='checkbox' />
              <div className={styles.category}> M</div>
            </div>
            <div className={styles.number}>4</div>
          </div>
        </button>
        <button className={styles.categories}>
          <div className={styles.categoryBox}>
            <div className={styles.categorBoxTwo}>
              <input type='checkbox' />
              <div className={styles.category}> L</div>
            </div>
            <div className={styles.number}>5</div>
          </div>
        </button>
        <button className={styles.categories}>
          <div className={styles.categoryBox}>
            <div className={styles.categorBoxTwo}>
              <input type='checkbox' />
              <div className={styles.category}> XL</div>
            </div>
            <div className={styles.number}>5</div>
          </div>
        </button>
        <button className={styles.categories}>
          <div className={styles.categoryBox}>
            <div className={styles.categorBoxTwo}>
              <input type='checkbox' />
              <div className={styles.category}> XXL</div>
            </div>
            <div className={styles.number}>5</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FilterBySize;
