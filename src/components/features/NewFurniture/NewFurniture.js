import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getViewport } from '../../../redux/viewportRedux';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../Swipable/Swipable';
import ComparedProductsBox from '../../common/ComparedProductsBox/ComparedProductsBox';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    fadeOut: false,
  };

  handlePageChange(newPage) {
    this.setState({ fadeOut: true }); // Apply fade-out animation
    setTimeout(() => {
      this.setState({ activePage: newPage, fadeOut: false }); // Switch page and remove fade-out animation
    }, 300);
  }

  handleCategoryChange(newCategory) {
    this.setState({ fadeOut: true }); // Apply fade-out animation
    setTimeout(() => {
      this.setState({ activeCategory: newCategory, fadeOut: false }); // Switch category and remove fade-out animation
    }, 300);
  }

  render() {
    const { categories, products, compared, viewport } = this.props;
    const { activeCategory, activePage, fadeOut } = this.state;
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const productsPerPage = viewport === 'desktop' ? 8 : viewport === 'tablet' ? 2 : 1;
    const pagesCount = Math.ceil(categoryProducts.length / productsPerPage);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory ? styles.active : ''}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <Swipeable
            onSwipeRight={() => {
              if (activePage > 0) {
                this.handlePageChange(activePage - 1);
              }
            }}
            onSwipeLeft={() => {
              if (activePage < pagesCount - 1) {
                this.handlePageChange(activePage + 1);
              }
            }}
          >
            <div className={`row ${fadeOut ? styles.fade : ''}`}>
              {categoryProducts
                .slice(activePage * productsPerPage, (activePage + 1) * productsPerPage)
                .map(item => (
                  <div className='col-lg-3 col-sm-6 col-12' key={item.id}>
                    <ProductBox {...item} />
                  </div>
                ))}
            </div>
          </Swipeable>

          <div className='row'>
            {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
              <div key={item.id} className='col-3'>
                <ProductBox {...item} />
              </div>
            ))}
          </div>
          {compared > 0 ? <ComparedProductsBox /> : ''}
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  compared: PropTypes.number,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  viewport: PropTypes.string, // Added prop type for viewport
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

const mapStateToProps = state => ({
  viewport: getViewport(state), // Get viewport from Redux store
});

export default connect(mapStateToProps)(NewFurniture);
