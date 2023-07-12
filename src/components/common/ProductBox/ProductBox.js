import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as  faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import ProductStars from '../../features/ProductStars/ProductStars';
import QuickViewPopup from '../../views/QuickViewPopup/QuickViewPopup';

const ProductBox = ({ id, name, price, promo, stars, myStars, picture }) => {

  const [isHovering, setIsHovering] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selectedStars, setSelectedStars] = useState(myStars);

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

  return (
    <div
      className={styles.root}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isPopupOpen && <QuickViewPopup id={id} onClose={handlePopupClose} />}
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <img src={picture} alt={name} />
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
        <h5>{name}</h5>
        <ProductStars stars={stars} myStars={selectedStars} onClick={handleStarClick} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant={Math.floor(Math.random() * 2) === 1 ? 'outline' : 'active'}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant={Math.floor(Math.random() * 2) === 1 ? 'outline' : 'active'}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Button noHover variant={isHovering ? 'price' : 'small'}>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  myStars: PropTypes.number,
  picture: PropTypes.string.isRequired,
  onStarHover: PropTypes.func,
  onStarClick: PropTypes.func,
};

export default ProductBox;
