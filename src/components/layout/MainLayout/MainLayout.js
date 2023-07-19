import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateViewport } from '../../../redux/viewportRedux';
import { loadProducts } from '../../../redux/productsActions';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState('');

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 992) {
        setMode('desktop');
      } else if (screenWidth >= 576) {
        setMode('tablet');
      } else {
        setMode('mobile');
      }

      dispatch(updateViewport(mode));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch, mode]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
