import React, { useState } from 'react';
import styles from './ProductStars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as outlineStar } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

const ProductStars = ({ stars, myStars, onClick }) => {
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleStarClick = clickedStars => {
    onClick(clickedStars);
  };

  const handleStarHover = hoveredStar => {
    setHoveredStar(hoveredStar);
  };

  const renderStar = index => {
    const isMyStarFilled = myStars > 0 && index <= myStars;
    const isStarFilled = stars > 0 && index <= stars;
    const isMyStarOutline = myStars > 0 && index > myStars;
    const isStarOutline = stars > 0 && index > stars;
    const isHoveredStar = index <= hoveredStar;

    return (
      <a
        key={index}
        onMouseEnter={() => handleStarHover(index)}
        onMouseLeave={() => handleStarHover(0)}
        onClick={() => handleStarClick(index)}
      >
        <FontAwesomeIcon
          icon={
            isHoveredStar || isMyStarFilled
              ? filledStar
              : isMyStarOutline
              ? outlineStar
              : isStarFilled
              ? filledStar
              : isStarOutline
              ? outlineStar
              : outlineStar
          }
          style={{
            color:
              isHoveredStar || isMyStarFilled || isMyStarOutline ? '#d58e32' : 'black',
          }}
          className={isHoveredStar ? styles.hoverStars : ''}
        />
      </a>
    );
  };

  return (
    <div className={styles.stars} onMouseLeave={() => handleStarHover(0)}>
      {[1, 2, 3, 4, 5].map(i => renderStar(i))}
    </div>
  );
};

ProductStars.propTypes = {
  stars: PropTypes.number,
  myStars: PropTypes.number,
  selectedStars: PropTypes.number,
  onClick: PropTypes.func,
};

export default ProductStars;
