import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ children, onSwipeLeft, onSwipeRight }) => {
  const [startX, setStartX] = useState(null);

  const handleTouchStart = event => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = event => {
    const endX = event.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (Math.abs(deltaX) > 50) {
      // Check if the swipe distance is greater than 50px to consider it a valid swipe
      if (deltaX > 0 && onSwipeRight) {
        onSwipeRight();
      } else if (deltaX < 0 && onSwipeLeft) {
        onSwipeLeft();
      }
    }
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  onSwipeLeft: PropTypes.func,
  onSwipeRight: PropTypes.func,
};

export default Swipeable;
