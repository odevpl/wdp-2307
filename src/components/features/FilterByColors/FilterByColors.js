import styles from '../FilterByColors/FilterByColors.module.scss';
import React from 'react';
import clsx from 'clsx';

const FilterByColors = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>FILTER BY COLOR</div>
      <div>
        <div className={styles.colors}>
          <button className={clsx(styles.colorBox, styles.active)}>
            <div className={styles.squareRed}></div>
            <div className={styles.color}>Red</div>
          </button>
          <button className={styles.colorBox}>
            <div className={styles.squareBlack}></div>
            <div className={styles.color}>Black</div>
          </button>
          <button className={styles.colorBox}>
            <div className={styles.squareYellow}></div>
            <div className={styles.color}>Yellow</div>
          </button>
          <button className={styles.colorBox}>
            <div className={styles.squareBlue}></div>
            <div className={styles.color}>Blue</div>
          </button>
          <button className={styles.colorBox}>
            <div className={styles.squarePink}></div>
            <div className={styles.color}>Pink</div>
          </button>
          <button className={styles.colorBox}>
            <div className={styles.squareGreen}></div>
            <div className={styles.color}>Green</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterByColors;
