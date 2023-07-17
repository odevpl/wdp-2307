import React, { useState } from 'react';
import Swipeable from '../Swipable/Swipable';

import styles from './Brands.module.scss';

const Brands = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 6; // Ilość widocznych slajdów na ekranie w wersji desktop (zmień wartość jeśli inna)

  const handleSwipeLeft = () => {
    const newSlide = currentSlide - 1 < 0 ? 0 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const handleSwipeRight = () => {
    const totalSlides = Math.ceil(
      document.querySelectorAll(`.${styles.logo}`).length / slidesToShow
    );
    const newSlide =
      currentSlide + 1 >= totalSlides ? totalSlides - 1 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <Swipeable onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight}>
          <div className={styles.brands}>
            <div className={styles.row}>
              <button onClick={handleSwipeLeft}>&#60;</button>
              <div className={styles.logos}>
                <div
                  className={styles.logoBox}
                  style={{
                    transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                  }}
                >
                  <img
                    className={styles.logo}
                    alt='Logo'
                    src={'/images/logos/logo-1.jpg'}
                  ></img>
                  <img
                    className={styles.logo}
                    alt='Logo'
                    src={'/images/logos/logo-2.jpg'}
                  ></img>
                  <img
                    className={styles.logo}
                    alt='Logo'
                    src={'/images/logos/logo-3.jpg'}
                  ></img>
                  <img
                    className={styles.logo}
                    alt='Logo'
                    src={'/images/logos/logo-4.jpg'}
                  ></img>
                  <img
                    className={styles.logo}
                    alt='Logo'
                    src={'/images/logos/logo-5.jpg'}
                  ></img>
                  <img
                    className={styles.logo}
                    alt='Logo'
                    src={'/images/logos/logo-6.jpg'}
                  ></img>
                  {/* Dodaj pozostałe loga */}
                  <img
                    className={styles.logo}
                    alt='Logo'
                    src={'/images/logos/logo-1.jpg'}
                  ></img>
                  <img
                    className={styles.logo}
                    alt='Logo'
                    src={'/images/logos/logo-2.jpg'}
                  ></img>
                  <img
                    className={styles.logo}
                    alt='Logo'
                    src={'/images/logos/logo-3.jpg'}
                  ></img>
                  <img
                    className={styles.logo}
                    alt='Logo'
                    src={'/images/logos/logo-4.jpg'}
                  ></img>
                  <img
                    className={styles.logo}
                    alt='Logo'
                    src={'/images/logos/logo-5.jpg'}
                  ></img>
                  <img
                    className={styles.logo}
                    alt='Logo'
                    src={'/images/logos/logo-6.jpg'}
                  ></img>
                  {/* Kontynuuj dodawanie pozostałych logotypów */}
                </div>
              </div>
              <button onClick={handleSwipeRight}>&#62;</button>
            </div>
          </div>
        </Swipeable>
      </div>
    </div>
  );
};

export default Brands;
