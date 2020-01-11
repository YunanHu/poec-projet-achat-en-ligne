/**
 * Combine Reducers Redux Data
 */
import { combineReducers } from 'redux';
import { IntlReducer as ReducersIntl } from 'react-redux-multilingual'

// Create Custome Reducers
import products  from './products';
import filters from './filters';
import login from './loginreducer';

export default combineReducers({
    data: products,
    filters: filters,
    login: login,
    ReducersIntl
});