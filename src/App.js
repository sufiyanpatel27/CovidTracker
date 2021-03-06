import React from 'react'
import { HashRouter as Router, Route } from "react-router-dom";

//screens
import HomeScreen from './screens/HomeScreen'
import MainScreen from './screens/MainScreen'
import LoginScreen from './screens/LoginScreen'
import dashboard from './screens/dashboard'
import SignupScreen from './screens/signup'

//style
import './style/style.css'

import firebase from 'firebase';
import firebaseConfig from './config/firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/mainscreen' exact component={MainScreen} />
        <Route path='/login' exact component={LoginScreen} />
        <Route path='/dashboard' exact component={dashboard} />
        <Route path='/signup' exact component={SignupScreen} />
      </div>
    </Router>
  );
}

export default App;
