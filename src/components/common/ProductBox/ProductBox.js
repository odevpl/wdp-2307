import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import ProductStars from '../../features/ProductStars/ProductStars';
import QuickViewPopup from '../../views/QuickViewPopup/QuickViewPopup';

//import { toggleFavorite } from '../../../redux/productsRedux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { useSelector, useDispatch } from 'react-redux';

import {
  getAllCompared,
  getCountCompared,
  addComparedProduct,
  deleteComparedProduct,
} from '../../../redux/comparedReducer';
import { toggleFavorite } from '../../../redux/productsRedux';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  picture,
  myStars,
  isFavorite,
  oldPrice,
  role,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selectedStars, setSelectedStars] = useState(myStars);
  const [favorites, setFavorites] = useState([isFavorite]);

  const favoriteHandler = e => {
    e.preventDefault();
    dispatch(toggleFavorite(id));
    setFavorites([...favorites, isFavorite]);
  };

  const comparedProducts = useSelector(state => getAllCompared(state));
  const compareCount = useSelector(state => getCountCompared(state));
  const dispatch = useDispatch();

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

  const onCompareClick = evt => {
    evt.preventDefault();

    if (comparedProducts.includes(id)) {
      dispatch(deleteComparedProduct(id));
      return;
    }

    if (compareCount < 4) dispatch(addComparedProduct(id));
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
        <Link to={`/product/${id}`}>
          <img src={picture} alt={name} />
        </Link>
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
        <Link to={`/product/${id}`}>
          <h5>{name}</h5>
        </Link>
        <ProductStars
          stars={stars}
          myStars={selectedStars}
          onClick={setSelectedStars}
        />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant={isFavorite ? 'active' : 'outline'}
            onClick={favoriteHandler}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>

          <Button
            onClick={onCompareClick}
            variant={comparedProducts.includes(id) ? 'active' : 'outline'}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.pricesContainer}>
          {oldPrice && <p className={styles.oldPrice}> $ {oldPrice} </p>}
          <div className={styles.price}>
            <Button noHover variant={isHovering ? 'price' : 'small'}>
              $ {price}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  role: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  myStars: PropTypes.number,
  picture: PropTypes.string.isRequired,
  onStarHover: PropTypes.func,
  onStarClick: PropTypes.func,
  oldPrice: PropTypes.number,
  isFavorite: PropTypes.bool,
};

export default ProductBox;
