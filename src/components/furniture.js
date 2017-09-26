import React from 'react';
import {Entity} from 'aframe-react';

class Furniture extends React.Component {
  render() {
    return (
      <a-entity >


        <a-collada-model

          src="#table"
          id="collada-model"
          position="-1.4 0 1.75"
          // rotation="0 90 0"
          scale="1.4 1.4 1.7"
          visible="true"
          >
          </a-collada-model>
          {/* <a-collada-model
            src="#model2dae"
            id="collada-model"
            position="-1 0 2.10"
            rotation="0 45 0"
            scale="1.2 1.5 1.5"
            visible="true"
            >
            </a-collada-model> */}
        <a-collada-model
          src="#whiteboarddae"
          id="collada-model-1"
          position="-1.40 0.90 -7.40"
          rotation="0 0 0"
          scale="1 1 1"
          visible="true">
          </a-collada-model>
        <a-collada-model
          src="#whiteboarddae"
          id="collada-model-2"
          position="-3.5 0.90 -7.40"
          rotation="0 0 0"
          scale="0.5 1 1"
          visible="true"

          >
          <a-entity
            position="0.751 1.737 0.127"
            >
            <Entity
              primitive='a-text'
              position="-0.51 .5 -0.10"
              text={{
              value: this.props.currentValue,
              color: 'black'
            }} width="7"
              height ="7"
              ></Entity>
            </a-entity>
          </a-collada-model>

          <a-collada-model
            src="#lightFixtures"
            id="lightFixtures1"
            position="-0.12 5.598 1.910"
            rotation="0 0 0"
            scale="2 2 2"
            visible="true">
            </a-collada-model>

            <a-collada-model
              src="#lightFixtures"
              id="lightFixtures2"
              position="-0.137 5.598 -2.136"
              rotation="0 0 0"
              scale="2 2 2"
              visible="true">
              </a-collada-model>

            <a-collada-model
              src="#smBookshelf"
              id="booshelf"
              position="-4.92 0 -0.654"
              rotation="0 0 0"
              scale="2.5 2.5 2.5"
              visible="true">
              </a-collada-model>

            <a-collada-model
              src="#bench"
              id='bench'
              position="-4.08 0.579 2.782"
              rotation="0 90 0"
              scale="2.438 2.117 2.220"
              visible="true">
              </a-collada-model>

     </a-entity>
    )
  }
}

export default Furniture;
