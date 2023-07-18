import React, { useState, useEffect } from 'react';
import Swipeable from '../Swipable/Swipable';

import styles from './Brands.module.scss';

const images = [
  '/images/logos/logo-1.jpg',
  '/images/logos/logo-2.jpg',
  '/images/logos/logo-3.jpg',
  '/images/logos/logo-4.jpg',
  '/images/logos/logo-5.jpg',
  '/images/logos/logo-6.jpg',
  '/images/logos/logo-7.jpg',
  '/images/logos/logo-1.jpg',
  '/images/logos/logo-2.jpg',
  '/images/logos/logo-3.jpg',
  '/images/logos/logo-4.jpg',
  '/images/logos/logo-5.jpg',
  '/images/logos/logo-6.jpg',
  '/images/logos/logo-7.jpg',
];
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Brands = () => {
  const middle = Math.floor(images.length / 2);
  const [currentSlide, setCurrentSlide] = useState(middle);
  const { width } = useWindowDimensions();
  const moveBy = Math.floor(width / 180);

  const handleSwipeLeft = () => {
    setCurrentSlide(prevState => {
      if (prevState <= 0) return 0;
      return prevState - moveBy;
    });
  };

  const handleSwipeRight = () => {
    setCurrentSlide(prevState => {
      if (prevState >= images.length - 1) return images.length - 1;
      return prevState + moveBy;
    });
  };
  const getSlidePosition = () => {
    if (currentSlide > middle) {
      const delta = currentSlide - middle;
      const position = delta * 90;
      return `${position}`;
    } else if (currentSlide < middle) {
      const delta = middle - currentSlide;
      const position = delta * 90;
      return `-${position}`;
    } else return `0`;
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <Swipeable onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight}>
          <div className={styles.brands}>
            <div className={styles.row}>
              <button onClick={handleSwipeRight}>{`<`}</button>
              <div className={styles.logos}>
                <div
                  className={styles.logoBox}
                  style={{
                    transition: '0.2s ease-in-out',
                    transform: `translateX(${getSlidePosition()}px)`,
                  }}
                >
                  {images.map((i, index) => (
                    <img className={styles.logo} alt='Logo' src={i} key={index} />
                  ))}
                </div>
              </div>
              <button onClick={handleSwipeLeft}>{`>`}</button>
            </div>
          </div>
        </Swipeable>
      </div>
    </div>
  );
};

export default Brands;
