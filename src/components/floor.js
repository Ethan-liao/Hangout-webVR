import React from 'react';
import 'aframe';
import {Entity} from 'aframe-react';

class Floor extends React.Component {

  render() {
    return (
      <Entity
        primitive="a-plane"
        id="ground"
        static-body
        position={{x:0, y: 0, z: 0}}
        rotation="-90 0 0"
        scale="0.517 0.766 1"
        width='20'
        height="20"
        // color="#283c43"
        opacity="1"
        roughness="1"
        repeat="30 30"
        src="#carpet"
       >
     </Entity>

    )
  }
}

export default Floor;
