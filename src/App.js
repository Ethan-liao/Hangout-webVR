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
                {/* <div></div>
                <label>
                  Upload a file
                <input type="file"
                       accept="file_extension.pdf/audio/*,video/*,image/*"
                       />
                </label>
                <input type="submit"
                       value='Submit'></input> */}

       </form>


       <a-scene stats firebase=
                      'apiKey: AIzaSyAwkYCXg66CRC_x-vOTsupga1iqySMUmUg;
                       authDomain: hangout-vr-debed.firebaseapp.com;
                       channel: office;
                       databaseURL: https://hangout-vr-debed.firebaseio.com;
                       projectId: hangout-vr-debed;
                       storageBucket: hangout-vr-debed.appspot.com'>

          <a-assets >
          {/* avatar */}
            <a-mixin id="avatar"
                     geometry="primitive: sphere; radius: 0.20"
                     material="color: #222"
                     template="src: #avatar-template"></a-mixin>
            <a-mixin id="arm"
                     geometry="primitive: cylinder; height: 0.5; radius: 0.05"
                     material="color: #222; shader: flat"></a-mixin>
            <a-mixin id="eye"
                     geometry="primitive: circle"
                     material="shader: flat; side: double"></a-mixin>
            {/* avatar */}

            <a-asset-item id="modeldae"
                          src="./assets/model.dae"></a-asset-item>
           <a-asset-item id="whiteboarddae"
                         src="./assets/whiteboard.dae"></a-asset-item>
             {/* <video id="vid1" autoPlay loop="true" src="./assets/city.mp4"/> */}
             {/* <img id="my-image" src='./assets/chatlog_eg.png'/> */}

          </a-assets>

          <a-camera
                    mouse-cursor
                    position="0 0 6"
                    firebase-broadcast="componentsOnce: mixin;
                                        components: position, rotation">

              <a-cursor></a-cursor>
              {/* <Textbox/> */}
              {/* head */}
              <a-entity id="head" mixin="avatar" name="head1"
                        position="0 0 0.180"
                        firebase-broadcast="componentsOnce: mixin,position;"
                                            >
              </a-entity>
              {/* eyes */}
              <a-entity rotation="0 180 0"
                firebase-broadcast=" componentsOnce:  rotation"
                >
                   <a-entity
                             mixin="eye"
                             geometry="radius: 0.08"
                             material="shader: flat; side: double"
                             position="-0.1 0.1 0.0182"
                             firebase-broadcast=" componentsOnce: mixin,material,geometry;">
                         <a-entity mixin="eye"
                                   geometry="radius: 0.02"
                                   material="color: #222"
                                   position="0 0 0.04"
                                   firebase-broadcast=" componentsOnce: mixin,material,geometry; ">
                                   ></a-entity>
                   </a-entity>
                   <a-entity mixin="eye"
                             geometry="radius: 0.08"
                             position="0.100 0.100 0.0182"
                             firebase-broadcast=" componentsOnce: mixin,material,geometry; "
                             >
                          <a-entity mixin="eye"
                                    geometry="radius: 0.02"
                                    material="color: #222"
                                    position="0 0 0.04"
                                    firebase-broadcast=" componentsOnce: mixin,material,geometry;"
                                    ></a-entity>
                   </a-entity>
             </a-entity>
             {/* <!-- Arms. --> */}
             <a-entity class="arms"
                       position="0 -0.3 0.139"
                       firebase-broadcast="components: position">
                   <a-entity mixin="arm"
                             position="-0.3 -0.25 0"
                             rotation="0 0 -10"
                             firebase-broadcast="componentsOnce: mixin,rotation;  "></a-entity>
                   <a-entity mixin="arm"
                             position="0.3 -0.25 0"
                             rotation="0 0 10"
                             firebase-broadcast="componentsOnce: mixin, rotation; "></a-entity>
             </a-entity>
             <a-entity position="-0.77 0.060 -1.19" firebase-broadcast="componentsOnce: position">

               <Entity primitive='a-text'
                 text={{
                 value: this.state.currentValue,
                 color: 'black'
               }}
                //  position="0.751 1.737 0.127"
                 firebase-broadcast="
                             componentsOnce: primitive, text "
                 ></Entity>
             </a-entity>
         </a-camera>



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
       <Furniture currentValue={this.state.currentValue}
       />

       <Lighting />
       <Room/>
       <Floor/>

     </a-scene>
      </Entity>

    );
  }
}

export default App;
