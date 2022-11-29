export default function CheckRunwayService(runway) {
    if(runway.availability === "available"){
        console.log("Availability:", runway.availability)
        return true;
    } else {
        console.log("Availability:", runway.availability)
        return false;
    }
}