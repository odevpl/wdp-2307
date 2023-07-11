import React from 'react';
import styles from './ProductData.module.scss';
import { getProductById } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../../common/Button/Button';
import ProductStars from '../../features/ProductStars/ProductStars';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGooglePlus,
  faPinterest,
  faTwitter,
  faLinkedin,

} from '@fortawesome/free-brands-svg-icons';
import { faPlus, faMinus, faShoppingBasket, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../../redux/productsRedux';
const ProductData = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const initialStateId = `aenean-ru-bristique-${productId}`;

  const product = useSelector(state => getProductById(state, initialStateId));
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    // setIsHovering(true);
    setIsHovering(false);
  };
  const favoriteHandler = e => {
    e.preventDefault();
    dispatch(toggleFavorite(product.id));
  };
  return (
    <div>
      <div>
        <div className='row'>
          <div className='col-md-5'>
            <img src={`/${product.picture}`} alt={product.name} className='img-fluid' />
          </div>
          <div className='col-md-7'>
            <div className='row'>
              <h5 className='col-11'>{product.name}</h5>
              <div className='col-1'>
                <div className={styles.outlines}>
                  <Button>&lt;</Button>
                  <Button>&gt;</Button>
                </div>
              </div>
            </div>
            <div className='row reviews border-bottom my-2'>
              <div className='col-2'>
                <ProductStars
                  stars={product.stars}
                  // myStars={selectedStars}
                  // onClick={handleStarClick}
                />
              </div>
              <div className='col-1'>
                <p>(0 Reviews)</p>
              </div>
              <div className='col-1'>
                <p>|</p>
              </div>
              <div className='col-2'>
                <p>Add your review</p>
              </div>
            </div>
            <div className='row border-bottom my-2 py-3'>
              <div className='col-4 '>
                <div className={styles.pricesContainer}>
                  {product.oldPrice && (
                    <p className={styles.oldPrice}> $ {product.oldPrice} </p>
                  )}
                  <div className={styles.price}>
                    <Button noHover variant={isHovering ? 'price' : 'small'}>
                      $ {product.price}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row my-2'>
              <div className={styles.outlines}>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
                <Button
                  variant={product.isFavorite ? 'active' : 'outline'}
                  onClick={favoriteHandler}
                >
                  <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                </Button>
                <Button
                  variant={Math.floor(Math.random() * 2) === 1 ? 'outline' : 'active'}
                >
                  <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
                </Button>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className='row my-2 border-bottom'>
              <strong className='col-2'>Quantity:</strong>
              <div className='col-10'>
                <Button variant='outline'> 2 </Button>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faMinus}>-</FontAwesomeIcon>
                </Button>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faPlus}>+</FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className='row border-bottom'>
              <p className='col-12'>
                <strong>Quick Overview</strong>
              </p>
              <p className='col-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit esse tempor
                incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className='row'>
              <p className='col-3'>
                <strong>Availability:</strong>
              </p>
              <p className='col-9'>In stock</p>
            </div>
            <div className='row border-bottom'>
              <p className='col-3'>
                <strong>Category:</strong>
              </p>
              <p className='col-9'>{product.category}</p>
            </div>
            <div className='row'>
              <div className='col-12 socialButtons'>
                <button className='socialButton'>
                  <FontAwesomeIcon icon={faFacebook} className='socialIcon' />
                  Facebook
                </button>
                <button className='socialButton'>
                  <FontAwesomeIcon icon={faGooglePlus} className='socialIcon' />
                  Google+
                </button>
                <button className='socialButton'>
                  <FontAwesomeIcon icon={faPinterest} className='socialIcon' />
                  Pinterest
                </button>
                <button className='socialButton'>
                  <FontAwesomeIcon icon={faTwitter} className='socialIcon' />
                  Twitter
                </button>
                <button className='socialButton'>
                  <FontAwesomeIcon icon={faLinkedin} className='socialIcon' />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
