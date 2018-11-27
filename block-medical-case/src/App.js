import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContractProvider from './ContractProvider';
import Layout from './components/Layout'
class App extends Component {
  render() {
    return (
      <Layout>
        <ContractProvider />
      </Layout>
    );
  }
}

export default App;
