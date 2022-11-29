import Table from 'react-bootstrap/Table';
import RunwayStatusService from '../services/RunwayStatusService.js';
import { useState } from "react";
import { useEffect } from 'react';

export default function Timetable(props) {

    const [runways, setRunways] = useState([]);

    useEffect(() => {
        setRunways(props.runways)
    }, [props])

    return (
        <Table striped bordered>
          <thead>
            <th>Runway</th>
            <th>Current Status</th>
          </thead>
          <tbody>
            {!runways? "No runways configued": runways.map((runway) => {
              console.log(runway)
              return <tr>
                <td key={runway.id}>{runway.id}</td>
                <td key={`${runway.id}-availability`}>{JSON.stringify(RunwayStatusService(runway))}</td>
              </tr>
            })}
          </tbody>
        </Table>
    )
}