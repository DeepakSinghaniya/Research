import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
 
import App from './App';
import usersListReduser from './Store/Redusers/userList';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    userList: usersListReduser
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const appWithStore = <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>;

ReactDOM.render(appWithStore, document.getElementById('root'));
registerServiceWorker();
