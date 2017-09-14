import React, {Component} from 'react';
import 'aframe';
import 'aframe-physics-system';
import 'aframe-physics-components';
import 'aframe-fence-component';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
// import 'aframe-room-component';
import Textbox from './components/textbox'
import Furniture from './components/furniture'
import Lighting from './components/lights'




class App extends Component {
  constructor(props){
    super(props);
    this.state = {color: 'red'};
  }

  changeColor(){
    const colors=['red','blue','orange','green','purple']
    this.setState({
      color:colors[Math.floor(Math.random() * colors.length)]
    });
  }


   render() {
     return (
       <div>
         <div>
         <textarea >HELLLLLLLOOO</textarea>
         </div>
       <Scene>

           <a-assets>
             <a-asset-item
               id="modeldae"
               src="./assets/model.dae">
             </a-asset-item>
             <a-asset-item
               id="whiteboarddae"
               src="./assets/whiteboard.dae">
             </a-asset-item>
           </a-assets>

        <Furniture/>
        <Lighting/>


         <a-sky
           id="sky"
           position="0 0 0"
           scale="-1 1 1"
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
         </a-sky>

         <a-plane
           id="ground"
           position="0 0 0"
           rotation="-90 0 0"
           width="5000"
           height="5000"
           color="#283c43"
           opacity="1"
           shader="standard"
           side="double"
           metalness="0.5"
           roughness="1"
           repeat="1 1"
           visible="true">
         </a-plane>

         <a-box
           id="box"
           position="0 1 0"
           scale="10 8 15"
           width="1"
           height="1"
           depth="1"
           color="#ffffff"
           opacity="1"
           shader="standard"
           side="double"
           metalness="0.5"
           roughness="1"
           repeat="1 1"
           visible="true"
           class="clickable"
           animation="startEvents: click;
                     property: position;
                     to: 0 0 0;
                     dur: 2000;
                     easing: linear;
                     elasticity: 400;
                     delay: 0;
                     dir: normal;
                     loop: 0; ">
         </a-box>



         {/* fence="width: 10; depth: 15; x0: 1; z0: 3" */}
         <a-camera
           look-controls
           position="0 0 6"
           visible="true"
           >

          <a-cursor></a-cursor>
          <Textbox/>
         </a-camera>

       </Scene>

       </div>
    );
  }
}

export default App;
