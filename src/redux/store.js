import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import navbarReducer from './NavbarDuck';

const rootReducer = combineReducers({
	currentLink: navbarReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
	const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

	return store;
}
