import React from 'react';
import {render} from 'react-dom';
import App from './App';
import 'aframe';
import {
  BrowserRouter as Router,
  Route,
  Switch
  } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Notfound from './components/notfound'
import Landingpage from './components/landingPage'
import Signup from './components/signup'
import Account from './components/account'


const Root = () =>{
  return (
    <Router>
        <Switch>
        <Route exact path="/mainPage/" component={ Landingpage }/>
        <Route exact path="/signup" component={ Signup }/>
        <Route exact path="/Account" component={ Account }/>
        <Route exact path="/" component={ App }/>
        <Route component={ Notfound }/>
      </Switch>
    </Router>
  )
}


render(<Root />, document.getElementById('sceneContainer'));
registerServiceWorker();
