import { combineReducers } from 'redux';
import addFormReducer from './addForm';
import listWorkReducer from './ListWork';
const myReducers =combineReducers({
    addFormReducer,
    listWorkReducer
});
export default myReducers;