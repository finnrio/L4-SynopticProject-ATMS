import './styling/global-style.css';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CreateTrafficRequestService from './services/CreateTrafficRequestService.js';
import CreateTrafficJobService from './services/CreateTrafficJobService.js';
import Timetable from './components/Timetable.jsx';
import 'react-clock/dist/Clock.css';
import Clock from 'react-clock';

export default function AppContents(props) {

  const runways = props.runways;
  const aircrafts = props.aircrafts;

  const [selectedAircraftId, setSelectedAircraftId] = useState();
  const [selectedRunwayId, setSelectedRunwayId] = useState();
  const [suggestedRunway, setSuggestedRunway] = useState([]);

 
  const [value, setValue] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(new Date());
      handleRefreshRunwayRecommendation();
    }, 1000);
    

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSelectAircraft = async (aircraft) => {
    setSelectedAircraftId(aircraft);
  }

  const handleSelectRunway = async (runway) => {
    setSelectedRunwayId(runway);
  }

  const handleRefreshRunwayRecommendation = async () => {    
    let curr = runways[0];
    for(const runway in runways){
      if(runways[runway].queue.length < curr.queue.length){
        curr = runways[runway]
      }
    }
    setSuggestedRunway(curr.id);
  }

  const onFormAdd = async (event, action) => {
    event.preventDefault();
    CreateTrafficJobService(CreateTrafficRequestService(runways[selectedRunwayId-1], await getAircraftFromId(selectedAircraftId), action));
    handleRefreshRunwayRecommendation();
  }

  const getAircraftFromId = async (id) => {
    const aircraft = aircrafts.find((aircraft) => {
        return aircraft.id === id;
    })
    return aircraft
  }

  return (
    <>
      <div className="contents">
        <br></br>
        <Clock value={value} className='clock'/>
        <br></br>
        <Form>
          <h3>Configure Traffic</h3>
          <br></br>
          <table className='configureTrafficTable'>
            <tbody>
              <tr>
                <td className='halfCol'>
                  <table className="mainForm">
                    <tbody>
                    <tr>
                      <td><Form.Label>Aircraft</Form.Label></td>
                      <td>
                        <Dropdown>
                          <DropdownButton title={selectedAircraftId ? selectedAircraftId : "Select an aircraft"} onSelect={handleSelectAircraft}>
                            {!aircrafts? "No aircrafts to display": aircrafts.map((aircraft, i) => {
                              return <Dropdown.Item key={i} eventKey={aircraft.id}>{aircraft.id}</Dropdown.Item>
                            })}
                          </DropdownButton>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr>
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
                      <td><br></br></td>
                    </tr>
                    <tr>
                      <td>
                        <Button variant="primary" type="add" disabled={!selectedAircraftId || !selectedRunwayId} onClick={event => onFormAdd(event, "takeOff")}> Take Off </Button>
                      </td>
                      <td>
                        <Button variant="primary" type="add" disabled={!selectedAircraftId || !selectedRunwayId} onClick={event => onFormAdd(event, "landing")}> Landing </Button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </td>
                <td className='halfCol'>
                  <p>
                    {!suggestedRunway? "No runways are currently available": `Suggested runway: ${suggestedRunway}`}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          
          <br></br>
        </Form>
        <br></br>
      </div>
      <div className="runwayStatus">
        <Timetable className ='timetable' runways={runways}/>
      </div>
    </>
  )
}