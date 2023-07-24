import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import ProductStars from '../../features/ProductStars/ProductStars';
import QuickViewPopup from '../../views/QuickViewPopup/QuickViewPopup';

//import { toggleFavorite } from '../../../redux/productsRedux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { useSelector, useDispatch, connect } from 'react-redux';

import {
  getAllCompared,
  getCountCompared,
  addComparedProduct,
  deleteComparedProduct,
} from '../../../redux/comparedReducer';

import { toggleFavorite } from '../../../redux/productsRedux';
import { setCurrency } from '../../../redux/currencyRedux';
import { addProduct } from '../../../redux/cartRedux';

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
  time,
  role,
  currency,
  conversionRates,
  setCurrency,
  quantity,
}) => {
  const dispatch = useDispatch();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedStars, setSelectedStars] = useState(myStars);
  const [favorites, setFavorites] = useState([isFavorite]);
  // const [isHovering, setIsHovering] = useState(false);
  const comparedProducts = useSelector(state => getAllCompared(state));
  const compareCount = useSelector(state => getCountCompared(state));

  const convertPrice = () => {
    const rate = conversionRates[currency];
    const convertedPrice = price * rate;

    switch (currency) {
      case 'EUR':
        return `€ ${convertedPrice}`;
      case 'PLN':
        return `zł ${convertedPrice}`;
      default:
        return `$ ${convertedPrice}`;
    }
  };

  const getReturnValues = countDown => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };

  const [days, hours, minutes, seconds] = getReturnValues(time);

  const favoriteHandler = e => {
    e.preventDefault();
    dispatch(toggleFavorite(id));
    setFavorites([...favorites, isFavorite]);
  };

  // const handleMouseOver = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

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

  const addToCartHandler = e => {
    e.preventDefault();
    dispatch(
      addProduct({
        id,
        name,
        price,
        promo,
        stars,
        picture,
        myStars,
        isFavorite,
        oldPrice,
        quantity,
      })
    );
  };

  return (
    <div
      className={styles.root}
      // onMouseOver={handleMouseOver}
      // onMouseOut={handleMouseOut}
    >
      {isPopupOpen && <QuickViewPopup id={id} onClose={handlePopupClose} />}
      <div className={styles.photo}>
        {promo && role !== 'promoted' ? <div className={styles.sale}>{promo}</div> : ''}
        <Link to={`/product/${id}`}>
          <img
            src={role && role !== 'promoted' ? `../${picture}` : picture}
            alt={name}
          />
        </Link>

        <div className={styles.buttons}>
          {role !== 'promoted' ? (
            <Button
              className={styles.quickViewBtn}
              variant='small'
              onClick={handleQuickViewClick}
            >
              Quick View
            </Button>
          ) : (
            ''
          )}

          {role === 'promoted' ? (
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
          ) : (
            ''
          )}

          <Button
            variant='small'
            onClick={addToCartHandler}
            className={role === 'promoted' ? styles.addButton : styles.addButtonBottom}
          >
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
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
          <Button variant={isFavorite ? 'active' : 'outline'} onClick={favoriteHandler}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>

          <Button
            onClick={onCompareClick}
            variant={comparedProducts.includes(id) ? 'active' : 'outline'}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
          {role === 'promoted' ? (
            <Button variant='outline' onClick={handleQuickViewClick}>
              <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
            </Button>
          ) : (
            ''
          )}
        </div>
        <div className={styles.pricesContainer}>
          {oldPrice && <p className={styles.oldPrice}> $ {oldPrice} </p>}
          <div className={styles.price}>
            <Button className={styles.priceBtn} variant={'small'}>
              {convertPrice()}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currency: state.currency.currency,
    conversionRates: state.currency.conversionRates,
  };
};

const mapDispatchToProps = {
  setCurrency,
};

ProductBox.propTypes = {
  role: PropTypes.string,
  time: PropTypes.number,
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
  currency: PropTypes.string,
  conversionRates: PropTypes.object,
  setCurrency: PropTypes.func,
  quantity: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
