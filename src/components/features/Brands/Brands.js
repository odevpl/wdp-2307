import React, { useState } from 'react';
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
];

const Brands = () => {
  const middle = Math.floor(images.length / 2);
  const [currentSlide, setCurrentSlide] = useState(middle);

  const handleSwipeLeft = () => {
    setCurrentSlide(prevState => {
      if (prevState === 0) return 0;
      return prevState - 1;
    });
  };

  const handleSwipeRight = () => {
    setCurrentSlide(prevState => {
      if (prevState === images.length - 1) return images.length - 1;
      return prevState + 1;
    });
  };
  const getSlidePosition = () => {
    if (currentSlide > 3) {
      const delta = currentSlide - middle;
      const position = delta * 90;
      return `${position}`;
    } else if (currentSlide < 3) {
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
              <button onClick={handleSwipeLeft}>{`<`}</button>
              <div className={styles.logos}>
                <div
                  className={styles.logoBox}
                  style={{
                    transform: `translateX(${getSlidePosition()}px)`,
                  }}
                >
                  {images.map(i => (
                    <img className={styles.logo} alt='Logo' src={i} key={i} />
                  ))}
                </div>
              </div>
              <button onClick={handleSwipeRight}>{`>`}</button>
            </div>
          </div>
        </Swipeable>
      </div>
    </div>
  );
};

export default Brands;
