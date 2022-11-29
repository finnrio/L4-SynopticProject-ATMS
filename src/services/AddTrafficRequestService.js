// import CheckRunwayService from "./CheckRunwayService.js";

export default function AddTrafficRequestService(trafficRequest){
//     const runway = trafficRequest.runway;
//     const aircraft = trafficRequest.aircraft;
//     const type = trafficRequest.type;
//     const time = aircraft.getTrafficTime(type);
//     let hour = trafficRequest.hour;
//     let minute = trafficRequest.minute;
    

//     for(let i = 0; i < time; i++){
//         if(CheckRunwayService(runway, hour, minute)){
//             runway.time[hour][minute].availability = trafficRequest.type;
//         }else{
//             throw new Error ("Too much traffic")
//         }
//         let check = checkTime(minute, hour);
//         minute = check[0];
//         hour = check[1];
//     }
    
//     for(let i = 0; i < 5; i++){
//         runway.time[hour][minute].availability = "preparing"
//         let check = checkTime(minute, hour);
//         minute = check[0];
//         hour = check[1];
//     }
// }

// function checkTime(minute, hour){
//     if(minute+1 > 59){
//         return [0, hour += 1];
//     }else{
//         return [(minute += 1), hour];
//     }
}