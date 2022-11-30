import Table from 'react-bootstrap/Table';
import RunwayStatusService from '../services/RunwayStatusService.ts';
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
            <tr key="head">
              <th key="runway">Runway</th>
              <th key="status">Current Status</th>
              <th key="queue">Queue</th>
            </tr>
          </thead>
          <tbody>
            {!runways? "No runways configued": runways.map((runway) => {
              const runwayStatusResp = RunwayStatusService(runway)
              return <tr key={runway.id}>
                <td key={runway.id}>{runway.id}</td>
                <td key={`${runway.id}-availability`}>{runwayStatusResp.availability}</td>
                <td key={`${runway.id}-queue`}>{runwayStatusResp.queueSize}</td>
              </tr>
            })}
          </tbody>
        </Table>
    )
}