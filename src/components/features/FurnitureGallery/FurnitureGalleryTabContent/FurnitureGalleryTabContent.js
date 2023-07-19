import React, { useState } from 'react';
import ProductStars from '../../ProductStars/ProductStars';
import styles from './FurnitureGalleryTabContent.module.scss';
import Button from '../../../common/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getProductById, toggleFavorite } from '../../../../redux/productsRedux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faShoppingBasket,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  getAllCompared,
  getCountCompared,
  addComparedProduct,
  deleteComparedProduct,
} from '../../../../redux/comparedReducer';
import { addProduct } from '../../../../redux/cartRedux';

const TabContent = ({ id }) => {
  const item = useSelector(state => getProductById(state, id));
  const dispatch = useDispatch();
  const [selectedStars, setSelectedStars] = useState(item.myStars);
  const [activeSlide, setActiveSlide] = useState(null);
  const comparedProducts = useSelector(state => getAllCompared(state));
  const compareCount = useSelector(state => getCountCompared(state));
  const currency = useSelector(state => state.currency.currency);
  const conversionRates = useSelector(state => state.currency.conversionRates);

  const handleStarClick = clickedStars => {
    setSelectedStars(clickedStars);
  };

  const favoriteHandler = e => {
    e.preventDefault();
    dispatch(toggleFavorite(item.id));
  };

  const addToCartHandler = e => {
    e.preventDefault();

    dispatch(
      addProduct({
        id: item.id,
        name: item.name,
        price: item.price,
        picture: item.picture,
      })
    );
  };

  const handleSlideClick = index => {
    setActiveSlide(index);
  };

  const convertPrice = () => {
    const rate = conversionRates[currency];
    return item.price * rate;
  };

  const onCompareClick = evt => {
    evt.preventDefault();

    if (comparedProducts.includes(id)) {
      dispatch(deleteComparedProduct(id));
      return;
    }

    if (compareCount < 4) dispatch(addComparedProduct(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.TabContent}>
        <div className={styles.image}>
          <img src={`/${item.picture}`} alt='chair' className={styles.image} />
          <div className={styles.stars}>
            <div className={styles.priceContainer}>
              <h3 className={styles.price}>
                {currency === 'EUR' ? '€' : currency === 'PLN' ? 'PLN' : '$'}{' '}
                {convertPrice()}
              </h3>
              {item.oldPrice && (
                <h4 className={styles.oldPrice}>
                  {currency === 'EUR' ? '€' : currency === 'PLN' ? 'PLN' : '$'}{' '}
                  {item.oldPrice}
                </h4>
              )}
            </div>
            <h5 className={styles.itemName}>{item.name}</h5>
            <ProductStars
              stars={item.stars}
              myStars={selectedStars}
              onClick={handleStarClick}
            />
          </div>
          <div className={styles.buttons}>
            <Button
              className={styles.actionButton}
              variant={item.isFavorite ? 'active' : 'outline'}
              onClick={favoriteHandler}
              tooltip-text='Add Favorite'
            >
              <FontAwesomeIcon icon={faHeart} />
            </Button>

            <Button
              className={styles.actionButton}
              onClick={onCompareClick}
              variant={comparedProducts.includes(id) ? 'active' : 'outline'}
              tooltip-text='Add to compare'
            >
              <FontAwesomeIcon icon={faExchangeAlt} />
            </Button>

            <Button
              className={styles.actionButton}
              variant='outline'
              tooltip-text='See more'
            >
              <FontAwesomeIcon icon={faEye} />
            </Button>
            <Button
              className={styles.actionButton}
              variant='outline'
              tooltip-text='Add to cart'
              onClick={addToCartHandler}
            >
              <FontAwesomeIcon icon={faShoppingBasket} />
            </Button>
          </div>
        </div>
        <div className={styles.furnitureGallerySlider}>
          <div className={styles.row}>
            <button>&#60;</button>
            <div className={styles.slider}>
              <img
                className={`${styles.slide} ${activeSlide === 0 ? styles.active : ''}`}
                alt='slide'
                src={'/images/chairs/chair-1.jpg'}
                onClick={() => handleSlideClick(0)}
              />
              <img
                className={`${styles.slide} ${activeSlide === 1 ? styles.active : ''}`}
                alt='slide'
                src={'/images/chairs/chair-2.jpg'}
                onClick={() => handleSlideClick(1)}
              />
              <img
                className={`${styles.slide} ${activeSlide === 2 ? styles.active : ''}`}
                alt='slide'
                src={'/images/chairs/chair-3.jpg'}
                onClick={() => handleSlideClick(2)}
              />
              <img
                className={`${styles.slide} ${activeSlide === 3 ? styles.active : ''}`}
                alt='slide'
                src={'/images/chairs/chair-4.jpg'}
                onClick={() => handleSlideClick(3)}
              />
              <img
                className={`${styles.slide} ${activeSlide === 4 ? styles.active : ''}`}
                alt='slide'
                src={'/images/chairs/chair-5.jpg'}
                onClick={() => handleSlideClick(4)}
              />
              <img
                className={`${styles.slide} ${activeSlide === 5 ? styles.active : ''}`}
                alt='slide'
                src={'/images/chairs/chair-1.jpg'}
                onClick={() => handleSlideClick(5)}
              />
            </div>
            <button>&#62;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

TabContent.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TabContent;
