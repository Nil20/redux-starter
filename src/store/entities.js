import { combineReducers } from "redux";
import bugReducer from './bugs';
import productReducer from './products';

export default combineReducers({
    bugs: bugReducer,
    products: productReducer,
})