import React from 'react';
import styles from './FilterByCategory.module.scss';
import clsx from 'clsx';

const FilterByCategory = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>FILTER BY CATEGORY</div>
      <div>
        <div className={styles.categories}>
          <button className={clsx(styles.categoryBox, styles.active)}>
            <div className={styles.category}>&#62; Furniture</div>
            <div className={styles.number}>3</div>
          </button>
          <button className={clsx(styles.categoryBox)}>
            <div className={styles.category}>&#62; Sofas</div>
            <div className={styles.number}>4</div>
          </button>
          <button className={clsx(styles.categoryBox)}>
            <div className={styles.category}>&#62; Chairs</div>
            <div className={styles.number}>5</div>
          </button>
          <button className={clsx(styles.categoryBox)}>
            <div className={styles.category}>&#62; Tables</div>
            <div className={styles.number}>5</div>
          </button>
          <button className={clsx(styles.categoryBox)}>
            <div className={styles.category}>&#62; Bedroom</div>
            <div className={styles.number}>5</div>
          </button>
          <button className={clsx(styles.categoryBox)}>
            <div className={styles.category}>&#62; Kitchen</div>
            <div className={styles.number}>5</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterByCategory;
