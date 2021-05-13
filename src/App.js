import React from 'react'
import { HashRouter as Router, Route } from "react-router-dom";

//screens
import HomeScreen from './screens/HomeScreen'
import MainScreen from './screens/MainScreen'

//style
import './style/style.css'

import firebase from 'firebase';
import firebaseConfig from './config/firebase'

firebase.initializeApp(firebaseConfig)

function App() {
  const data = firebase.database().ref('/');
  data.on('value', snpashot => {
    console.log(snpashot.val())
  })
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/mainscreen' exact component={MainScreen} />
      </div>
    </Router>
  );
}

export default App;
