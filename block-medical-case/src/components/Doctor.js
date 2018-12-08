import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Form, FormGroup, Col, FormControl, Button, ControlLabel, HelpBlock} from 'react-bootstrap';
import History from './History';

export default class Doctor extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            redirect: false,
            patientAddr: '',
            patientKey: ''
        }
        var {ctInfo} = this.props;
        this.ctInfo = ctInfo;
        this.ct = ctInfo.ct;
        // this.ct.getKey('0x8865b10aed36a0a506b4b1cb999c6de03474cf32', {from:this.ctInfo.account}).then(res=>console.log(res));
    }

    handleChange(val, key){
        this.setState({[key]: val});
        // localStorage.setItem('patientAddr', this.state.patientAddr);
        this.ct.getKey(this.state.patientAddr, {from: this.ctInfo.account}).then(key => 
            (this.setState({patientKey: key}))
        ).then(
            console.log(this.state.patientKey)
        )
    }

    handleSubmit(){
        this.setState({redirect: true});
        // this.ct.getKey(this.state.patientAddr, {from: this.ctInfo.account}).then(console.log);
        // route to history with the patient key getted and patient addr
    }
    render(){
        if (this.state.redirect) return (<Redirect to={{pathname:'/history', state: {patientAddr: this.state.patientAddr, patientKey: this.state.patientKey}}} />);
        else return (
                <div className="MainContent">
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormGroup controlId="idWK">
                            <Col componentClass={ControlLabel} sm={2}>
                                Patient Address:
                            </Col>
                            <Col sm={8}>
                                <FormControl type="text" placeholder="PatientAddr" onChange={e => this.handleChange(e.target.value, 'patientAddr')}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={2} sm={8}>
                                <Button type="submit">Setup</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
        );
    }
}