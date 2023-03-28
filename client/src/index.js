import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store,{persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react';
import Contextprovider from './components/context/ContextProvider';
ReactDOM.render(
  <>
  <Contextprovider>
  <Provider store={store}>
  <PersistGate persistor={persistor}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </PersistGate>
</Provider>
</Contextprovider>

  
  </>,
  document.getElementById('root')
);