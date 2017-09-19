import React from 'react';


class Lighting extends React.Component {
  render() {
    return (
      <a-entity>
      <a-light
        position="0.30 3.20 -3.10"
        type="point"
        color="#ffffff"
        intensity="1"
        distance="0"
        light="castShadow: false;"
        visible="true"
      ></a-light>

      <a-light
        position="0.30 3.20 5"
        type="point"
        color="#ffffff"
        intensity="1"
        distance="0"
        light="castShadow: false;"
        visible="true"
      ></a-light>
    </a-entity>
    )
  }
}

export default Lighting;
