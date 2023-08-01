import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './Redux/store';
import axios from "axios";
const URL = 'https://picountries-production-8136.up.railway.app/' 

axios.defaults.baseURL = URL
 
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>,
  
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//
  //$ npx create-react-app client
  //$ npm i react-router-dom@6.3.0
  //$ npm i redux@4.0.5 react-redux redux-thunk
  // npm start    