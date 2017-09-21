import React, {Component} from 'react';
import {Entity, Scene} from 'aframe-react';
import 'aframe';
import 'aframe-firebase-component'
import 'aframe-physics-system';
import 'aframe-physics-components';
import 'aframe-animation-component';
import 'aframe-mouse-cursor-component';
import 'babel-polyfill';

import Textbox from './components/textbox'
import Furniture from './components/furniture'
import Lighting from './components/lights'
import Room from './components/room'
import Slides from './components/slides'
import Floor from './components/floor'



class App extends Component {
  constructor(){
    super();
    this.eventChange=this.eventChange.bind(this);
    this.eventSubmit=this.eventSubmit.bind(this);
    this.state = {
      currentValue:'',
      storedText:''
      }
    }

  eventChange(event){
    this.setState({storedText:event.target.value})
  }

  eventSubmit(event) {
    event.preventDefault();
      this.setState({currentValue:this.state.storedText})
    }

   render() {
     return (
       <Entity>
       <form onSubmit={this.eventSubmit}>
         <label>
           Enter text
         <input type="text"
                onChange={this.eventChange}
                placeholder="type here"/>
         </label>
         <input type="submit"
                value='Submit'></input>
       </form>
       <a-scene firebase=
                      'apiKey: AIzaSyAwkYCXg66CRC_x-vOTsupga1iqySMUmUg;
                       authDomain: hangout-vr-debed.firebaseapp.com;
                       databaseURL: https://hangout-vr-debed.firebaseio.com;
                       projectId: hangout-vr-debed;
                       storageBucket: hangout-vr-debed.appspot.com'>

          <a-assets>
          {/* avatar */}
            <a-mixin id="avatar"
                     geometry="primitive: box; depth: 0.3; height: 0.3; width: 0.3"
                     material="color: #222"
                     template="src: #avatar-template"></a-mixin>
            <a-mixin id="chair-part"
                     geometry="primitive: box"
                     material="color: brown"></a-mixin>
            <a-mixin id="arm"
                     geometry="primitive: box; depth: 0.08; height: 0.5; width: 0.08"
                     material="color: #222; shader: flat"></a-mixin>
            <a-mixin id="eye"
                     geometry="primitive: circle"
                     material="shader: flat; side: double"></a-mixin>

            <a-asset-item id="modeldae"
                          src="./assets/model.dae">
            </a-asset-item>
           <a-asset-item id="whiteboarddae"
                         src="./assets/whiteboard.dae">
          </a-asset-item>
             {/* <video id="vid1" autoPlay loop="true" src="./assets/city.mp4"/> */}
             {/* <img id="my-image" src='./assets/chatlog_eg.png'/> */}

          </a-assets>

          <Entity  camera wasd-controls-enabled="true"
                    look-controls
                    mouse-cursor
                    position="0 2 6"
                    visible="true">

          <a-cursor></a-cursor>
          <Textbox/>
          <a-entity random-position-at="selector: .chair; offset: 0 1.4 0.2"
                         rotation="0 180 0"
                         firebase-broadcast="components: position, rotation">
                 <a-entity id="head" mixin="avatar"
                           camera look-controls wasd-controls
                           firebase-broadcast="componentsOnce: mixin;
                                               components: position, raise-the-roof, rotation"
                           raise-the-roof="false">
                 </a-entity>
           </a-entity>
          <a-entity rotation="0 180 0">
           <a-entity mixin="eye" geometry="radius: 0.08"
                     material="shader: flat; side: double"
                     position="-0.1 0.1 0.18">
             <a-entity mixin="eye" geometry="radius: 0.02"
                       material="color: #222"
                       position="0 0 0.03"></a-entity>
           </a-entity>
           <a-entity mixin="eye" geometry="radius: 0.08" position="0.1 0.1 0.18">
             <a-entity mixin="eye" geometry="radius: 0.02"
                       material="color: #222" position="0 0 0.03"></a-entity>
           </a-entity>
         </a-entity>
         {/* <!-- Arms. --> */}
         <a-entity class="arms" position="0 -0.3 0">
           <a-entity mixin="arm" position="-0.3 -0.25 0" rotation="0 0 -10"></a-entity>
           <a-entity mixin="arm" position="0.3 -0.25 0" rotation="0 0 10"></a-entity>
         </a-entity>

       </Entity>




         <Entity primitive="a-sky"
                 static-body
                 id="sky"
                 position={{x:0, y: 0, z: 0}}
                 scale={{x:-1, y: 1, z: 1}}
                 radius="5000"
                 segments-width="64"
                 segments-height="20"
                 color="#072036"
                 opacity="1"
                 flat-shading="true"
                 shader="standard"
                 side="double"
                 repeat="1 1"
                 visible="true">
         </Entity>

         {/* fence="width: 10; depth: 15; x0: 1; z0: 3" */}
         {/* <Entity id="box"
            geometry={{primitive: 'box'}}
            material={{color: this.state.color, opacity: 0.6}}
            animation__2={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
            animation__1={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
            position={{x: 0, y: 1, z: -3}}
            events={{click: this.handleCLick}}>
          </Entity> */}



       <Slides></Slides>
       <Furniture currentValue={this.state.currentValue}/>
       <Lighting />
       <Room/>
       <Floor/>

     </a-scene>
      </Entity>

    );
  }
}

export default App;
