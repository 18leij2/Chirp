import React from 'react';
import Navbar from './Components/Navbar.js';
import Feed from './Components/Feed.js';
import Widgets from './Components/Widgets.js';
import './App.css';

function App() {    
  return <div className = 'app'>
    <Navbar/>

    <Feed/>

    <Widgets/>
  </div>;
}

  export default App;