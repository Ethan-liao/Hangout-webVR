import React from 'react';
import 'aframe';
import {Entity, Scene} from 'aframe-react';
import keyCodes from './keystrokes.js';

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleCLick = this.handleCLick.bind(this);
    // this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyDown = ()=>{console.log("Oh hello there")};
    this.state = {
      text: keyCodes[3],
      typeStatus:false
    };
  }

  changeColor() {
    const colors = ['red', 'blue', 'orange', 'green', 'purple']
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  handleCLick() {
    console.log("handleCLick's been clicked!!!!");
    this.setState({typeStatus:true});

  }

  // onKeyDown(e){
  //    e.preventDefault()
  //   console.log(e.nativeEvent.keyCode);
  // }

  render() {
    return (

      <Entity
        geometry={{
          primitive: 'plane',
          width: 0.7,
          height: 0.2
        }}
        material={{
          color: 'black',
          opacity: 0.6
        }}
        position={{
          x: -0.85,
          y: -0.70,
          z: -1
        }}
        events={{click:this.handleCLick}}
        >

      
      </Entity>

    )
  }
}

export default Textbox;
