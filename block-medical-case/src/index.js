import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Web3Provider from 'react-web3-provider';
import Web3 from 'web3';
import registerServiceWorker from './serviceWorker';


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
// const baseUrl = 'http://localhost:3000';
const rootElement = document.getElementById('root');

const MainCnt = () => (
  <Web3Provider
  defaultProvider={(cb) => cb(new Web3(new Web3.providers.HttpProvider("http://localhost:7545")))}
  loading="Loading..."
  error={(err) => `Connection error: ${err.message}`}
  className="Outer"
  >
    <App />
  </Web3Provider>
);

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <MainCnt />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();
