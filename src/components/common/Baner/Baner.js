import styles from '../Baner/Baner.module.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Baner = () => {
  return (
    <div className='container'>
      <div className={styles.root}>
        <div className={styles.product}>{/* <ProductData /> */}</div>
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
                  <div className={styles.iconPosition}>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
                  </div>
                  <p className={styles.furText}>Furniture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baner;
