// import logo from './logo.svg';
import './styling/global-style.css';
import './App.css';
// import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/Button';
// import { useState, useEffect } from "react";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Table from 'react-bootstrap/Table';
// import toast, { Toaster } from 'react-hot-toast';
// import DatePicker from 'react-datepicker';
import React from 'react';
// import Runway from './components/Runway.js';
// import Aircraft from './components/Aircraft.js';
// import RunwayStatusService from './services/RunwayStatusService.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import TrafficRequestProcessor from './processors/TrafficRequestProcessor.js';
// import CreateTrafficRequestService from './services/CreateTrafficRequestService.js';
import Start from './Start.js';
import AppContents from './AppContents.jsx';


function App() {
  const runways = Start()[0]
  const aircrafts = Start()[1]

  console.log("air:", aircrafts)
  console.log("run:", runways)


  // const trafficRequestProcessor = new TrafficRequestProcessor()

  // // const [aircrafts, setAircrafts] = useState([]);
  // // const [runways, setRunways] = useState([]);
  // const [selectedAircraftId, setSelectedAircraftId] = useState();
  // const [selectedRunwayId, setSelectedRunwayId] = useState();

  // // useEffect( () => {
  // //   const runways = []
  // //   for(let i=0;i<4;i++){
  // //       runways.push(new Runway(i+1))
  // //   }
  // //   setRunways(runways)

  // //   const aircrafts = [
  // //     new Aircraft("F800", 15, 21),
  // //     new Aircraft("DC1001", 12, 18),
  // //     new Aircraft("FA20", 10, 15),
  // //   ]
  // //   setAircrafts(aircrafts)
  // // }, [])


  // const handleSelectAircraft = async (aircraft) => {
  //   setSelectedAircraftId(aircraft);
  // }

  // const handleSelectRunway = async (runway) => {
  //   setSelectedRunwayId(runway);
  // }

  // const onFormAdd = async () => {
  //   trafficRequestProcessor.AddTraffic(CreateTrafficRequestService(runways[selectedRunwayId], aircrafts[selectedAircraftId], "landing"))
  // }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Header for ATMS
        </p>
      </header>
      <AppContents aircrafts={aircrafts} runways={runways}/>
    </div>
  );
}

export default App;
