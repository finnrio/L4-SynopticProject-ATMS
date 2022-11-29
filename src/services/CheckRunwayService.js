export default function CheckRunwayService(runway, hour, minute) {
    if(runway.time[hour][minute].availability === "available"){
        return true;
    } else {
        return false;
    }
}