import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Make sure to import Provider from react-redux
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store,persistor } from './Components/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { Persistor } from 'redux-persist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}></PersistGate>
        <App/>
  </Provider>,
);

reportWebVitals();