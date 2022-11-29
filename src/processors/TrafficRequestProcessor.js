import AddTrafficRequestService from "../services/AddTrafficRequestService.js";

export default class TrafficRequestProcessor {

    AddTraffic(trafficRequest){
        console.log("Traffic Req:", trafficRequest)
        try{
            AddTrafficRequestService(trafficRequest); 
        } catch (e) {
            console.log(e)
        }
    }
}