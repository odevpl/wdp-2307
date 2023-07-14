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
import {
  faPlus,
  faMinus,
  faSearchPlus,
  faShoppingBasket,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../../redux/productsRedux';
const ProductData = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const initialStateId = `aenean-ru-bristique-${productId}`;

  const product = useSelector(state => getProductById(state, initialStateId));
  const [isHovering, setIsHovering] = useState(false);

  const favoriteHandler = e => {
    e.preventDefault();
    dispatch(toggleFavorite(product.id));
  };
  return (
    <div className={styles.root}>
      <div className='row'>
        <div className={`col-md-5 ${styles.imagesContainer}`}>
          <div className={styles.image}>
            <img
              src={`/${product.picture}`}
              alt={product.name}
              className={styles.image}
            />
            <Button className={styles.zoomButton} variant='outline'>
              <FontAwesomeIcon icon={faSearchPlus} />
            </Button>
          </div>
          <div className={` ${styles.imageSmallGallery}`}>
            <img
              src={`/${product.picture}`}
              alt={product.name}
              className={styles.imageSmall}
            />
            <img
              src={`/${product.picture}`}
              alt={product.name}
              className={styles.imageSmall}
            />
            <img
              src={`/${product.picture}`}
              alt={product.name}
              className={styles.imageSmall}
            />
            <img
              src={`/${product.picture}`}
              alt={product.name}
              className={styles.imageSmall}
            />
            <Button className={styles.arrowButtonLeft} variant='outline'>
              &lt;
            </Button>
            <Button className={styles.arrowButtonRight} variant='outline'>
              &gt;
            </Button>
          </div>
        </div>
        <div className='col-md-7'>
          <div className='row'>
            <h4 className='col-10'>{product.name}</h4>
            <div className='col-2'>
              <div className={styles.outlines}>
                <Button className={styles.arrowButton} variant='outline'>
                  &lt;
                </Button>
                <Button className={styles.arrowButton} variant='outline'>
                  &gt;
                </Button>
              </div>
            </div>
          </div>
          <div className={`col-6 p-0 my-2 ${styles.reviews}`}>
            <div>
              <ProductStars stars={product.stars} />
            </div>
            <div>
              <p>(0 Reviews)</p>
            </div>
            <div>
              <p>|</p>
            </div>
            <div>
              <p>Add your review</p>
            </div>
          </div>
          <div className='row border-top border-bottom my-2 py-3'>
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

          <div className={`row my-2 ${styles.actionButtons}`}>
            <div className='col-12'>
              <Button className={styles.addToCartButton} variant='outline'>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
              </Button>

              <Button
                className={styles.actionButton}
                variant={product.isFavorite ? 'active' : 'outline'}
                onClick={favoriteHandler}
              >
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              </Button>
              <Button
                className={styles.actionButton}
                variant={Math.floor(Math.random() * 2) === 1 ? 'outline' : 'active'}
              >
                <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
              </Button>
              <Button className={styles.actionButton} variant='outline'>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </Button>
            </div>
          </div>

          <div className='row py-2 my-2 border-bottom'>
            <strong className='col-2'>Quantity:</strong>
            <div className='col-10'>
              <Button className={styles.quantityButton} variant='outline'>
                {' '}
                2{' '}
              </Button>
              <Button className='mx-1' variant='outline'>
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
          <div className='row mt-3'>
            <p className='col-2'>
              <strong>Availability:</strong>
            </p>
            <p className='col-9'>In stock</p>
          </div>
          <div className='row border-bottom'>
            <p className='col-2'>
              <strong>Category:</strong>
            </p>
            <p className='col-9'>{product.category}</p>
          </div>
          <div className='row py-3'>
            <div className={`col-12 ${styles.socialButtons}`}>
              <button className={styles.Facebook}>
                <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} />
                <p>Share</p>
              </button>
              <button className={styles.Google}>
                <FontAwesomeIcon icon={faGooglePlus} className={styles.socialIcon} />
                <p>Google+</p>
              </button>
              <button className={styles.Pinterest}>
                <FontAwesomeIcon icon={faPinterest} className={styles.socialIcon} />
                <p>Pinterest</p>
              </button>
              <button className={styles.Twitter}>
                <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
                <p>Tweet</p>
              </button>
              <button className={styles.LinkedIn}>
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
                <p>LinkedIn</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
