import React from 'react';
import styles from './CartProduct.module.scss';
import Button from '../Button/Button';
import Quantity from '../Quantity/Quantity';

const CartProduct = () => {
  return (
    <tr className={styles.root}>
      <td className='align-middle'>
        <div className='text-center col'>
          <Button variant={'delete'}>&#xd7;</Button>
        </div>
      </td>
      <td className='align-middle'>
        <div className={styles.photo}></div>
      </td>
      <td className='align-middle'>
        <p className='my-1'>Product name lorem ipsum</p>
      </td>
      <td className={`${styles.price} align-middle`}>
        <p className='my-1'>$15</p>
      </td>
      <td className='align-middle'>
        <Quantity value={1}></Quantity>
      </td>
      <td className={`${styles.price} align-middle`}>
        <p className='my-1'>$15</p>
      </td>
    </tr>
  );
};
export default CartProduct;
