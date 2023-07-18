import React, { useState, useEffect, useRef } from 'react';
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
const Brands = () => {
  const middle = Math.floor(images.length / 2);
  const [currentSlide, setCurrentSlide] = useState(middle);
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const moveBy = Math.floor(width / 100);

  useEffect(() => {
    setWidth(ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);

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
      const position = delta * 100;
      return `${position}`;
    } else if (currentSlide < middle) {
      const delta = middle - currentSlide;
      const position = delta * 100;
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
              <div className={styles.logos} ref={ref}>
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
