import React from 'react';
import 'aframe';
import 'aframe-physics-system';
import 'aframe-physics-components';
import 'aframe-room-component';

class Bigbox extends React.Component {
  render() {
    return (
      <a-box
        dynamic-body="mass:5"
        color='orange'
        position="5 0.5 -5"
        scale='5 5 5'
        >
        </a-box>
    )
  }
}

export default Bigbox;
