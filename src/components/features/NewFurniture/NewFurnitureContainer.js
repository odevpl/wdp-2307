import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getCountCompared } from '../../../redux/comparedReducer';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  compared: getCountCompared(state),
});

export default connect(mapStateToProps)(NewFurniture);
