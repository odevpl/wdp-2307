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
import { getByIdArray } from '../../../../redux/productsRedux';
import {
  setActiveGalleryItem,
  getActiveGalleryItem,
} from '../../../../redux/galleryRedux';
import { useEffect } from 'react';

const TabContent = ({ productsDataId }) => {
  const activeGalleryItemId = useSelector(state => getActiveGalleryItem(state));
  const item = useSelector(state => getProductById(state, activeGalleryItemId));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveGalleryItem(productsDataId[0]));
  }, [dispatch, productsDataId]);
  const sliderItems = useSelector(state => getByIdArray(state, productsDataId));

  const [selectedStars, setSelectedStars] = useState(item.myStars);
  const [activeSlide, setActiveSlide] = useState(null);

  const comparedProducts = useSelector(state => getAllCompared(state));
  const compareCount = useSelector(state => getCountCompared(state));

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
    dispatch(setActiveGalleryItem(productsDataId[index]));
  };
  const onCompareClick = evt => {
    evt.preventDefault();

    if (comparedProducts.includes(item.id)) {
      dispatch(deleteComparedProduct(item.id));
      return;
    }

    if (compareCount < 4) dispatch(addComparedProduct(item.id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.TabContent}>
        <div className={styles.image}>
          <img src={`/${item.picture}`} alt='activeItem' className={styles.image} />
          <div className={styles.stars}>
            <div className={styles.priceContainer}>
              <h3 className={styles.price}>${item.price}</h3>
              {item.oldPrice && <h4 className={styles.oldPrice}>${item.oldPrice}</h4>}
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
              variant={comparedProducts.includes(item.id) ? 'active' : 'outline'}
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
              <div className={styles.slidesBox}>
                <img
                  className={`${styles.slide} ${
                    activeSlide === 0 ? styles.active : ''
                  }`}
                  alt='slide'
                  src={sliderItems[0].picture}
                  onClick={() => handleSlideClick(0)}
                />
                <img
                  className={`${styles.slide} ${
                    activeSlide === 1 ? styles.active : ''
                  }`}
                  alt='slide'
                  src={sliderItems[1].picture}
                  onClick={() => handleSlideClick(1)}
                />
              </div>
              <div className={styles.slidesBox}>
                <img
                  className={`${styles.slide} ${
                    activeSlide === 2 ? styles.active : ''
                  }`}
                  alt='slide'
                  src={sliderItems[2].picture}
                  onClick={() => handleSlideClick(2)}
                />
                <img
                  className={`${styles.slide} ${
                    activeSlide === 3 ? styles.active : ''
                  }`}
                  alt='slide'
                  src={sliderItems[3].picture}
                  onClick={() => handleSlideClick(3)}
                />
              </div>
              <div className={styles.slidesBox}>
                <img
                  className={`${styles.slide} ${
                    activeSlide === 4 ? styles.active : ''
                  }`}
                  alt='slide'
                  src={sliderItems[4].picture}
                  onClick={() => handleSlideClick(4)}
                />
                <img
                  className={`${styles.slide} ${
                    activeSlide === 5 ? styles.active : ''
                  }`}
                  alt='slide'
                  src={sliderItems[5].picture}
                  onClick={() => handleSlideClick(5)}
                />
              </div>
            </div>
            <button>&#62;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

TabContent.propTypes = {
  productsDataId: PropTypes.array.isRequired,
};

export default TabContent;
