import { createStore } from 'redux';

import todosState from '../reducers/';

export default configureStore = (initialState) => {
    return createStore(todosState, initialState);
} 