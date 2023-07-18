import React from 'react';
import { useParams } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Brands from '../../features/Brands/Brands';
import Filters from '../Filers/Filters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const ProductList = () => {
  const { categoryId } = useParams();

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.root}>
          <div className={styles.ProjectNew}>
            <div className={styles.upSection}>
              <div className='row'>
                <div className='col-12'>
                  <div className={styles.upText}>
                    <p className={styles.styleBedroom}>BEDROOM</p>
                    <p className={styles.styleFur}>FURNITURE</p>
                  </div>
                </div>
                <div className='col-12'>
                  <div className={styles.downText}>
                    <p className={styles.alwaysText}>ALWAYS</p>
                    <p className={styles.procentText}>25%</p>
                    <p className={styles.moreText}>OFF OR MORE</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='row'>
                <div className='col-12'>
                  <div className={styles.downSection}></div>
                  <div className={styles.positionHome}>
                    <p className={styles.homeText}>Home</p>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
                    <p className={styles.furText}>Furniture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            {categoryId === 'furniture' ? <NewFurniture role='internal' /> : ''}
          </div>
          <div className='col-3'>
            <Filters />
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <Brands />
        </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
