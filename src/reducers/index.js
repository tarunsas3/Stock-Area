import { combineReducers } from 'redux';
import warehouseReducer from './wareHouseReducer';

const rootReducer = combineReducers({
  warehouse: warehouseReducer,
});

export default rootReducer;
