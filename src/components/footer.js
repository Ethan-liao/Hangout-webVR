import React from 'react';
import './../CSS/bootstrap.css'
import '../CSS/App.css'
import {
  Col,
  Grid,
  Panel,
  Row,
  Image,
} from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    const style={

      padding:'180px 0px 100px 60px'
    }
    const textStyle={
      padding:'180px 0px 100px 0px'

    }
    const bottomBorder={
      borderBottomStyle: 'ridge'

    }
    return (
      <Grid>
          <Row>
            <h1 className="text-center">Welcome to Hangout-VR</h1>
          </Row>
          <br/>
          <p style={bottomBorder}></p>
          <br/>
          <Row bsStyle="secondary">
            <Col sm={6}>

                  <h2 style={style}>Meeting up on a whole new level</h2>

            </Col>
            <Col className="text-right" sm={6}>
              <Image src="https://unsplash.it/500/500?image=452" alt=""/>
            </Col>

          </Row>
          <br/>
          <p style={bottomBorder} ></p>
          <br/>
          <Row bsStyle="secondary">
            <Col  sm={6}>
              <Image src="https://unsplash.it/500/500?image=836" alt=""/>
            </Col>
            <Col sm={6}>
                  <h2 style={textStyle} >Meet up virtually, anywhere, anytime</h2>
            </Col>
          </Row>
          <br/>
          <p style={bottomBorder} ></p>
          <br/>
        <Panel className="text-center" footer="Copyright &copy; Hangout-vr 2017"></Panel>
      </Grid>
    )
  }
}
export default Footer;
