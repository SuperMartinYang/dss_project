import React, { Component } from 'react';
import { Col, Grid, Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default class Layout extends Component{
    displayName = Layout.name

    render() {
        return (
            <Grid fluid>
                <Col sm={2}>
                    <Row >
                        <div className="panel">
                            <p>Learn more</p>
                            <LinkContainer to={'/'} exact>
                                <Button>Home </Button>
                            </LinkContainer>
                        </div>
                    </Row>
                    <Row>
                        <div className="panel">
                            {/* <p>Be a slave, get paid. </p> */}
                            <p>Doctor</p>
                            <LinkContainer to={'/doctor'} exact>
                                <Button>Doctor </Button>
                            </LinkContainer>
                        </div>
                    </Row>
                    <Row>
                        <div className="panel">
                            {/* <p>Be a master, life better. </p> */}
                            <p>History</p>
                            <LinkContainer to={'/history'} exact>
                                <Button>History </Button>
                            </LinkContainer>
                        </div>
                    </Row>
                    <Row>
                        <div className="panel">
                            {/* <p>Be a recipient, get what you want. </p> */}
                            <p>Patient</p>
                            <LinkContainer to={'/patient'} exact>
                                <Button>Patient </Button>
                            </LinkContainer>
                        </div>
                    </Row>
                </Col>
                <Col sm={10}>
                    {this.props.children}
                </Col>
            </Grid>
        );
    }
}