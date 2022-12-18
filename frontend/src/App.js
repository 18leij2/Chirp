// import logo from './logo.svg';
// import './App.css';
// import Home from './Views/Home.js';
// import Contact from "./Views/Contact.js";
// // import Contact from './Views/Contact.js';
// // import Error from './Views/Error.js';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Messages1 from './Views/Messages1.js';


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {<Route path="/Messages" element = {<Messages1/>}></Route>}
//         {<Route path="/Contact" element={<Contact />} />}
//         {/* <Route path="/*" element={<Error />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './Components/Navbar.js';
import Feed from './Components/Feed.js';
import Widgets from './Components/Widgets.js';
import './App.css';

function App() {    
  return <div className = 'app'>
    {/* <h1>Hey there this is the new twitter layout</h1> */}

    { /* Navbar */ }
    <Navbar/>

    { /* Feed */ }
    <Feed/>

    { /* Widgets */ }
    <Widgets/>

    { /* What's New */ }
  </div>;
}
  export default App;