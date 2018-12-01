import React, { Component } from 'react';
import { withWeb3 } from 'react-web3-provider';
import TruffleContract from 'truffle-contract';

import { Route } from 'react-router';

import Home from './components/Home';
import Doctor from './components/Doctor';
import Patient from './components/Patient';
import History from './components/History';

import TPD from './ABI/MCH_ABI.json';
class MyContractProvider extends Component{
    constructor(props){
        super(props);
        // web3
        var {web3} = this.props;
        console.log(web3);
        web3.eth.getAccounts((error, accounts) => {
          this.state.account = accounts[0];
          web3.eth.defaultAccount = this.state.account;
        });
        this.state = {
          account: '',
          ct: null
        }
        console.log(this.state)
        this.web3 = web3;

        // *********************** TPD Contract ***************************************
        this.tpd = TruffleContract(TPD);
        this.tpd.setProvider(this.web3._provider);
        this.state.ct = this.tpd.at("0x9073e55193eacbb8e7df06d95524e0bb583fbf9f");
    }
    render(){
      console.log(this.state.account)
      return (
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/doctor' 
            render={(props) => <Doctor {...props} ctInfo={this.state}/>} />
          <Route path='/patient'
            render={(props) => <Patient {...props} ctInfo={this.state}/>} />
          <Route path="/history"
            render={(props) => <History {...props} ctInfo={this.state} />} />
        </div>
      );




































































































































































      
    }
}

var ContractProvider = withWeb3(MyContractProvider);
export default ContractProvider;