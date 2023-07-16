import React from 'react';
import styles from './Filters.module.scss';
import FilterByCategory from '../../features/FilterByCategory/FilterByCategory';

const Filters = () => {
  return (
    <div className={styles.roots}>
      <FilterByCategory />
    </div>
  );
};

export default Filters;
