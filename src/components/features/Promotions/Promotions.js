import React from 'react';
import styles from './Promotions.module.scss';
import { useSelector } from 'react-redux';
import { getPromoContent } from '../../../redux/categoriesRedux';

const Promotions = () => {
  const promo = useSelector(getPromoContent);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.row}>
          <div className={styles.bigSquare}>
            <img
              className={styles.imageOne}
              alt='Furniture Sale'
              src={'/images/sofas/sofa-2.jpg'}
            ></img>
            <h4>{promo.firstLine}</h4>
            <h2>{promo.secondLine}</h2>
            <h3>{promo.thirdLine}</h3>
          </div>
          <div className={styles.twoPromoBoxes}>
            <div className={styles.promoBoxOne}>
              <img
                className={styles.imageTwo}
                alt='Furniture Sale'
                src={'/images/banners/banner-1.jpg'}
              ></img>
              <div className={styles.text}>
                <h5>{promo.fourthLine}</h5>
                <p>{promo.fifthLine}</p>
                <h4>{promo.sixthLine}</h4>
              </div>
            </div>
            <div className={styles.promoBoxTwo}>
              <img
                className={styles.imageThree}
                alt='Furniture Sale'
                src={'/images/banners/banner-2.jpg'}
              ></img>
              <div className={styles.text}>
                <h5>{promo.seventhLine}</h5>
                <p>{promo.eighthLine}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
