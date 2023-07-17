import React from 'react';
import styles from './FilterByPrice.module.scss';
import RangeSlider from '../../common/RangeSlider/RangeSlider';

const FilterByPrice = () => {
  return (
    <div className={styles.root}>
      <div className={`mt-3  ${styles.title}`}>FILTER BY PRICE</div>
      <div className={`col mt-3 ${styles.priceFilter}`}>
        <RangeSlider min={0} max={1000} />
      </div>
    </div>
  );
};

export default FilterByPrice;
