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
  const initialStateId = `aenean-ru-bristique-2`;
  const rightSideProduct = useSelector(state => getProductById(state, initialStateId));

  const featuredProducts = useSelector(state => getFeaturedProductsId(state));
  const saleOffProducts = useSelector(state => getSaleOffProductsId(state));
  const topRatedProducts = useSelector(state => getTopRatedProductsId(state));
  const promotedProducts = useSelector(state => getTopSellerProductsId(state));

  const [activeTab, setActiveTab] = useState('Tab 1');
  const [, setHoveredTab] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);

  const tabProductIds = {
    'Tab 1': 'aenean-ru-bristique-2',
    'Tab 2': 'aenean-ru-bristique-6',
    'Tab 3': 'aenean-ru-bristique-20',
    'Tab 4': 'aenean-ru-bristique-21',
  };

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

  const currency = useSelector(state => state.currency.currency);
  const conversionRates = useSelector(state => state.currency.conversionRates);

  const convertPrice = () => {
    const rate = conversionRates[currency];
    return rightSideProduct.price * rate;
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 '>
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
                        <TabContent id={tabProductIds['Tab 1']} />
                      </div>
                    )}
                    {activeTab === 'Tab 2' && (
                      <div className={styles.positionContent}>
                        <TabContent id={tabProductIds['Tab 2']} />
                      </div>
                    )}
                    {activeTab === 'Tab 3' && (
                      <div className={styles.positionContent}>
                        <TabContent id={tabProductIds['Tab 3']} />
                      </div>
                    )}
                    {activeTab === 'Tab 4' && (
                      <div className={styles.positionContent}>
                        <TabContent id={tabProductIds['Tab 4']} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 '>
            <div className={styles.image}>
              <img
                src={`/${rightSideProduct.picture}`}
                alt={rightSideProduct.name}
                className={styles.image}
              />

              <h4 className={styles.fromText}>
                FROM{' '}
                <span className={styles.price}>
                  {currency === 'EUR' ? '€' : '$'}{' '}
                  {convertPrice(rightSideProduct.price)}
                </span>
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
