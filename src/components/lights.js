import React from 'react';


class Lighting extends React.Component {
  render() {
    return (
      <a-entity>
      <a-light
        position="-0.13 3.2 -3.1"
        type="point"
        color="#ffffff"
        intensity="0.95"
        distance="0"
        light="castShadow: false;"
        visible="true"
      ></a-light>

      <a-light
        position="-0.11 3.20 1.954"
        type="point"
        color="#ffffff"
        intensity="0.95"
        distance="0"
        light="castShadow: false;"
        visible="true"
      ></a-light>
    </a-entity>
    )
  }
}

export default Lighting;
