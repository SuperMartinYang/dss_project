import React, { Component } from 'react';
import { Form, FormGroup, Col, Row, FormControl, Button, ControlLabel} from 'react-bootstrap';
import axios from 'axios';
import aes from 'aes-js';

export default class History extends Component {

    constructor(props){
        super(props);
        this.getHistories = this.getHistories.bind(this);
        this.addRecord = this.addRecord.bind(this);
        this.renderHistories = this.renderHistories.bind(this);
        this.decryptHistories = this.decryptHistories.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeShowHistory = this.changeShowHistory.bind(this);
        this.histories = [];
        this.state = {
            showHistory: false
        }
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
            patientAddr: '',
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
        // this.decryptHistories();
        this.patientAddr = '0x20764a436e5864ca703f2792759312f9c00c8af9';
        
    }
    
    componentDidMount() {
        this.getHistories("0x20764a436e5864ca703f2792759312f9c00c8af9").then(response => this.histories = response);
    }
    
    getHistories(patientAddr){
        // get history from fake backend
        return axios.get('http://127.0.0.1:5000/getHistory?address=' + patientAddr).then(response => response.data.result);
        // decrypt patient history
    }

    addRecord(){
        var ret;
        this.newCase.patientAddr = this.patientAddr;
        console.log(this.newCase);
        axios.post('http://127.0.0.1:5000/addRecord', this.newCase).then(function(res, err){
            if(err)
                ret = false;
            else ret = true;
        });
        return ret;
    }

    decryptHistories(){
        // this.histories.forEach(hist => (
        //     console.log(hist)
        // ));
    }

    encryptNewCase(){

    }

    handleChange(val, key){
        this.newCase[key] = val;
    }

    handleSubmit(){
        // use api to update
        this.addRecord()
    }
    renderHistories(){
        return (
            this.histories.map(hist => {
                console.log(hist)
                return (
                    <div className="panel" key={hist.date}>
                        <Row>
                            <Col sm={4}>
                                <p>Date: {new Date(hist.date).getDate() + '/' + new Date(hist.date).getMonth() + '/' + new Date(hist.date).getFullYear()}</p>
                            </Col>
                            <Col sm={4}>
                                <p>DoctorID: {hist.doctorID}</p>
                            </Col>
                            <Col sm={4}>
                                <p>Hospital: {hist.hospital}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <p>Symptom: {hist.symptom}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <p>Suggestion: {hist.suggestion}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <p>Treatment: {hist.treatment}</p>
                            </Col>
                        </Row>
                    </div>
                );
            })
        )
    }

    changeShowHistory(){
        this.setState({showHistory: true})
    }
    render(){
        return (
            <div className="MainContent">
                <h2>History</h2> 
                {/* <Button onClick={this.renderHistories()}>Previous History</Button> */}
                {this.state.showHistory ? this.renderHistories() : <Button onClick={this.changeShowHistory}>Previous History</Button>}
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