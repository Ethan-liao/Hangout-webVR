import React, {Component} from 'react';
import {Entity, Scene} from 'aframe-react';
import 'aframe';
import 'aframe-physics-system';
import 'aframe-physics-components';
import 'aframe-fence-component';
import 'aframe-animation-component';
import 'aframe-mouse-cursor-component';
import 'babel-polyfill';


import Textbox from './components/textbox'
import Furniture from './components/furniture'
import Lighting from './components/lights'
import Room from './components/room'
import Slides from './components/slides'
import Floor from './components/floor'
import keyCodes from './components/keystrokes.js';


class App extends Component {
  constructor(){
    super();
    this.eventChange=this.eventChange.bind(this);
    this.eventSubmit=this.eventSubmit.bind(this);
    // this.changeColor=this.changeColor.bind(this);
    this.state = {
      color: 'red',
      keystroke:''
      }
    }


  eventChange(event){
    this.setState({keystroke:event.target.value})

  }

  eventSubmit(event) {
      alert('A name was submitted: ' + this.state.keystroke);
      event.preventDefault();
    }
  // changeColor(){
  //   const colors=['red','blue','orange','green','purple']
    // console.log("color been clicked !!!!");
    // this.setState({
    //   color:colors[Math.floor(Math.random() * colors.length)]
    // });
  // }


   render() {
     return (
       <Entity>
       <form onSubmit={this.eventSubmit}>
         <label>
           Enter text
         <input type="text"  onChange={this.eventChange} value={this.state.keystroke} placeholder="type here"/>
         </label>
         <input type="submit" value='Submit'></input>
       </form>
       <Scene >
        <a-assets>
           <a-asset-item
             id="modeldae"
             src="./assets/model.dae">
           </a-asset-item>
           <a-asset-item
             id="whiteboarddae"
             src="./assets/whiteboard.dae">
           </a-asset-item>
           {/* <video id="vid1" autoPlay loop="true" src="./assets/city.mp4"/> */}
           {/* <img id="my-image" src='./assets/chatlog_eg.png'/> */}

         </a-assets>

         <Entity
           primitive="a-sky"
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

         <a-camera
           wasd-controls-enabled="true"
           look-controls
           mouse-cursor
           position="0 0 6"
           visible="true"
           >

         {/* <Entity
           primitive='a-plane'
           material={{color:'black'}}
           width='2'
           height='2'
           events={{click: this.handleCLick}}
           position={{x: 0, y: 1, z: -2}}>

          <Entity
              primitive='a-text'
              text={{value:this.state.text, color:this.state.textColor}}
              >
          </Entity>

         </Entity> */}


         <a-cursor></a-cursor>
         <Textbox/>
        </a-camera>

       <Slides></Slides>
       <Furniture keystroke={this.state.keystroke}/>
       <Lighting />
       <Room/>
       <Floor/>

       </Scene>

</Entity>

    );
  }
}

export default App;
