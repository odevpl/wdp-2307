import styles from './FurnitureGallery.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { useState } from 'react';
import TabContent from './FurnitureGalleryTabContent/FurnitureGalleryTabContent';

import {
  getFeaturedProductsId,
  getSaleOffProductsId,
  getTopRatedProductsId,
  getTopSellerProductsId,
} from '../../../redux/galleryRedux';
const FurnitureGallery = () => {
  const rightSideProduct = useSelector(state =>
    getProductById(state, 'aenean-ru-bristique-2')
  );
  const featuredProducts = useSelector(state => getFeaturedProductsId(state));
  const saleOffProducts = useSelector(state => getSaleOffProductsId(state));
  const topRatedProducts = useSelector(state => getTopRatedProductsId(state));
  const promotedProducts = useSelector(state => getTopSellerProductsId(state));

  const [activeTab, setActiveTab] = useState('Tab 1');
  const [, setHoveredTab] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);

  const handleTabClick = tabLabel => {
    setFadeOut(true);
    setTimeout(() => {
      setActiveTab(tabLabel);
      setFadeOut(false);
    }, 500);
  };

  const handleTabMouseEnter = tabLabel => {
    setHoveredTab(tabLabel);
  };

  const handleTabMouseLeave = () => {
    setHoveredTab(null);
  };
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div>
              <div className={styles.header}>
                <h4>FURNITURE GALLERY</h4>
              </div>
              <div className={styles.selectCategory}>
                <div className={styles.tabs}>
                  <div className={styles.tabList}>
                    <div
                      className={`${styles.tab} ${
                        activeTab === 'Tab 1' ? styles.active : ''
                      }`}
                      onClick={() => handleTabClick('Tab 1')}
                      onMouseEnter={() => handleTabMouseEnter('Tab 1')}
                      onMouseLeave={handleTabMouseLeave}
                    >
                      <p>FEATURED</p>
                    </div>
                    <div
                      className={`${styles.tab} ${
                        activeTab === 'Tab 2' ? styles.active : ''
                      }`}
                      onClick={() => handleTabClick('Tab 2')}
                      onMouseEnter={() => handleTabMouseEnter('Tab 2')}
                      onMouseLeave={handleTabMouseLeave}
                    >
                      <p>TOP SELLER</p>
                    </div>
                    <div
                      className={`${styles.tab} ${
                        activeTab === 'Tab 3' ? styles.active : ''
                      }`}
                      onClick={() => handleTabClick('Tab 3')}
                      onMouseEnter={() => handleTabMouseEnter('Tab 3')}
                      onMouseLeave={handleTabMouseLeave}
                    >
                      <p>SALE OFF</p>
                    </div>
                    <div
                      className={`${styles.tab} ${
                        activeTab === 'Tab 4' ? styles.active : ''
                      } ${styles.lastTab}`}
                      onClick={() => handleTabClick('Tab 4')}
                      onMouseEnter={() => handleTabMouseEnter('Tab 4')}
                      onMouseLeave={handleTabMouseLeave}
                    >
                      <p>TOP RATED</p>
                    </div>
                  </div>
                  <div className={`${styles.tabContent} ${fadeOut ? styles.fade : ''}`}>
                    {activeTab === 'Tab 1' && (
                      <div className={styles.positionContent}>
                        <TabContent productsDataId={featuredProducts} />
                      </div>
                    )}
                    {activeTab === 'Tab 2' && (
                      <div className={styles.positionContent}>
                        <TabContent productsDataId={promotedProducts} />
                      </div>
                    )}
                    {activeTab === 'Tab 3' && (
                      <div className={styles.positionContent}>
                        <TabContent productsDataId={saleOffProducts} />
                      </div>
                    )}
                    {activeTab === 'Tab 4' && (
                      <div className={styles.positionContent}>
                        <TabContent productsDataId={topRatedProducts} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className={styles.image}>
              <img
                src={`/${rightSideProduct.picture}`}
                alt={rightSideProduct.name}
                className={styles.image}
              />
              <h4 className={styles.fromText}>
                FROM <span className={styles.price}>$50.80</span>
              </h4>

              <p className={styles.description}>Bedroom Bed</p>
              <button className={styles.shopButton}>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;
