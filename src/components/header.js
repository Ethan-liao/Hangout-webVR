import React from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap'
import {Redirect} from 'react-router-dom';
import 'react-dom'
import base from '../base'

class Header extends React.Component {
  constructor(){
    super()
    this.goHome =this.goHome.bind(this);
    this.state={
      redirect:false
    }
  }
goHome(){
    base.unauth();
    this.setState({redirect:true})
}
  render() {
    if (this.state.redirect === true){
      return <Redirect to="/"/>
    }
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header >
          <Navbar.Brand>
            <a >Hangout-vr</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>

            <NavItem onClick={this.goHome}>
              Sign out
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default Header;
