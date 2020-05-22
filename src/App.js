//
import React from 'react';
import './App.css';
//
import AboveTheFold from './components/AboveTheFold';
import Mission from './components/Mission';
import Progress from './components/Progress';
import Offices from './components/Offices';
import Investors from './components/Investors';
import Future from './components/Future';
import Footer from './components/Footer';
//
function App() {
  return (
    <div className="App">
      <AboveTheFold />
      <Mission />
      <Progress />
      <Offices />
      <Investors />
      <Future />
      <Footer />
    </div>
  );
}

export default App;
