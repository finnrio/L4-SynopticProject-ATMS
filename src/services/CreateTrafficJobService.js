import CheckRunwayService from "./CheckRunwayService.js"

export default function CreateTrafficJobService(trafficRequest){
    const runway = trafficRequest.runway;
    const aircraft = trafficRequest.aircraft;
    const action = trafficRequest.action;
    const time = aircraft.getTrafficTime(action);   


    if(CheckRunwayService(runway)){
        runway.QueueAdd(action, time)
    }
}