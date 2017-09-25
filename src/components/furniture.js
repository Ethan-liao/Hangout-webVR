import React from 'react';
import {Entity} from 'aframe-react';

class Furniture extends React.Component {
  render() {
    return (
      <a-entity firebase-broadcast>


        <a-collada-model
          firebase-broadcast="
                      components: position"
          src="#modeldae"
          id="collada-model"
          position="-1 0 2.10"
          rotation="0 1 0"
          scale="1.2 1.5 1.5"
          visible="true"
          >
          </a-collada-model>
        <a-collada-model
          src="#whiteboarddae"
          id="collada-model-1"
          position="-1.40 0.90 -7.40"
          rotation="0 0 0"
          scale="1.5 1.5 1"
          visible="true"
          firebase-broadcast="
                      components: position"
          >
          </a-collada-model>
        <a-collada-model
          src="#whiteboarddae"
          id="collada-model-2"
          position="-4.30 0.90 -7.40"
          rotation="0 0 0"
          scale="0.7 1.5 1"
          visible="true"
          firebase-broadcast="
                      components: position"
          >
          <a-entity
            position="0.751 1.737 0.127"
            firebase-broadcast="
                        components: position">
            <Entity
              primitive='a-text'
              text={{
              value: this.props.currentValue,
              color: 'black'
            }} width="7"
              height ="7"

              firebase-broadcast="
                          components: primitive, text, width, height"
              ></Entity>
            </a-entity>
          </a-collada-model>
     </a-entity>
    )
  }
}

export default Furniture;
