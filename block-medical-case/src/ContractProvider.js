import React, { Component } from 'react';
import { withWeb3 } from 'react-web3-provider';
import TruffleContract from 'truffle-contract';

import { Route } from 'react-router';

import Home from './components/Home';
import Doctor from './components/Doctor';
import Patient from './components/Patient';
import History from './components/History';

import MedicalCaseABI from './contract_design/build/contracts/MedicalCase.json';
class MyContractProvider extends Component{
    constructor(props){
        super(props);
        // web3
        this.state = {
          account: '',
          ct: null
        }
        var {web3} = this.props;
        console.log(web3);
        web3.eth.getAccounts((error, accounts) => {
          this.state.account = accounts[0];
          web3.eth.defaultAccount = this.state.account;
        });
        console.log(this.state)
        this.web3 = web3;

        // *********************** MedicalCase Contract ***************************************
        this.mc = TruffleContract(MedicalCaseABI);
        this.mc.setProvider(this.web3._provider);
        this.state.ct = this.mc.at("0x5b7a3ad8cd4b5773bdfb6e0e5b2893b38dbe7e5f");
    }
    render(){
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