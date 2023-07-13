import React from 'react';
import styles from './Cart.module.scss';

import CartProduct from '../../common/CartProduct/CardProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const Cart = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className='container py-4'>
          <div className='row justify-content-between"'>
            <div className='col'>
              <h2 className={styles.title}>Cart</h2>
            </div>
            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <a href='/'>
                    <FontAwesomeIcon icon={faHome} />
                  </a>
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
            <CartProduct />
            <CartProduct />
          </tbody>
          <tfoot>
            <th colSpan={6} className='align-middle'>
              <div className='row justify-content-between'>
                <form className='col-auto row g-3 '>
                  <div>
                    <input
                      type='text'
                      className='form-control'
                      id='coupon'
                      placeholder='Coupon Code'
                    ></input>
                  </div>
                  <div className={styles.button}>
                    <Button variant='main'>Apply coupon</Button>
                  </div>
                </form>
                <div className={`col-auto ${styles.button}`}>
                  <Button variant='main'>Update Cart</Button>
                </div>
              </div>
            </th>
          </tfoot>
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
                  <td>$30.00</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <th className={styles.total}>$30.00</th>
                </tr>
                <tr>
                  <td className={`text-center align-middle"`} colSpan={2}>
                    <div className='my-2 text-uppercase'>
                      <Button variant='main'>Proceed to checkout</Button>
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
