import React from 'react';
import 'aframe';
import {Entity} from 'aframe-react';

class Slides extends React.Component {

  render() {
    return (

      <Entity>
        <a-video
          src='#vid1'
          scale="6.07 3.63 1"
          position="1.673 2.725 -7.338"
        >
        </a-video>

        <a-image
          src='#my-image'
          position="-2.874 2.744 -7.3"
          scale="2.83 3.63 1"
        >
        </a-image>


      </Entity>

    )
  }
}

export default Slides;
