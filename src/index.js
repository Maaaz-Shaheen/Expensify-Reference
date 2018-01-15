import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';



// Router 
import AppRouter from './routers/AppRouter';

// Styles
import 'normalize.css/normalize.css';
import './styles/styles.css'

// Redux

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
// import { setTextFilter, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import {Provider} from 'react-redux'; 

// Working
const store = configureStore(); 





const jsx = (
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
); 



ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();

