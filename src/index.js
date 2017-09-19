import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
  } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Notfound from './components/notfound'
import Landingpage from './components/landingPage'
import {Entity, Scene} from 'aframe-react';
import Signup from './components/signup'
import 'aframe';


const Root = () =>{
  return (
    <Router>
        <Switch>
        <Route exact path="/mainPage/" component={ Landingpage }/>
        <Route exact path="/signup" component={ Signup }/>
        <Route exact path="/" component={ App }/>
        <Route component={ Notfound }/>
      </Switch>
    </Router>
  )
}


render(<Root />, document.getElementById('sceneContainer'));
registerServiceWorker();
