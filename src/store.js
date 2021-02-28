import myReducers from './reducers/index.js';
import {createStore} from 'redux';

export const store =createStore(myReducers);