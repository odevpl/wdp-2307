import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import ProductStars from '../../features/ProductStars/ProductStars';
import QuickViewPopup from '../../views/QuickViewPopup/QuickViewPopup';

import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../../redux/productsRedux';

const ProductBox = ({ ...item }) => {

  const [isHovering, setIsHovering] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selectedStars, setSelectedStars] = useState(item.myStars);

  const handleStarClick = clickedStars => {
    setSelectedStars(clickedStars);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    // setIsHovering(true);
    setIsHovering(false);
  };

  const handleQuickViewClick = event => {
    event.preventDefault();
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const dispatch = useDispatch();

  const favoriteHandler = e => {
    e.preventDefault();
    dispatch(toggleFavorite(item.id));
  };

  return (
    <div
      className={styles.root}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isPopupOpen && <QuickViewPopup id={item.id} onClose={handlePopupClose} />}
      <div className={styles.photo}>
        {item.promo && <div className={styles.sale}>{item.promo}</div>}
        <img src={item.picture} alt={item.name} />
        {isHovering && (
          <div className={styles.buttons}>
            <Button variant='small' onClick={handleQuickViewClick}>
              Quick View
            </Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h5>{item.name}</h5>
        <ProductStars stars={item.stars} myStars={selectedStars} onClick={handleStarClick} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant={item.isFavorite ? 'active' : 'outline'}
            onClick={favoriteHandler}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant={Math.floor(Math.random() * 2) === 1 ? 'outline' : 'active'}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Button noHover variant={isHovering ? 'price' : 'small'}>
            $ {item.price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  item: PropTypes.object,
};

export default ProductBox;
