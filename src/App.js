import "./App.css";
import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <MyComponent />
      <div>
        <h2>This is another div</h2>
        <p>React allows multiple elements inside a component!</p>
      </div>
    </div>
  );
}

export default App;
