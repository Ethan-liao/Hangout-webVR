import React from 'react';
import {Entity} from 'aframe-react';
// import {Entity, Scene} from 'aframe-react';

class Room extends React.Component {

  render() {
    return (
      <Entity>
        <a-box
          id="box"
          position="0 2.775 0"
          scale="10 8 15"
          width="1"
          height="0.7"
          depth="1"
          color="gray"
          opacity="1"
          side="double"
          roughness="1"
          visible='false'
          // repeat="1 1"
          >
        </a-box>
        <Entity
          id="right"
          primitive="a-plane"
          static-body
          position={{x:4.834, y: 0.564, z: -0.19}}
          rotation="0 90 0"
          scale='0.993 0.088 1'
          width='15'
          height="15"
          color="gray"
          opacity="1"
          side="double"
          roughness="1"
         >
        </Entity>

        <Entity
          id="left"
          primitive="a-plane"
          static-body
          position={{x:-5.04, y: 2.715, z: -0.06}}
          rotation="0 90 0"
          scale='1 0.382 0.356'
          width='15'
          height="15"
          color="gray"
          opacity="1"
          side="double"
          roughness="1"
         >
        </Entity>
        <Entity
          primitive="a-plane"
          id="back"
          static-body
          position={{x:-0.12, y: 2.741, z: -7.58}}
          rotation="0 0 0"
          scale='0.66 0.386 1'
          width='15'
          height="15"
          color="gray"
          opacity="1"
          side="double"
          roughness="1"
         >
        </Entity>
        <Entity
          primitive="a-plane"
          id="front"
          static-body
          position={{x:-0.13, y: 2.765, z: 7.255}}
          rotation="0 0 0"
          scale='0.668 0.376 1'
          width='15'
          height="15"
          color="gray"
          opacity="1"
          side="double"
          roughness="1"
         >
        </Entity>
        <Entity
          primitive="a-plane"
          id="ceiling"
          static-body
          position={{x:-0.18, y: 5.584, z: -0.19}}
          rotation="90 0 0"
          scale='0.67 1 1'
          width='15'
          height="15"
          color="gray"
          opacity="1"
          side="double"
          roughness="1"
         >
        </Entity>
        <a-collada-model
          src="#door"
          id="door"
          position="-5.08 -0.09 5.688"
          rotation="0 90 0"
          scale="1.213 1.216 1"
          visible="true">
          </a-collada-model>
          <a-collada-model
            src="#glasswall"
            position="4.941 1.124 7.446"
            rotation="0 90 0"
            scale="3.482 2.042 1"
            visible="true">
            </a-collada-model>
</Entity>
    )
  }
}

export default Room;
