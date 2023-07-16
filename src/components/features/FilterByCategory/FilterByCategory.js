import React from 'react';
import styles from './FilterByCategory.module.scss';

const FilterByCategory = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>FILTER BY CATEGORY</div>
      <div>
        <div className={styles.categories}>
          <div className={styles.categoryBoxGold}>
            <div className={styles.category}>&#62; Furniture</div>
            <div className={styles.number}>3</div>
          </div>
          <div className={styles.categoryBox}>
            <div className={styles.category}>&#62; Sofas</div>
            <div className={styles.number}>4</div>
          </div>
          <div className={styles.categoryBox}>
            <div className={styles.category}>&#62; Chairs</div>
            <div className={styles.number}>5</div>
          </div>
          <div className={styles.categoryBox}>
            <div className={styles.category}>&#62; Tables</div>
            <div className={styles.number}>5</div>
          </div>
          <div className={styles.categoryBox}>
            <div className={styles.category}>&#62; Bedroom</div>
            <div className={styles.number}>5</div>
          </div>
          <div className={styles.categoryBox}>
            <div className={styles.category}>&#62; Kitchen</div>
            <div className={styles.number}>5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterByCategory;
