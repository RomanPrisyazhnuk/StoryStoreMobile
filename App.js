import App from './src/components/App';
import configureStore from './src/redux/configureStore';
import { Provider } from 'react-redux';
import React from 'react';

const store = configureStore();

const EntryPoint = () => (
    <Provider store={store}>
        <App />
    </Provider>);

export default EntryPoint;
