import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, Button, ControlLabel, HelpBlock} from 'react-bootstrap';

export default class Doctor extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        var {ctInfo} = this.props;
        this.ct = ctInfo.ct;
    }

    handleChange(val, key){
        this.setState({[key]: val});
    }

    handleSubmit(){
        // this.ct.getKey(this.state.patientAddr, {from: this.ctInfo.account}).then(res => 
        //     this.context.router.push({
        //         pathname: '/hisotry',
        //         state: {patientAddr: this.state.patientAddr, patientKey: res}
        //     })
        // )
        this.ct.getKey(this.state.patientAddr, {from: this.ctInfo.account}).then(res=>console.log(res));
        // route to history with the patient key getted and patient addr
    }
    render(){       
        return (
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