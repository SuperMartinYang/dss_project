import React, { Component } from 'react';
import { Col, Grid, Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Layout extends Component{
    displayName = Layout.name

    render() {
        return (
            <Grid fluid>
                <Col sm={2} className="bar">
                    <Row >
                        <LinkContainer className="buttonPanel" to={'/'} exact>
                            <Button>Home </Button>
                        </LinkContainer>
                    </Row>
                    <Row>
                        <LinkContainer className="buttonPanel" to={'/doctor'} exact>
                            <Button>Doctor </Button>
                        </LinkContainer>
                    </Row>
                    <Row>
                        <LinkContainer className="buttonPanel" to={'/history'} exact>
                            <Button>History </Button>
                        </LinkContainer>
                    </Row>
                    <Row>
                        <LinkContainer className="buttonPanel" to={'/patient'} exact>
                            <Button>Patient </Button>
                        </LinkContainer>
                    </Row>
                </Col>
                <Col sm={10} className="content">
                    {this.props.children}
                </Col>
            </Grid>
        );
    }
}