import React from 'react';
import 'aframe';
import 'aframe-physics-system';
import 'aframe-physics-components';
import 'aframe-room-component';

class Officeroom extends React.Component {
  render() {
    return (

      // <a-scene fog="color: #50bfe7; far: 0; type: linear;">
      //   <a-assets>
      //     <a-asset-item id="modeldae" src="./static-assets/model.dae"></a-asset-item>
      //     <a-asset-item id="whiteboarddae" src="./static-assets/whiteboard.dae"></a-asset-item>
      //   </a-assets>
      //
      //   <a-entity id="main-camera-wrapper" position="0 1.8 6" rotation="0 0 0">
      //     <a-camera id="main-camera" user-height="0" visible="true" wasd-controls="enabled: true; easing: 10; acceleration: 75; fly: false;"
      //     cursor="rayOrigin: mouse;" raycaster="objects: .clickable"></a-camera>
      //   </a-entity>
      //
      //   <a-sky id="sky" position="0 0 0" rotation="0 0 0" scale="-1 1 1" radius="5000" segments-width="64"
      //   segments-height="20" color="#072036" opacity="1" flat-shading="true" shader="standard"
      //   side="double" repeat="1 1" visible="true"></a-sky>
      //
      //   <a-plane id="ground" position="0 0 0" rotation="-90 0 0" width="5000" height="5000"
      //   color="#283c43" opacity="1" shader="standard" side="double" metalness="0.5" roughness="1"
      //   repeat="1 1" visible="true"></a-plane>
      //
      //   <a-collada-model id="collada-model" position="-0.80 0.00 2.10" rotation="0 1 0"
      //   scale="1.2 1.5 1.5" collada-model="#modeldae" visible="true"></a-collada-model>
      //
      //   <a-collada-model id="collada-model-1" position="-1.40 0.90 -7.40"
      //   rotation="0 0 0" scale="1.5 1.5 1" collada-model="#whiteboarddae" visible="true"></a-collada-model>
      //
      //   <a-light id="point-light-1" position="0.30 3.20 -1.10" type="point"
      //   color="#ffffff" intensity="1.62" distance="0" light="castShadow: false;" visible="true"></a-light>
      //
      //   <a-box id="box" position="0 0 0" rotation="0 0 0.00" scale="10 10 15"
      //   width="1" height="1" depth="1" color="#ffffff" opacity="1" shader="standard" side="double"
      //   metalness="0.5" roughness="1" repeat="1 1" visible="true" class="clickable" animation="startEvents: click; property: position; to: 0 0 0; dur: 2000; easing: linear; elasticity: 400; delay: 0; dir: normal; loop: 0; "></a-box>
      //
      //   <a-collada-model id="collada-model-2" position="-4.30 0.90 -7.40" rotation="0 0 0"
      //   scale="0.7 1.5 1" collada-model="#whiteboarddae" visible="true"></a-collada-model>
      // </a-scene>




      //
      <rw-room position="-20 0 -2"  material="color:#866">
          <rw-floor position='0 0 0' color='gray'></rw-floor>
          <rw-wall position="10 0 0"></rw-wall>
          <rw-wall position="10 0 10"></rw-wall>
          <rw-wall position="0 0 10"></rw-wall>
          <rw-wall position="0 0 0">
          <rw-doorhole id="holeA"></rw-doorhole>
          <rw-doorlink from="#holeA" to="#holeA" position="2.5 0 0"></rw-doorlink>
           </rw-wall>
      </rw-room>

      /* <rw-room position="-18 0 -3">
             <rw-wall position=" 1 0 -1" material="color:#787"></rw-wall>
             <rw-wall position=" 1 0  1" material="color:#877">
               <rw-doorhole id="holeB"></rw-doorhole>
             </rw-wall>
                <rw-wall position="-1 0  1" material="color:#878"></rw-wall>
                   <rw-wall position="-1 0 -1" material="color:#778"></rw-wall>
     </rw-room> */

    )
  }
}

export default Officeroom;
