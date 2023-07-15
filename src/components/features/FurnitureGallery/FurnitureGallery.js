import styles from './FurnitureGallery.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { useState } from 'react';
import ProductStars from '../ProductStars/ProductStars';
// import ProductReview from '../../common/ProductReview/ProductReview';
const FurnitureGallery = (stars, myStars) => {
  const rightSideProduct = useSelector(state =>
    getProductById(state, 'aenean-ru-bristique-2')
  );
  const [activeTab, setActiveTab] = useState('Tab 1');
  const [, setHoveredTab] = useState(null);

  const handleTabClick = tabLabel => {
    setActiveTab(tabLabel);
  };

  const handleTabMouseEnter = tabLabel => {
    setHoveredTab(tabLabel);
  };
  const [selectedStars, setSelectedStars] = useState(myStars);

  const handleStarClick = clickedStars => {
    setSelectedStars(clickedStars);
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
                  <div className={styles.tabContent}>
                    {activeTab === 'Tab 1' && (
                      <div className={styles.positionContent}>
                        <h2>Content for FEATURED</h2>
                        <p>This is the content of FEATURED.</p>
                      </div>
                    )}
                    {activeTab === 'Tab 2' && (
                      <div className={styles.positionContent}>
                        <p>There are no reviews for this product.</p>
                        <p className={styles.pReview}>Add a review</p>
                        <p>Your Rating</p>
                        <div className={styles.rating}>
                          <p className={styles.pBad}>Bad</p>
                          <p className={styles.pGwiazdki}>
                            <ProductStars
                              stars={stars}
                              myStars={selectedStars}
                              onClick={handleStarClick}
                            />
                          </p>
                          <p className={styles.pGood}>Good</p>
                        </div>
                        <div></div>
                      </div>
                    )}
                    {activeTab === 'Tab 3' && (
                      <div className={styles.positionContent}>
                        <h2>Content for SALE OFF</h2>
                        <p>This is the content of SALE OFF</p>
                      </div>
                    )}
                    {activeTab === 'Tab 4' && (
                      <div className={styles.positionContent}>
                        <h2>Content for TOP RATED</h2>
                        <p>This is the content of TOP RATED</p>
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
