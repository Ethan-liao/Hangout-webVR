import React from 'react';
import './../CSS/bootstrap.css'
import '../CSS/App.css'
import {
  Button,
  Col,
  Grid,
  Panel,
  Row,
  Image,
  Jumbotron,
  ListGroupItem,
  ListGroup
} from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <Grid>
        <ListGroup>
          <ListGroupItem header="Welcome to Hangout-VR"></ListGroupItem>
          <Row bsStyle="secondary">

            <Col xsHidden md={4}>




                <Col   sm={4}>
                  <h4 >Meeting up on a whole new level</h4>
                </Col>

            </Col>

            <Col xs={6} md={4}>
              <Image src="https://unsplash.it/500/500?image=452" alt=""/>

            </Col>

          </Row>
          <ListGroupItem header="" href="#"></ListGroupItem>

          <Row bsStyle="secondary">
            <Col xs={6} md={4}>
              <Image src="https://unsplash.it/500/500?image=836" alt=""/>

            </Col>
            <Col xsHidden md={8}>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <Row>

                <Col sm={4} className="text"></Col>
                <Col sm={4}>
                  <h4 >Meet up virtually, anywhere, anytime</h4>
                  <p>About</p>
                </Col>
              </Row>
            </Col>

          </Row>

        </ListGroup>
        <Panel className="text-center" footer="Copyright &copy; Hangout-vr 2017"></Panel>
      </Grid>
    )
  }
}
export default Footer;
