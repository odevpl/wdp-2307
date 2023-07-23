import React from 'react';
import styles from './CartProduct.module.scss';
import Button from '../Button/Button';
import Quantity from '../Quantity/Quantity';
import { useDispatch } from 'react-redux';
import { updateProductQuantity } from '../../../redux/cartRedux';

const CartProduct = ({ ...item }) => {
  const deleteCartProductHandler = e => {
    e.preventDefault();
    item.actionDelete(item.id);
  };

  const dispatch = useDispatch();

  const updateQuantityHandler = newQuantity => {
    dispatch(updateProductQuantity({ id: item.id, quantity: newQuantity }));
  };

  return (
    <tr className={styles.root}>
      <td className='align-middle'>
        <div className='text-center col'>
          <Button variant={'delete'} onClick={deleteCartProductHandler}>
            &#xd7;
          </Button>
        </div>
      </td>
      <td className='align-middle'>
        <div className={styles.photo}>
          <img src={item.picture} alt={item.name}></img>
        </div>
      </td>
      <td className='align-middle'>
        <p className='my-1'>{item.name}</p>
      </td>
      <td className={`${styles.price} align-middle`}>
        <p className='my-1'>$ {item.price}</p>
      </td>
      <td className='align-middle'>
        <Quantity
          value={item.quantity}
          onChange={updateQuantityHandler}
          onDelete={deleteCartProductHandler}
        />
      </td>
      <td className={`${styles.price} align-middle`}>
        <p className='my-1'>$ {item.price * item.quantity}</p>
      </td>
    </tr>
  );
};

export default CartProduct;
