//
import React from 'react';
import './App.css';
//
import AboveTheFold from './components/AboveTheFold';
import Mission from './components/Mission';
import Progress from './components/Progress';
import Offices from './components/Offices';
//
function App() {
  return (
    <div className="App">
      <AboveTheFold />
      <Mission />
      <Progress />
      <Offices />
    </div>
  );
}

export default App;
