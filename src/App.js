import React from 'react';
import './App.css';
import MainWindow from './components/main-window';
import Heading from './components/heading';

function App() {
  return (
    <div className="App">
      <Heading/>
      <MainWindow/>
    </div>
  );
}

export default App;
