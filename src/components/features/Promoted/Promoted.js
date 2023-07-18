import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ProductBoxPromoted from '../../common/ProductBoxPromoted/ProductBoxPromoted';
import { getPromoted } from '../../../redux/promotedRedux';
import { getByIdArray } from '../../../redux/productsRedux';
import styles from './Promoted.module.scss';
import Swipeable from '../Swipable/Swipable';
import PromotedBanner from '../../common/PromotedBanner/PromotedBanner';

const Promoted = () => {
  const promotedData = useSelector(state => getPromoted(state));
  const promotedProducts = useSelector(state =>
    getByIdArray(state, promotedData.productsId)
  );
  const [activeItem, setActiveItem] = useState(0);
  const [activeBanner, setActiveBanner] = useState(0);
  const [autoPlay, setAutoplay] = useState(true);
  const [itemFadeOut, setItemFadeOut] = useState(false);
  const [bannerFadeOut, setBannerFadeOut] = useState(false);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        setItemFadeOut(true);
        setTimeout(() => {
          setItemFadeOut(false);
          autoPlaySlideItem();
        }, 400);
      }, 3000);
  }, activeItem);

  const autoPlaySlideItem = () => {
    // setItemFadeOut(true);
    // setTimeout(() => {
    setActiveItem(activeItem === promotedProducts.length - 1 ? 0 : activeItem + 1);
    // setItemFadeOut(false);
    // }, 300);
  };

  const handleActiveItemChange = newActiveItem => {
    // setItemFadeOut(true);
    setAutoplay(false);
    clearTimeout(timeOut);
    // setTimeout(() => {
    // setItemFadeOut(false);
    setTimeout(() => {
      setActiveItem(newActiveItem);
      setAutoplay(true);
    }, 7000);

    // }, 400);
  };

  const bannerLeft = () => {
    setBannerFadeOut(true);
    setTimeout(() => {
      setActiveBanner(
        activeBanner === 0 ? promotedData.banners.length - 1 : activeBanner - 1
      );
      setBannerFadeOut(false);
    }, 500);
  };
  const bannerRight = () => {
    setBannerFadeOut(true);
    setTimeout(() => {
      setActiveBanner(
        activeBanner === promotedData.banners.length - 1 ? 0 : activeBanner + 1
      );
      setBannerFadeOut(false);
    }, 500);
  };

  const dots = [];
  for (let i = 0; i < promotedProducts.length; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => handleActiveItemChange(i)}
          className={activeItem === i ? styles.active : ''}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.positionPromoted}>
          <div className='row'>
            <div className='col-lg-4'>
              <div className={styles.title}>
                <p>Hot deals</p>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
              <div>
                <Swipeable
                  onSwipeLeft={() => {
                    activeItem === promotedProducts.length - 1
                      ? handleActiveItemChange(0)
                      : handleActiveItemChange(activeItem + 1);
                  }}
                  onSwipeRight={() => {
                    activeItem === 0
                      ? handleActiveItemChange(promotedProducts.length - 1)
                      : handleActiveItemChange(activeItem - 1);
                  }}
                >
                  <div className={itemFadeOut ? styles.fade : ''}>
                    {promotedProducts.slice(activeItem, activeItem + 1).map(item => (
                      <ProductBoxPromoted key={item.id} {...item} />
                    ))}
                  </div>
                </Swipeable>
              </div>
            </div>
            <div className={`col-8 ${styles.banner}`}>
              <Swipeable
                onSwipeLeft={() => {
                  bannerLeft();
                }}
                onSwipeRight={() => {
                  bannerRight();
                }}
              >
                <div className={bannerFadeOut ? styles.fade : ''}>
                  {promotedData.banners
                    .slice(activeBanner, activeBanner + 1)
                    .map((banner, index) => (
                      <PromotedBanner key={index} {...banner} />
                    ))}
                </div>
              </Swipeable>
              <div className={styles.nav}>
                <a onClick={() => bannerLeft()}>&#10094;</a>
                <a onClick={() => bannerRight()}>&#10095;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Promoted;
