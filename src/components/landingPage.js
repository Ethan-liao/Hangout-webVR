import React from 'react';
// CSS
import {
  Navbar,
  Nav,
  NavItem,
  Modal,
  Button,
  Form,
  FormGroup,
  Col
} from 'react-bootstrap';
import './../CSS/bootstrap.css';
import './../CSS/App.css';


// import Newpage from "./newpage"
import Footer from './footer';
import 'react-dom'
import {Redirect} from 'react-router-dom';
import base from '../base';

class Landingpage extends React.Component {
  constructor(props) {
    super(props)
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.logout = this.logout.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.authenticate =this.authenticate.bind(this);
    this.state = {
      showModal: false,
      uid:false,
      logout:false
    };
  }

  // componentDidMount(){
  //       base.onAuth((user)=>{
  //         if(user){
  //           this.authHandler(null,{user});
  //         }
  //       })
  //   }

  close() {
    this.setState({showModal: false});
  }

  open() {
    this.setState({showModal: true});
  }

  authenticate(provider){
    // console.log(`trying to log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(err, authData) {
      console.log(authData);
      if (err) {
        console.error(err);
        return;
      }
        this.setState({
          uid: authData.user.uid,
          showModal:false
          // owner: authData.user.uid
        });
    }

loginRender(){
  return(
    console.log("hello")
  )
}

logout(){
    base.unauth();
    this.setState({uid:null});
  }

  render() {
    // const logout = <NavItem onClick={this.logout}>Sign out</NavItem>
    if(this.state.uid){
      return <Redirect to="/account/"/>

    }
    // if(!this.state.uid){
    //   return <Redirect to="/"/>
    //
    // }
    return (
      <div>

        <Navbar inverse collapseOnSelect>
          <Navbar.Header >
            <Navbar.Brand>
              <a >Hangout-vr</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
  {/* Begin-Sign in form */}
              <NavItem onClick={this.open}>Sign In
              </NavItem>
              <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                  <Modal.Title>Sign in</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                  <Form horizontal>

                    <FormGroup>
                      <Col smOffset={1} sm={10}>
                      </Col>
                      <Col smOffset={1} sm={10}>
                         <Button bsStyle="danger" bsSize="large" onClick={() => this.authenticate('google')} block>Log in with Google</Button>

                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col smOffset={1} sm={10}>
                         <Button bsStyle="primary" bsSize="large" onClick={() => this.authenticate('facebook')} block>Log in with Facebook</Button>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col smOffset={1} sm={10}>
                         <Button bsStyle="info" bsSize="large" onClick={() => this.authenticate('twitter')} block>Log in with twitter</Button>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col smOffset={1} sm={10}>
                         <Button bsStyle="default" bsSize="large" onClick={() => this.authenticate('github')} block>Log in with Github</Button>
                      </Col>
                    </FormGroup>

                  </Form>

                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
              </Modal>
{/* END-Sign in form  */}

              {/* <NavItem >
                <Link to="/signup">Sign up</Link>
              </NavItem> */}
              {/* {logout} */}

             </Nav>
           </Navbar.Collapse>
         </Navbar>
        {/* <Newpage/> */}
        <Footer/>

      </div>
    )
  }
}

export default Landingpage;
