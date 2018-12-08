import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, Button, ControlLabel, HelpBlock} from 'react-bootstrap';
export default class Patient extends Component {
    constructor(props){
        super(props);
        this.state = {
            account: "",
            encryptKey: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // get contract from props
        var {ctInfo} = this.props;
        this.ct = ctInfo.ct;
    }

    handleChange(val, key){
        this.setState({[key]: val});
    }

    handleSubmit(){
        // call the contract
        this.ct.setKey(this.ctInfo.account, this.state.encryptKey, {from: this.ctInfo.account});
        // windows.location.reload();
    }
    render(){       
        return (
            <div className="MainContent">
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="idWK">
                        <Col componentClass={ControlLabel} sm={2}>
                            Encrypt Key:
                        </Col>
                        <Col sm={8}>
                            <FormControl type="text" placeholder="EncryptKey" onChange={e => this.handleChange(e.target.value, 'encryptKey')}/>
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