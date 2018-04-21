//React
import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";

//Redux
import {createStore, applyMiddleware, combineReducers} from "redux";
import logger from "redux-logger";
import gameReducer from './reducers/reducer.js'

import App from "./containers/app.js";

const store = createStore(combineReducers({game: gameReducer}), {}, applyMiddleware(logger));

render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('react-root'));