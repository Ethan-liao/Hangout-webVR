import React, { Component } from 'react';
import 'aframe'

class App extends Component {
  render() {
    return (
      <a-scene>
        {/* background color */}

      <a-assets>
        <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg" alt="My Awesome1"></img>
        <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"></img>
        {/* <img id="skyTexture"
          src="https://i.imgur.com/mYmmbrp.jpg"  alt="My Awesome">
        </img> */}
      </a-assets>
      {/* <a-sky src="#skyTexture"></a-sky> */}

        {/* <a-box
        src="#skyTexture"
        position="0 2 -5"
        rotation="0 45 45"
        scale="2 2 2">

        </a-box> */}


        <a-text
          value="Hello, World!"
          position='-3 3.5 -5'
          color='black'

          scale='5 5 5'
          >
          </a-text>
          <a-box
            position="-1 0.5 -3"
            rotation="0 45 0"
            color="#4CC3D9"
            // scale=" 2 2 2"
          > <a-animation attribute="position" to="-1 2 -3" direction="alternate" dur="2000"
              repeat="indefinite"></a-animation>
          </a-box>
          <a-sphere
            position="0 1.25 -5"
            radius="1.25"
            color="#EF2D5E" />
          <a-cylinder
            position="1 0.75 -3"
            radius="0.5"
            height="1.5"
            color="#FFC65D" />


          <a-light type="ambient" color="#445451"></a-light>
          <a-light type="point" intensity="2" position="2 4 4"></a-light>
          <a-plane
            src="#groundTexture"
            position="0 0 -4"
            rotation="-90 0 0"
            scale="10 10 0"
            // repeat="10 10"
            color="#7BC8A4" />
          <a-camera>
            <a-cursor></a-cursor>
          </a-camera>
        </a-scene>
    );
  }
}

export default App;
