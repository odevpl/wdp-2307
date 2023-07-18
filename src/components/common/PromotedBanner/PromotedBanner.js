import React from 'react';
import styles from './PromotedBanner.module.scss';

const PromotedBanner = banner => {
  return (
    <div className={styles.img}>
      <img className={styles.imageOne} alt='Furniture Sale' src={banner.picture}></img>
      <div className={styles.banner}>
        <h2>{banner.bannerTitle}</h2>
        <h3>{banner.bannerSubtitle}</h3>
      </div>
    </div>
  );
};

export default PromotedBanner;
