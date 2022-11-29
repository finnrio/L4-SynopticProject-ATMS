// import logo from './logo.svg';
import './styling/global-style.css';
import './App.css';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
// import toast, { Toaster } from 'react-hot-toast';
// import DatePicker from 'react-datepicker';
import React from 'react';
import Runway from './components/Runway.js';
import Aircraft from './components/Aircraft.js';
import RunwayStatusService from './services/RunwayStatusService.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [aircrafts, setAircrafts] = useState([]);
  const [runways, setRunways] = useState([]);
  const [selectedAircraftId, setSelectedAircraftId] = useState();
  const [selectedRunwayId, setSelectedRunwayId] = useState();

  useEffect( () => {
    const runways = []
    for(let i=1;i<5;i++){
        runways.push(new Runway(i))
    }
    setRunways(runways)
    console.log(runways)

    const aircrafts = [
      new Aircraft("F800", 15, 21),
      new Aircraft("DC1001", 12, 18),
      new Aircraft("FA20", 10, 15),
    ]
    setAircrafts(aircrafts)
    console.log(aircrafts)
  }, [])


  const handleSelectAircraft = async (aircraft) => {
    setSelectedAircraftId(aircraft);
  }

  const handleSelectRunway = async (runway) => {
    await setSelectedRunwayId(runway);
    // const runwayStatus = RunwayStatusService(runways[selectedRunwayId-1], 10, 10)
    // console.log(await getRunwayFromId(runways[selectedRunwayId]));
    // console.log(runwayStatus)
  }

  const onFormAdd = async () => {
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Header for ATMS
        </p>
      </header>
      <div className="contents">
        <Form>
          <Form.Label>Configure Traffic</Form.Label>
          <table className="mainForm">
            <tr>
              <td><Form.Label>Aircraft</Form.Label></td>
              <td>
                <Dropdown>
                  <DropdownButton title={selectedAircraftId ? selectedAircraftId : "Select an aircraft"} onSelect={handleSelectAircraft}>
                    {!aircrafts? "No aircrafts to display": aircrafts.map((aircraft) => {
                      return <Dropdown.Item key={aircraft.id} eventKey={aircraft.id}>{aircraft.id}</Dropdown.Item>
                    })}
                  </DropdownButton>
                </Dropdown>
              </td>
              <td><Form.Label>Runway</Form.Label></td>
              <td>
                <Dropdown>
                  <DropdownButton title={selectedRunwayId ? selectedRunwayId : "Select a runway"} onSelect={handleSelectRunway}>
                    {!runways? "No runways to display": runways.map((runway) => {
                      return <Dropdown.Item key={runway.id} eventKey={runway.id}>{runway.id}</Dropdown.Item>
                    })}
                  </DropdownButton>
                </Dropdown>
              </td>
          </tr>
          <tr>
            <Button variant="primary" type="add" disabled={!selectedAircraftId || !selectedRunwayId} onClick={onFormAdd}> Add traffic request </Button>
          </tr>
          </table>
        </Form>
      </div>
      <div className="runwayStatus">
        <Table striped bordered>
          <thead>
            <th>Runway</th>
            <th>Current Status</th>
          </thead>
          <tbody>
            {!runways? "No runways configued": runways.map((runway) => {
              return <tr>
                <td key={runway.id}>{runway.id}</td>
                {/* <td key={`${runway.id}-availability`> {let date = new Date();console.log(new Date.getMinutes()) }</td> */}
                <td key={`${runway.id}-availability`}>{RunwayStatusService(runway)}</td>
              </tr>
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
