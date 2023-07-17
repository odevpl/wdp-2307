import React from 'react';
import styles from './Filters.module.scss';
import FilterByCategory from '../../features/FilterByCategory/FilterByCategory';
import FilterByPrice from '../../features/FilterByPrice/FilterByPrice';

const Filters = () => {
  return (
    <div className={styles.roots}>
      <FilterByCategory />
      <FilterByPrice />
    </div>
  );
};

export default Filters;
