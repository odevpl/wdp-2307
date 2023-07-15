import styles from './FurnitureGallery.module.scss';
import React from 'react';

const FurnitureGallery = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <div className={styles.FurnitureGallery}>
            <div className={styles.header}>
              <h4>FURNITURE GALLERY</h4>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <img src='' alt='' />
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;
