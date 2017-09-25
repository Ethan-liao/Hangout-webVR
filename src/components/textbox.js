import React from 'react';
import 'aframe';
import {Entity} from 'aframe-react';

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleCLick = this.handleCLick.bind(this);
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
        firebase-broadcast=" componentsOnce: value;components: geometry, material, position"
        >


      </Entity>

    )
  }
}

export default Textbox;
