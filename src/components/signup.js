import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl
} from 'react-bootstrap'
import './../CSS/bootstrap.css'
import '../CSS/App.css'
import 'react-dom'


import {NavLink} from 'react-router-dom'


class Signup extends React.Component {

  render() {
    return (
      <div>
{/* BEGIN-Sing up */}
                  <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                        Enter your email
                      </Col>
                      <Col sm={10}>
                        <FormControl type="email" placeholder="Email"/>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col componentClass={ControlLabel} sm={2}>
                        Enter your name
                      </Col>
                      <Col  sm={10}>
                        <FormControl type="text" placeholder="Name"/>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col componentClass={ControlLabel} sm={2}>
                        Enter your username
                      </Col>
                      <Col  sm={10}>
                        <FormControl type="text" placeholder="Name"/>
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                      <Col componentClass={ControlLabel} sm={2}>
                        Enter your password
                      </Col>
                      <Col sm={10}>
                        <FormControl type="password" placeholder="Password"/>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col smOffset={2} sm={10}>
                        <Button type="submit">
                          Submit
                        </Button>
                      </Col>
                      <Col smOffset={2} sm={10}>
                        <NavLink to="/mainPage">Cancel</NavLink>
                      </Col>
                    </FormGroup>
                  </Form>
      </div>
    )
  }
}

export default Signup;
