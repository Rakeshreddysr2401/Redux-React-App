import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { createStoreHook } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase';
import {reduxFirestore, getFirestore } from 'redux-firestore';
import fbConfig from './config/fbConfig';
//import firebase from './config/fbConfig';

const store=createStore(rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(fbConfig),reactReduxFirebase(fbConfig))
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} ><App /></Provider>
  </React.StrictMode>
);


