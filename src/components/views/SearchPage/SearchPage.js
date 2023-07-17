import NewFurniture from '../../features/NewFurniture/NewFurniture';
import styles from '../SearchPage/SearchPage.module.scss';
import React from 'react';

const SearchPage = () => {
  return (
    <div className={styles.SearchPage}>
      <NewFurniture />
    </div>
  );
};

export default SearchPage;
