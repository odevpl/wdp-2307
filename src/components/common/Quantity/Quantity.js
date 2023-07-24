import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quantity.module.scss';
import Button from '../Button/Button';

const Quantity = ({ value, onChange }) => {
  const handleDecrease = () => {
    if (value > 1) {
      const newQuantity = value - 1;
      onChange(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = value + 1;
    onChange(newQuantity);
  };

  return (
    <div className={`row ${styles.root}`}>
      <Button variant={'outline'} onClick={handleDecrease}>
        -
      </Button>
      <input type='text' id='quantity' value={value} readOnly />
      <Button variant={'outline'} onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
};

Quantity.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default Quantity;
