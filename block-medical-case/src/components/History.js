import React, { Component } from 'react';
import Hist from './History.json';
import { Form, FormGroup, Col, Row, FormControl, Button, ControlLabel, HelpBlock} from 'react-bootstrap';

export default class History extends Component {

    constructor(props){
        super(props);
        this.getHistories = this.getHistories.bind(this);
        this.addCase = this.addCase.bind(this);
        this.renderHistories = this.renderHistories.bind(this);
        this.decryptHistories = this.decryptHistories.bind(this);
        this.histories = [];
        /**
         * history structure:
         *  Date
         *  DoctorID
         *  Hospital
         *  Symptom
         *  Suggestion
         *  Treatment
         */
        this.newCase = {
            date: 0,
            doctorID: '',
            hospital: '',
            symptom: '',
            suggestion: '',
            treatment: ''
        }

        // var { ctInfo, patientAddr, patientKey } = this.props;
        // this.ct = ctInfo.ct;
        // this.patientAddr = patientAddr;
        // this.patientKey = patientKey;
        this.histories = this.getHistories("0x20764a436e5864ca703f2792759312f9c00c8af9");
        console.log(this.histories);
    }

    getHistories(patientAddr){
        // get history from fake backend
        return Hist[patientAddr];
        // decrypt patient history
    }

    addCase(patientAddr){

    }

    decryptHistories(){
        
    }

    encryptNewCase(){

    }

    handleChange(val, key){
        this.newCase[key] = val;
    }

    handleSubmit(){
        this.addCase();
        // use api to update
    }
    renderHistories(){
        return (
            this.histories.map(hist => {
                return (
                    <div className="panel" key={hist.date}>
                        <Row>
                            <Col sm={4}>
                                <p>Date: </p>{new Date(hist.date).getDate() + '/' + new Date(hist.date).getMonth() + '/' + new Date(hist.date).getFullYear()}
                            </Col>
                            <Col sm={4}>
                                <p>DoctorID: </p>{hist.doctorID}
                            </Col>
                            <Col sm={4}>
                                <p>Hospital: </p>{hist.doctorID}
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <p>symptom:</p>
                                <p>{hist.symptom}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <p>Suggestion:</p>
                                <p>{hist.suggestion}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <p>Treatment:</p>
                                <p>{hist.treatment}</p>
                            </Col>
                        </Row>
                    </div>
                );
            })
        )
    }

    render(){       
        return (
            <div className="MainContent">
                <h2>History</h2> 
                {this.renderHistories()}
                <h3>New Case</h3>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="idWK">
                        <Col componentClass={ControlLabel} sm={2}>
                            Date: 
                        </Col>
                        <Col sm={8}>
                            <FormControl type="text" placeholder="2018-04-11 10:20:30" onChange={e => this.handleChange(e.target.value, 'date')}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="idWK">
                        <Col componentClass={ControlLabel} sm={2}>
                            DoctorID: 
                        </Col>
                        <Col sm={8}>
                            <FormControl type="text" placeholder="Doctor ID" onChange={e => this.handleChange(e.target.value, 'doctorID')}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="idWK">
                        <Col componentClass={ControlLabel} sm={2}>
                            Hospital: 
                        </Col>
                        <Col sm={8}>
                            <FormControl type="text" placeholder="Hospital" onChange={e => this.handleChange(e.target.value, 'hospital')}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="idWK">
                        <Col componentClass={ControlLabel} sm={2}>
                            Symptom: 
                        </Col>
                        <Col sm={8}>
                            <FormControl type="text" placeholder="Symptom" onChange={e => this.handleChange(e.target.value, 'symptom')}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="idWK">
                        <Col componentClass={ControlLabel} sm={2}>
                            Suggestion: 
                        </Col>
                        <Col sm={8}>
                            <FormControl type="text" placeholder="Suggestion" onChange={e => this.handleChange(e.target.value, 'suggestion')}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="idWK">
                        <Col componentClass={ControlLabel} sm={2}>
                            Treatment: 
                        </Col>
                        <Col sm={8}>
                            <FormControl type="text" placeholder="WhisperKey" onChange={e => this.handleChange(e.target.value, 'whisperKey')}/>
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