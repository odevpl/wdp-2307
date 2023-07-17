import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const ProductSearch = () => {
  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <span>Select a category</span>
        <ul className={styles.dropdown}>
          <li>
            <span>Category 1</span>
            <ul>
              <li>
                <option>Subcategory 1</option>
              </li>
              <li>
                <option>Subcategory 2</option>
              </li>
              <li>
                <option>Subcategory 3</option>
              </li>
            </ul>
          </li>
          <li>
            <span>Category 2</span>
            <ul>
              <li>
                <option>Subcategory 1</option>
              </li>
              <li>
                <option>Subcategory 2</option>
              </li>
              <li>
                <option>Subcategory 3</option>
              </li>
            </ul>
          </li>
        </ul>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <button>
          <Link to='/search'>
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
          </Link>
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
