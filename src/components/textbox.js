import React from 'react';
import 'aframe';
import {Entity, Scene} from 'aframe-react';

class Textbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {color: 'red'};
  }

  changeColor(){
    const colors=['red','blue','orange','green','purple']
    this.setState({
      color:colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render() {
    return (
      

        <Entity
          geometry={{primitive: 'plane', width:0.5, height:0.2}}
          material={{color: 'black', opacity:0.6}}
          position={{x:-0.75, y: -0.75, z: -1}}
          >
          <a-text
            value="My textbox"
            width="0.5"
            position="-0.2 0 0"
            >
          </a-text>
          </Entity>


    )
  }
}

export default Textbox;
