import styles from './LatestBlog.module.scss';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';

const LatestBlog = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.latestBlog}>
          <div className={styles.header}>
            <h4>LATEST BLOG</h4>
          </div>
          <div className={styles.dots}></div>
        </div>
        <div className={styles.blogs}>
          <div className={styles.blog}>
            <div className={styles.visual}>
              <div className={styles.image}></div>
              <div className={styles.subBox}>
                <div className={styles.info}>
                  <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                  15 JAN 2016
                </div>
                <div className={styles.info}>
                  <FontAwesomeIcon className={styles.icon} icon={faComment} />4 Comments
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.written}>
                <div className={styles.title}>Product That Fight Static</div>
                <div className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className={styles.buttonBox}>
                <div className={styles.button}> Read More</div>
              </div>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.visual}>
              <div className={styles.image}></div>
              <div className={styles.subBox}>
                <div className={styles.info}>
                  <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                  15 JAN 2016
                </div>
                <div className={styles.info}>
                  <FontAwesomeIcon className={styles.icon} icon={faComment} />4 Comments
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.written}>
                <div className={styles.title}>Product That Fight Static</div>
                <div className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className={styles.buttonBox}>
                <div className={styles.button}> Read More</div>
              </div>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.visual}>
              <div className={styles.image}></div>
              <div className={styles.subBox}>
                <div className={styles.info}>
                  <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                  15 JAN 2016
                </div>
                <div className={styles.info}>
                  <FontAwesomeIcon className={styles.icon} icon={faComment} />4 Comments
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.written}>
                <div className={styles.title}>Product That Fight Static</div>
                <div className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className={styles.buttonBox}>
                <div className={styles.button}> Read More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
