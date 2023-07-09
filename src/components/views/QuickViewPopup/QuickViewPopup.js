import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
const QuickViewPopup = ({ id, onClose }) => {
  const product = useSelector(state => getProductById(state, id));

  return (
    <div>
      <div>
        <button className='btn-danger my-2 mx-1' onClick={onClose}>
          X
        </button>
        <h4 className='mx-2'>{product.name}</h4>
      </div>
      <div>
        <div className='row'>
          <div className='col-md-6'>
            <img src={product.picture} alt={product.name} className='img-fluid' />
          </div>
          <div className='col-md-6'>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Stars:</strong> {product.stars}
            </p>
            <p>
              <strong>Promo:</strong> {product.promo}
            </p>
            <p>
              <strong>New Furniture:</strong> {product.newFurniture ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

QuickViewPopup.propTypes = {
  id: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default QuickViewPopup;
