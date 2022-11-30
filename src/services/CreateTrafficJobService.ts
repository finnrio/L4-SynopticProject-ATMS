import CheckRunwayService from "./CheckRunwayService"
import RunwayProcessor from "../processors/RunwayProcessor";

export default function CreateTrafficJobService(trafficRequest){
    const runway = trafficRequest.runway;
    const aircraft = trafficRequest.aircraft;
    const action = trafficRequest.action;
    const time = aircraft.GetTrafficTime(action);

    const runwayProcessor = new RunwayProcessor();
    runway.QueueAdd(action, time);
    if(CheckRunwayService(runway)){
        runwayProcessor.Process(runway);
    }
}