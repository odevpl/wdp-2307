import React from 'react';
import styles from './Filters.module.scss';
import FilterByCategory from '../../features/FilterByCategory/FilterByCategory';
import FilterBySize from '../../features/FilterBySize/FilterBySize';

const Filters = () => {
  return (
    <div className={styles.roots}>
      <FilterByCategory />
      <FilterBySize />
    </div>
  );
};

export default Filters;
