import React, {Component} from 'react';
import {Entity} from 'aframe-react';
import 'aframe';
import 'aframe-firebase-component'
import 'aframe-physics-system';
import 'aframe-physics-components';
import 'aframe-animation-component';
import 'aframe-mouse-cursor-component';
import 'babel-polyfill';
// import {Redirect} from 'react-router-dom';
// import Textbox from './components/textbox'
import Furniture from './components/furniture'
import Lighting from './components/lights'
import Room from './components/room'
// import Slides from './components/slides'
import Floor from './components/floor'
// import apidetails from './config/keys'


class App extends Component {
  constructor(){
    super();
    this.eventChange = this.eventChange.bind(this);
    this.eventSubmit = this.eventSubmit.bind(this);
    this.exitRoom = this.exitRoom.bind(this);
    this.state = {
      currentValue:'',
      storedText:'',
      redirect:false
      }
    }

  eventChange(event){
    this.setState({storedText:event.target.value})
  }

  eventSubmit(event) {
    event.preventDefault();
      this.setState({currentValue:this.state.storedText})

    }

  exitRoom(event){
    event.preventDefault();
    this.setState({redirect:true}
    )
  }

   render() {
    //  if(this.state.redirect===true){
    //    return <Redirect to="/account/"/>
    //  }
    // const keys = apidetails
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
                <button onClick={this.exitRoom}>Exit</button>


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
       <a-scene firebase=
         'apiKey: AIzaSyAwkYCXg66CRC_x-vOTsupga1iqySMUmUg;
         authDomain: hangout-vr-debed.firebaseapp.com;
         channel: office;
          databaseURL: https://hangout-vr-debed.firebaseio.com;
          projectId: hangout-vr-debed;
           storageBucket: hangout-vr-debed.appspot.com'>

          <a-assets timeout="10000" >
          {/* avatar */}
            <a-mixin id="avatar"
                     geometry="primitive: sphere; radius: 0.20"
                     material="color: gray"
                    ></a-mixin>
            <a-mixin id="arm"
                     geometry="primitive: cylinder; height: 0.5; radius: 0.05"
                     material="color: gray;"></a-mixin>
            <a-mixin id="eye"
                     geometry="primitive: circle"
                     material="shader: flat; side: double"></a-mixin>


            <a-asset-item id="table"
                          src="./assets/meetingTable.dae"></a-asset-item>

            <a-asset-item id="whiteboarddae"
                         src="./assets/whiteboard.dae"></a-asset-item>
            <img id="carpet" alt="carpet" src='./assets/carpet.jpg'/>


            {/* bench              */}
            <a-asset-item id="bench"
                         src="./assets/bench1.dae"></a-asset-item>

           <a-asset-item id="smBookshelf"
                        src="./assets/bookshelfSmall.dae"></a-asset-item>
            {/* light */}
            <a-asset-item id="lightFixtures"
                         src="./assets/circularLight.dae"></a-asset-item>

           <a-asset-item id="door"
                        src="./assets/Door.dae"></a-asset-item>
          <a-asset-item id="glasswall"
                       src="./assets/glassWall2.dae"></a-asset-item>
         <a-asset-item id="clock"
                      src="./assets/wallclock.dae"></a-asset-item>
             {/* <video id="vid1" autoPlay loop="true" src="./assets/city.mp4"/> */}

             <img id="sky" alt="building" src="./assets/skyscraper.jpg"/>
          </a-assets>




          <a-sky src="#sky" rotation="0 180 0"></a-sky>


          <a-camera
                    mouse-cursor
                    position="0 0 6"
                    firebase-broadcast="componentsOnce: mixin,position;">

              {/* head */}
              <a-entity id="head" mixin="avatar"
                        position="0 0 0.180"
                        firebase-broadcast="componentsOnce: mixin,position;">
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
                             firebase-broadcast=" componentsOnce: position, mixin,geometry;">
                         <a-entity mixin="eye"
                                   geometry="radius: 0.02"
                                   material="color: #222"
                                   position="0 0 0.04"
                                   firebase-broadcast=" componentsOnce:  position, mixin,material,geometry; ">
                                   ></a-entity>
                   </a-entity>
                   <a-entity mixin="eye"
                             geometry="radius: 0.08"
                             position="0.100 0.100 0.0182"
                             firebase-broadcast=" componentsOnce: position, mixin,geometry; "
                             >
                          <a-entity mixin="eye"
                                    geometry="radius: 0.02"
                                    material="color: #222"
                                    position="0 0 0.04"
                                    firebase-broadcast=" componentsOnce: position, mixin,material,geometry;"
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

         </a-camera>

       <Furniture currentValue={this.state.currentValue}/>

       <Lighting />
       <Room/>
       <Floor />

      </a-scene>
      </Entity>

    );
  }
}

export default App;
