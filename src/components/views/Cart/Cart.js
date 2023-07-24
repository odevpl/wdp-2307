import React from 'react';
import styles from './Cart.module.scss';

import CartProduct from '../../common/CartProduct/CardProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/cartRedux';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../redux/cartRedux';

const Cart = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector(state => getAll(state)) || [];

  const deleteCartProductHandler = id => {
    dispatch(deleteProduct(id));
  };
  const proceedToCheckout = e => {
    e.preventDefault();
    for (let item of cartProducts) {
      dispatch(deleteProduct(item.id));
    }
  };

  const calculateSubtotal = () => {
    return cartProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  const calculateTotal = () => {
    return calculateSubtotal() + 20;

    console.log('cartProducts:', cartProducts);
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className='container py-4'>
          <div className='row justify-content-between'>
            <div className='col-11'>
              <h2 className={styles.title}>Cart</h2>
            </div>
            <nav className='col-1' aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <Link to='/'>
                    <FontAwesomeIcon icon={faHome} />
                  </Link>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  Cart
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className='container table-responsive'>
        <table className={`table align-middle  ${styles.table}`}>
          <thead>
            <tr>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'>Product</th>
              <th scope='col'>Price</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map(product => (
              <CartProduct
                key={product.id}
                actionDelete={deleteCartProductHandler}
                {...product}
              />
            ))}
            <tr>
              <td colSpan={6} className='align-middle'>
                <div className='row justify-content-between'>
                  <form className='row col-6'>
                    <div className='col'>
                      <input
                        type='text'
                        className='form-control'
                        id='coupon'
                        placeholder='Coupon Code'
                      ></input>
                    </div>
                    <div className={`col ${styles.button}`}>
                      <Button variant='main'>Apply coupon</Button>
                    </div>
                  </form>
                  <div className={`col-auto ${styles.button}`}>
                    <Button variant='main'>Update Cart</Button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='container table-responsive'>
        <div className='row justify-content-end'>
          <div className='col-6'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col' colSpan={2}>
                    Cart totals
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Subtotal</th>
                  <td>${calculateSubtotal().toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <th className={styles.total}>${calculateTotal().toFixed(2)}</th>
                </tr>
                <tr>
                  <td className={`text-center align-middle"`} colSpan={2}>
                    <div className='my-2 text-uppercase'>
                      <Button variant='main' onClick={proceedToCheckout}>
                        Proceed to checkout
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
