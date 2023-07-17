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

const ProductBox = ({ ...item }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selectedStars, setSelectedStars] = useState(item.myStars);
  const [favorites, setFavorites] = useState([item.isFavorite]);

  const favoriteHandler = e => {
    e.preventDefault();
    dispatch(toggleFavorite(item.id));
    setFavorites([...favorites, item.isFavorite]);
  };

  const [isHovering, setIsHovering] = useState(false);
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

    if (comparedProducts.includes(item.id)) {
      dispatch(deleteComparedProduct(item.id));
      return;
    }

    if (compareCount < 4) dispatch(addComparedProduct(item.id));
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
        <Link to={`/product/${item.id}`}>
          <img src={item.picture} alt={item.name} />
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
        <Link to={`/product/${item.id}`}>
          <h5>{item.name}</h5>
        </Link>
        <ProductStars
          stars={item.stars}
          myStars={selectedStars}
          onClick={setSelectedStars}
        />
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

          <Button
            onClick={onCompareClick}
            variant={comparedProducts.includes(item.id) ? 'active' : 'outline'}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.pricesContainer}>
          {item.oldPrice && <p className={styles.oldPrice}> $ {item.oldPrice} </p>}
          <div className={styles.price}>
            <Button noHover variant={isHovering ? 'price' : 'small'}>
              $ {item.price}
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
