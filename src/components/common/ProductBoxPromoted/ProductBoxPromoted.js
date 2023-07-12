import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBoxPromoted.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
// import ProductStars from '../../features/ProductStars/ProductStars';
// import QuickViewPopup from '../../views/QuickViewPopup/QuickViewPopup';

import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../../redux/productsRedux';

const ProductBoxPromoted = ({ ...item }) => {
  const [isHovering, setIsHovering] = useState(false);

  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  // const [selectedStars, setSelectedStars] = useState(item.myStars);

  // const handleStarClick = clickedStars => {
  //   setSelectedStars(clickedStars);
  // };

  // const handleQuickViewClick = event => {
  //   event.preventDefault();
  //   setIsPopupOpen(true);
  // };

  // const handlePopupClose = () => {
  //   setIsPopupOpen(false);
  // };

  const dispatch = useDispatch();

  const favoriteHandler = e => {
    e.preventDefault();
    dispatch(toggleFavorite(item.id));
  };

  const getReturnValues = countDown => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };

  const [days, hours, minutes, seconds] = getReturnValues(item.time);

  return (
    <div
      className={styles.root}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* {isPopupOpen && <QuickViewPopup id={item.id} onClose={handlePopupClose} />} */}
      <div className={styles.photo}>
        <img src={item.picture} alt={item.name} />
        <div className={styles.hover}>
          <div className={styles.countdown}>
            <ul>
              <li>
                <span>{days}</span>
                <br />
                days
              </li>
              <li>
                <span>{hours}</span>
                <br />
                hrs
              </li>
              <li>
                <span>{minutes}</span>
                <br />
                mins
              </li>
              <li>
                <span>{seconds}</span>
                <br />
                secs
              </li>
            </ul>
          </div>
          <Button className={styles.addButton} variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{item.name}</h5>
        {/* <ProductStars
          stars={item.stars}
          myStars={selectedStars}
          onClick={handleStarClick}
        /> */}
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
          <Button variant='outline'>
            <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
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

ProductBoxPromoted.propTypes = {
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

export default ProductBoxPromoted;
