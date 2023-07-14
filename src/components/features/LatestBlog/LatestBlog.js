import styles from './LatestBlog.module.scss';
import React from 'react';

const LatestBlog = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.lastestBlog}>
          <div className={styles.header}>
            <h4>LATEST BLOG</h4>
          </div>
          <div className={styles.dots}></div>
        </div>
        <div className={styles.blogs}>
          <div className={styles.blog}>
            <div className={styles.image}></div>
            <div className={styles.subBox}></div>
            <div className={styles.box}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
