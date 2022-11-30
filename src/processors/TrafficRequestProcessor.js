import AddTrafficRequestService from "../services/AddTrafficRequestService.js";

export default class TrafficRequestProcessor {

    AddTraffic(trafficRequest){
        try{
            AddTrafficRequestService(trafficRequest); 
        } catch (e) {
            console.log(e)
        }
    }
}