import React from 'react';
import {
  Button,
  PageHeader,
  Grid,
  Col,
  Row,
  NavItem,
  Nav,
  Thumbnail
} from 'react-bootstrap'

import Header from './header';
import 'react-dom'
import {Redirect} from 'react-router-dom';

class Account extends React.Component {
  constructor() {
    super()
    this.go3D = this.go3D.bind(this);
    this.state = {
      redirect:false
    }
  }
go3D(){
  this.setState({redirect:true});
}

  render() {
    if(this.state.redirect===true){
      return <Redirect to="/room"/>
    }
    return (
      <div>
        <Header/>
        <Grid >
          <Row className="show-grid">

            <PageHeader>Please select from the below</PageHeader>
            <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
              <NavItem eventKey="1">Meeting room</NavItem>
              <NavItem eventKey="2">Conference Hall</NavItem>
            </Nav>
          </Row>
          <hr/>
          <Row >

            <Col xs={6} md={4}>
              <Thumbnail src="../../assets/officeRoom1.png">
                <Row>
                  <Col xs={6} md={4}></Col>
                  <Col xs={6} md={4}>

                    <Button onClick={this.go3D} bsStyle="default">Select</Button>

                  </Col>
                </Row>
              </Thumbnail>
            </Col>




            <Col xs={6} md={4}>
              <Thumbnail src="../../assets/OfficeRoom.jpg">
                <Row>
                  <Col xs={6} md={4}></Col>
                  <Col xs={6} md={4}>

                    <Button  bsStyle="default">Select</Button>

                  </Col>
                </Row>
              </Thumbnail>
            </Col>


            <Col xs={6} md={4}>
              <Thumbnail src="../../assets/officeRoom3.jpg">
                <Row>
                  <Col xs={6} md={4}></Col>
                  <Col xs={6} md={4}>

                    <Button  bsStyle="default">Select</Button>

                  </Col>
                </Row>
              </Thumbnail>
            </Col>

          </Row>
        </Grid>
      </div>
    )
  }
}

export default Account;
