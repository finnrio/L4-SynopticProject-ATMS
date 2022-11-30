import './styling/global-style.css';
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Start from './Start.js';
import AppContents from './AppContents.jsx';


function App() {
  const runways = Start()[0]
  const aircrafts = Start()[1]

  return (
    <div className="App">
      <header className="App-header">
        <p className='header-text'>
          Airport Traffic Management System
        </p>
      </header>
      <AppContents aircrafts={aircrafts} runways={runways}/>
    </div>
  );
}

export default App;
