import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Quantity.module.scss';
import Button from '../Button/Button';

const Quantity = ({ value, onChange, onDelete }) => {
  const [quantity, setQuantity] = useState(value);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    } else {
      onDelete();
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange(newQuantity);
  };

  return (
    <div className={`row ${styles.root}`}>
      <Button variant={'outline'} onClick={handleDecrease}>
        -
      </Button>
      <input type='text' id='quantity' value={quantity} readOnly />
      <Button variant={'outline'} onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
};

Quantity.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Quantity;
