import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';
import 'aframe-physics-components';
import 'aframe-room-component';
import Officeroom from './components/room'
import Bigbox from './components/box'

class App extends Component {
  render() {
    return (

      <a-scene>



        <a-text

          value="Error Fo o Fo"
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
          >
          <a-animation attribute="position" to="-1 2 -3" direction="alternate" dur="2000"
              repeat="indefinite">

              </a-animation>
          </a-box>

          <a-sphere
            position="-8 1.25 -5"
            radius="1.25"
            color="#EF2D5E" />

          <a-cylinder
            position="8 0.75 -3"
            radius="0.5"
            height="1.5"
            color="#FFC65D" />

{/* lighting */}
          {/* <a-light type="ambient" color="#445451"></a-light>
          <a-light type="point" intensity="2" position="0 10 0"></a-light> */}


{/* Ceiling  */}
          <a-plane
            static-body
            // src="#groundTexture"
            position="0 10 -4"
            rotation="90 0 0"
            scale="20 20 0"
            // repeat="10 10"
            color="red" />
{/* Ground           */}
          <a-plane
            static-body
            position="0 0 -4"
            rotation="-90 0 0"
            scale="20 20 0"
            // repeat="10 10"
            color="black" />
{/* Adding object */}
          <a-assets>
            <a-asset-item id="tree" src="./static-assets/whiteboard.dae"></a-asset-item>
          </a-assets>

          <a-collada-model src="#tree"></a-collada-model>

          <Bigbox/>
      <Officeroom/>

           {/* Camera cursor */}
           <a-camera
            position="-16 0 13"
            visible="true"
            color="#0095DD"
            opacity="0.5">
            >
            <a-cursor></a-cursor>
          </a-camera>
        </a-scene>
    );
  }
}

export default App;
