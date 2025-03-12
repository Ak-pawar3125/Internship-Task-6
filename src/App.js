// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <MyComponent />
      {/* New div added here */}
      <div>
        <h2>This is another div</h2>
        <p>React allows multiple elements inside a component!</p>
      </div>
    </div>
  );
}

export default App;
