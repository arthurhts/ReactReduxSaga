import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

import Routes from './routes';
import store, { persistor } from './store';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <GlobalStyles />
                    <Header />
                    <Routes />
                    <ToastContainer autoClose={5000} />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
