import CheckRunwayService from "./CheckRunwayService.js"
import RunwayProcessor from "../processors/RunwayProcessor.js";

export default function CreateTrafficJobService(trafficRequest){
    const runway = trafficRequest.runway;
    const aircraft = trafficRequest.aircraft;
    const action = trafficRequest.action;
    const time = aircraft.getTrafficTime(action);

    const runwayProcessor = new RunwayProcessor();
    runway.QueueAdd(action, time)
    if(CheckRunwayService(runway)){
        runwayProcessor.Process(runway);
    }
}