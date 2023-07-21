import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import Blog from './components/views/Blog/Blog';
// import BenefitsPage from './components/views/BenefitsPage/BenefitsPage';
import Cart from './components/views/Cart/Cart';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import SearchPage from './components/views/SearchPage/SearchPage';
import AboutPage from './components/views/AboutPage/AboutPage';
import PolicyPage from './components/views/PolicyPage/PolicyPage';
import ConditionsPage from './components/views/ConditionsPage/ConditionsPage';
import OnlineSupPage from './components/views/OnlineSupPage/OnlineSupPage';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/login'} component={LoginPage} />
          <Route exact path={'/register'} component={RegisterPage} />
          <Route exact path={'/shop/:categoryId'} component={ProductList} />
          <Route exact path={'/product/:productId'} component={ProductPage} />
          <Route exact path={'/blog'} component={Blog} />
          {/* <Route exact path={'/benefits'} component={BenefitsPage} /> */}
          <Route exact path={'/cart'} component={Cart} />
          <Route exact path={'/search'} component={SearchPage} />
          <Route exact path={'/about'} component={AboutPage} />
          <Route exact path={'/policy'} component={PolicyPage} />
          <Route exact path={'/condition'} component={ConditionsPage} />
          <Route exact path={'/onlineSuport'} component={OnlineSupPage} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
