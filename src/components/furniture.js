import React from 'react';
import {Entity} from 'aframe-react';
import 'aframe-firebase-component'

class Furniture extends React.Component {
  render() {
    return (

      <a-entity firebase-broadcast>
        <a-entity
          position="-2.71 2.336 -7.35"
          firebase-broadcast="
                      components: position"
          >
          <Entity
            primitive='a-text'
            position="-0.58 0.686 0.304"
            text={{
            value: this.props.currentValue,
            color: 'black'
          }} width="7"
            height ="7"
            firebase-broadcast="
                        components: primitive, text, width, height"
            ></Entity>
          </a-entity>

        <a-collada-model

          src="#table"
          id="collada-model"
          position="-1.4 0 1.75"
          scale="1.4 1.4 1.7"
          visible="true"
          >
          </a-collada-model>
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

              <a-collada-model src="#clock"
                collada-model="./assets/wallclock.dae"
                id="clock"
                position="0.088 3.231 7.226"
                scale="1.5 1.5 1.5"
                rotation="0 90 0">
                </a-collada-model>
     </a-entity>

    )
  }
}

export default Furniture;
