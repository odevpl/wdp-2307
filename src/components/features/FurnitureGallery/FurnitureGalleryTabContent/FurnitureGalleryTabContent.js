import React, { useState, useEffect } from 'react';
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
import { getViewport } from '../../../../redux/viewportRedux';

const TabContent = ({ productsDataId }) => {
  const [fadeOutImage, setFadeOutImage] = useState(false);
  const [fadeInImage, setFadeInImage] = useState(false);

  const activeGalleryItemId = useSelector(state => getActiveGalleryItem(state));
  const item = useSelector(state => getProductById(state, activeGalleryItemId));
  const viewport = useSelector(state => getViewport(state));
  const dispatch = useDispatch();
  const sliderItems = useSelector(state => getByIdArray(state, productsDataId));

  const [selectedStars, setSelectedStars] = useState(item.myStars);
  const [activeSlide, setActiveSlide] = useState(null);
  const [visibleSlides, setVisibleSlides] = useState(6);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    dispatch(setActiveGalleryItem(productsDataId[0]));
  }, [dispatch, productsDataId]);

  useEffect(() => {
    if (viewport === 'desktop') {
      setVisibleSlides(6);
    } else if (viewport === 'tablet') {
      setVisibleSlides(4);
    } else if (viewport === 'mobile') {
      setVisibleSlides(2);
    }
  }, [viewport]);

  useEffect(() => {
    dispatch(setActiveGalleryItem(productsDataId[0]));
    setStartIndex(0);
  }, [dispatch, productsDataId, viewport]);

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
    setFadeOutImage(true);
    setTimeout(() => {
      setActiveSlide(index);
      setFadeOutImage(false);
      setFadeInImage(true);
      setTimeout(() => {
        setFadeInImage(false);
      }, 500);
      dispatch(setActiveGalleryItem(productsDataId[index]));
    }, 500);
  };

  const comparedProducts = useSelector(state => getAllCompared(state));
  const compareCount = useSelector(state => getCountCompared(state));

  const onCompareClick = evt => {
    evt.preventDefault();

    if (comparedProducts.includes(item.id)) {
      dispatch(deleteComparedProduct(item.id));
      return;
    }

    if (compareCount < 4) dispatch(addComparedProduct(item.id));
  };

  const renderSliderImages = () => {
    const endIndex = startIndex + visibleSlides;
    const visibleSliderItems = sliderItems.slice(startIndex, endIndex);

    return visibleSliderItems.map((sliderItem, index) => (
      <img
        key={sliderItem.id}
        className={`${styles.slide} ${activeSlide === index ? styles.active : ''}`}
        alt='slide'
        src={sliderItem.picture}
        onClick={() => handleSlideClick(startIndex + index)}
      />
    ));
  };

  const handlePrevClick = () => {
    const newStartIndex = startIndex - visibleSlides;
    if (newStartIndex >= 0) {
      setStartIndex(newStartIndex);
      setActiveSlide(null);
    }
  };

  const handleNextClick = () => {
    const newStartIndex = startIndex + visibleSlides;
    const remainingSlides = sliderItems.length - newStartIndex;

    if (remainingSlides >= visibleSlides || remainingSlides > 0) {
      setStartIndex(newStartIndex);
      setActiveSlide(null);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.TabContent}>
        <div className={styles.image}>
          <img
            src={`/${item.picture}`}
            alt='activeItem'
            className={`${styles.image} ${styles.activeImage} ${
              fadeOutImage ? styles.fade : ''
            } ${fadeInImage ? styles.fadeIn : ''}`}
          />
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
            <button onClick={handlePrevClick}>&#60;</button>
            <div className={styles.slider}>{renderSliderImages()}</div>
            <button onClick={handleNextClick}>&#62;</button>
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
